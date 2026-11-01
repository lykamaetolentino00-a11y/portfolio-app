import { useEffect, useRef } from 'react';

// The star field in the hero. Stars drift slowly, and lines connect them to the pointer.
export default function Constellation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const parent = canvas.parentElement;
        const ctx = canvas.getContext('2d');
        const mouse = { x: -999, y: -999 };
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        let width = 0;
        let height = 0;
        let stars = [];
        let frame = 0;

        // Read the accent color from the page, so it changes with the theme
        const color = () =>
            getComputedStyle(canvas).getPropertyValue('--ac').trim() || '#8fb8ff';

        const resize = () => {
            const box = parent.getBoundingClientRect();
            width = canvas.width = box.width;
            height = canvas.height = box.height;
            stars = Array.from(
                { length: Math.min(90, Math.floor((width * height) / 9000)) },
                () => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.15,
                    vy: (Math.random() - 0.5) * 0.15,
                    r: Math.random() * 1.4 + 0.4,
                }),
            );
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            const tint = color();
            ctx.fillStyle = tint;
            ctx.strokeStyle = tint;

            stars.forEach((star) => {
                if (!reduceMotion) {
                    star.x += star.vx;
                    star.y += star.vy;
                    if (star.x < 0 || star.x > width) star.vx *= -1;
                    if (star.y < 0 || star.y > height) star.vy *= -1;
                }

                // the star itself
                ctx.globalAlpha = 0.7;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r, 0, 6.28);
                ctx.fill();

                // a line from the star to the pointer
                const toPointer = Math.hypot(star.x - mouse.x, star.y - mouse.y);
                if (toPointer < 160) {
                    ctx.globalAlpha = (1 - toPointer / 160) * 0.8;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(star.x, star.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }

                // lines between nearby stars, only near the pointer
                stars.forEach((other) => {
                    const gap = Math.hypot(star.x - other.x, star.y - other.y);
                    if (gap < 90 && gap > 0 && toPointer < 200) {
                        ctx.globalAlpha = (1 - gap / 90) * 0.35;
                        ctx.beginPath();
                        ctx.moveTo(star.x, star.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                });
            });

            frame = requestAnimationFrame(draw);
        };

        const onMove = (event) => {
            const box = canvas.getBoundingClientRect();
            mouse.x = event.clientX - box.left;
            mouse.y = event.clientY - box.top;
        };
        const onLeave = () => {
            mouse.x = mouse.y = -999;
        };

        parent.addEventListener('pointermove', onMove);
        parent.addEventListener('pointerleave', onLeave);
        window.addEventListener('resize', resize);
        resize();
        draw();

        // Clean up when the page is left, so the animation stops
        return () => {
            cancelAnimationFrame(frame);
            parent.removeEventListener('pointermove', onMove);
            parent.removeEventListener('pointerleave', onLeave);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="bw-sky" aria-hidden="true"></canvas>;
}

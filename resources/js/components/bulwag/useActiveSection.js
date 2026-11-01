import { useEffect, useState } from 'react';

// Returns the id of the section that crosses the middle of the screen.
// The sidebar and the mobile menu use it to highlight the current link.
export default function useActiveSection() {
    const [active, setActive] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('main section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -55% 0px' },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return active;
}

import Constellation from './Constellation';

export default function Hero() {
    return (
        <section id="home" className="min-h-[88vh] flex items-end">
            <div className="bw-hero w-full min-h-[88vh] flex items-end">
                <Constellation />
                <div className="relative px-6 md:px-14 pb-16 pt-32 max-w-3xl">
                    <p className="bw-muted mb-4">
                        Third-year IT student building clear, friendly websites.
                    </p>
                    <h1
                        className="font-extrabold"
                        style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)' }}
                    >
                        Rachel Anne
                        <br />
                        Bulwag
                    </h1>
                    <p className="bw-muted mt-6 max-w-xl text-lg">
                        I turn ideas into simple, working web pages with HTML,
                        Tailwind CSS, and JavaScript. Move your cursor over the
                        stars—they connect to where you point.
                    </p>
                    <div className="mt-8 flex gap-3 flex-wrap">
                        <a className="bw-btn bw-pri" href="#projects">
                            View my projects
                        </a>
                        <a className="bw-btn" href="#contact">
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

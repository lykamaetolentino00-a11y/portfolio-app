import { Head } from '@inertiajs/react';
import About from '../components/bulwag/About';
import Contact from '../components/bulwag/Contact';
import Education from '../components/bulwag/Education';
import Footer from '../components/bulwag/Footer';
import Hero from '../components/bulwag/Hero';
import MobileNav from '../components/bulwag/MobileNav';
import Projects from '../components/bulwag/Projects';
import Sidebar from '../components/bulwag/Sidebar';
import Skills from '../components/bulwag/Skills';
import useActiveSection from '../components/bulwag/useActiveSection';

// Rachel Anne Bulwag's portfolio, available at /bulwag
export default function Bulwag() {
    const active = useActiveSection(); // which section is on screen (for the menu)

    return (
        <div className="bulwag min-h-screen">
            <Head title="Rachel Anne Bulwag · Portfolio">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=DM+Sans:wght@400;500;600&display=swap"
                />
            </Head>

            <MobileNav active={active} />

            <div className="lg:grid lg:grid-cols-[260px_1fr]">
                <Sidebar active={active} />

                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Education />
                    <Contact />
                    <Footer />
                </main>
            </div>
        </div>
    );
}

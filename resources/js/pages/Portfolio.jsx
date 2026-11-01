import { Head } from '@inertiajs/react';
import About from '../components/tolentino/About';
import Contact from '../components/tolentino/Contact';
import Education from '../components/tolentino/Education';
import Footer from '../components/tolentino/Footer';
import Hero from '../components/tolentino/Hero';
import Navbar from '../components/tolentino/Navbar';
import Projects from '../components/tolentino/Projects';
import Skills from '../components/tolentino/Skills';

// The public portfolio page.
// "projects" comes from the database (PortfolioController::index).
export default function Portfolio({ projects = [] }) {
    return (
        <div className="tolentino min-h-screen font-sans">
            <Head title="Lyka Tolentino | BSIT Student and Aspiring Web Developer" />

            <a href="#main" className="skip-link">
                Skip to content
            </a>

            <Navbar />

            <main id="main">
                <Hero />
                <About />
                <Skills />
                <Projects projects={projects} />
                <Education />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

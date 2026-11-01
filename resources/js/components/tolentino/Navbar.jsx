import { useEffect, useState } from 'react';

// Add or remove links here. The "href" must match a section id on the page.
const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // mobile menu open or closed
    const [isDark, setIsDark] = useState(false); // current theme
    const [active, setActive] = useState(''); // id of the section being viewed

    // 1. When the page loads, sync the theme button with the <html> class
    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    // 2. Escape closes the menu; growing to desktop size also closes it
    useEffect(() => {
        const onKey = (event) => {
            if (event.key === 'Escape') setMenuOpen(false);
        };
        const media = window.matchMedia('(min-width: 768px)');
        const onChange = (event) => {
            if (event.matches) setMenuOpen(false);
        };

        document.addEventListener('keydown', onKey);
        media.addEventListener('change', onChange);
        return () => {
            document.removeEventListener('keydown', onKey);
            media.removeEventListener('change', onChange);
        };
    }, []);

    // 3. Highlight the nav link of the section that crosses the middle of the screen
    useEffect(() => {
        const sections = document.querySelectorAll('main section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        document.documentElement.classList.toggle('dark', next);
        setIsDark(next);
        try {
            localStorage.setItem('theme', next ? 'dark' : 'light');
        } catch (error) {
            // Storage blocked: the theme still changes, it just is not remembered.
        }
    };

    return (
        <header className="site-nav fixed inset-x-0 top-0 z-50">
            <nav aria-label="Primary" className="max-w-6xl mx-auto px-6">
                <div className="flex h-16 items-center justify-between">
                    <a
                        href="#home"
                        className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight"
                    >
                        <span
                            className="inline-block w-3 h-3 bg-brand"
                            aria-hidden="true"
                        ></span>
                        Lyka
                    </a>

                    <ul className="hidden md:flex items-center gap-8 text-sm">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="nav-link"
                                    aria-current={
                                        active === link.href.slice(1)
                                            ? 'true'
                                            : undefined
                                    }
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            className="icon-btn"
                            onClick={toggleTheme}
                            aria-label={
                                isDark
                                    ? 'Switch to light mode'
                                    : 'Switch to dark mode'
                            }
                        >
                            <i
                                className={
                                    isDark
                                        ? 'fa-solid fa-sun'
                                        : 'fa-solid fa-moon'
                                }
                                aria-hidden="true"
                            ></i>
                        </button>

                        <button
                            type="button"
                            className="icon-btn md:hidden"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                        >
                            <i
                                className={
                                    menuOpen
                                        ? 'fa-solid fa-xmark'
                                        : 'fa-solid fa-bars'
                                }
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div id="mobile-menu" className={menuOpen ? 'open' : ''}>
                    <div>
                        <ul className="flex flex-col gap-1 pb-4">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="mobile-link"
                                        onClick={() => setMenuOpen(false)}
                                        aria-current={
                                            active === link.href.slice(1)
                                                ? 'true'
                                                : undefined
                                        }
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

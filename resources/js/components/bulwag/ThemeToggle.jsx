import { useEffect, useState } from 'react';

// Switches light/dark by adding or removing the "dark" class on <html>.
// It saves the choice in localStorage, the same way Tolentino's page does,
// so the chosen theme follows the visitor from one portfolio to the other.
export default function ThemeToggle({ className = '', label = '◐' }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    const toggle = () => {
        const next = !isDark;
        document.documentElement.classList.toggle('dark', next);
        setIsDark(next);
        try {
            localStorage.setItem('theme', next ? 'dark' : 'light');
        } catch (error) {
            // Storage blocked: the theme still changes for this visit.
        }
    };

    return (
        <button
            type="button"
            className={className}
            onClick={toggle}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
            {label}
        </button>
    );
}

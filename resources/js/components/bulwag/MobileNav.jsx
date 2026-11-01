import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { navItems } from './navItems';
import ThemeToggle from './ThemeToggle';

// The top bar and dropdown menu shown on small screens (hidden on large ones).
export default function MobileNav({ active }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header
                className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-5 py-3 border-b"
                style={{ background: 'var(--bg)', borderColor: 'var(--line)' }}
            >
                <a
                    href="#home"
                    className="font-bold"
                    style={{ fontFamily: "'Bricolage Grotesque'" }}
                >
                    Rachel Anne Bulwag
                </a>
                <div className="flex gap-2">
                    <ThemeToggle className="bw-btn py-1! px-3!" />
                    <button
                        type="button"
                        className="bw-btn py-1! px-3!"
                        aria-expanded={open}
                        aria-controls="bw-mobile-nav"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>
                </div>
            </header>

            <nav
                id="bw-mobile-nav"
                className={'lg:hidden px-5 py-3 border-b bw-rail ' + (open ? '' : 'hidden')}
                style={{ borderColor: 'var(--line)', background: 'var(--bg)' }}
                aria-label="Mobile"
            >
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={active === item.id ? 'on' : ''}
                        onClick={() => setOpen(false)}
                    >
                        {item.label}
                    </a>
                ))}
                {/* Link to the other portfolio in this app */}
                <Link href="/">Lyka&apos;s portfolio</Link>
            </nav>
        </>
    );
}

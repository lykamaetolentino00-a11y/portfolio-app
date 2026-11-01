import { Link } from '@inertiajs/react';
import { navItems } from './navItems';
import ThemeToggle from './ThemeToggle';

// The fixed left sidebar shown on large screens.
export default function Sidebar({ active }) {
    return (
        <aside
            className="hidden lg:flex flex-col justify-between sticky top-0 h-screen p-8 border-r"
            style={{ borderColor: 'var(--line)', background: 'var(--bg2)' }}
        >
            <div>
                <p
                    className="text-2xl font-extrabold"
                    style={{ fontFamily: "'Bricolage Grotesque'" }}
                >
                    Rachel Anne
                    <br />
                    Bulwag
                </p>
                <p className="bw-muted text-sm mt-1">IT student · Web developer</p>

                <nav className="bw-rail mt-10" aria-label="Main">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={active === item.id ? 'on' : ''}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="grid gap-3">
                {/* Link to the other portfolio in this app */}
                <Link href="/" className="bw-btn text-center">
                    ← Lyka&apos;s portfolio
                </Link>
                <ThemeToggle className="bw-btn" label="◐ Switch theme" />
            </div>
        </aside>
    );
}

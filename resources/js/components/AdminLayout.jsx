import { Link } from '@inertiajs/react';

// Shared frame for the management pages (Index, Create, Edit).
export default function AdminLayout({ title, children }) {
    return (
        <div className="tolentino min-h-screen font-sans">
            <header className="site-nav sticky top-0 z-40">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link
                        href="/projects"
                        className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight"
                    >
                        <span
                            className="inline-block w-3 h-3 bg-brand"
                            aria-hidden="true"
                        ></span>
                        Manage projects
                    </Link>
                    <Link href="/" className="link-btn text-sm">
                        View portfolio
                    </Link>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12">
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
                    {title}
                </h1>
                <div className="mt-8">{children}</div>
            </main>
        </div>
    );
}

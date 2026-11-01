import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="border-t border-line bg-frame">
            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-sm text-muted">
                <div>
                    <p>
                        &copy; {new Date().getFullYear()} Lyka Tolentino. Built
                        with Laravel, Inertia.js, React, and Tailwind CSS.
                    </p>
                </div>
                <div className="flex gap-6 shrink-0">
                    {/* Opens the management pages (the CRUD for projects) */}
                    <Link href="/projects" className="link-btn">
                        Manage projects
                    </Link>
                    <a href="#home" className="link-btn">
                        Back to top
                    </a>
                </div>
            </div>
        </footer>
    );
}

import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import ConfirmDialog from '../../components/ConfirmDialog';

function formatDate(value) {
    return new Date(value + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

export default function Index({ projects, success }) {
    const [toDelete, setToDelete] = useState(null); // the project waiting for confirmation
    const [deleting, setDeleting] = useState(false);

    // The project to delete is passed in, so this function never reads a value
    // that could still be null (this is what crashed the page before).
    const confirmDelete = (project) => {
        if (!project) return;

        router.delete(`/projects/${project.id}`, {
            preserveScroll: true,
            onStart: () => setDeleting(true),
            onFinish: () => {
                setDeleting(false);
                setToDelete(null);
            },
        });
    };

    return (
        <AdminLayout title="Projects">
            <Head title="Manage projects" />

            {/* Success message after create, update, or delete */}
            {success && (
                <div
                    role="status"
                    className="mb-6 border border-brand bg-brand/10 rounded-lg px-4 py-3 text-sm font-semibold"
                >
                    {success}
                </div>
            )}

            <div className="flex items-center justify-between gap-4 mb-6">
                <p className="text-muted">
                    {projects.length}{' '}
                    {projects.length === 1 ? 'project' : 'projects'}
                </p>
                <Link href="/projects/create" className="btn btn-primary">
                    Add project
                </Link>
            </div>

            {projects.length === 0 ? (
                <p className="frame-card p-8 text-center text-muted">
                    No projects yet. Click &quot;Add project&quot; to create
                    your first one.
                </p>
            ) : (
                <ul className="frame-card">
                    {projects.map((project, index) => (
                        <li
                            key={project.id}
                            className={
                                'flex flex-col sm:flex-row sm:items-center gap-4 p-4 ' +
                                (index > 0 ? 'border-t border-line' : '')
                            }
                        >
                            {project.image ? (
                                <img
                                    src={`/storage/${project.image}`}
                                    alt=""
                                    className="h-16 w-24 object-cover rounded border border-line shrink-0"
                                />
                            ) : (
                                <div
                                    className="h-16 w-24 rounded bg-subtle border border-line shrink-0"
                                    aria-hidden="true"
                                ></div>
                            )}

                            <div className="flex-1 min-w-0">
                                <h2 className="font-display font-bold text-lg leading-tight">
                                    {project.title}
                                </h2>
                                <p className="mt-1 text-sm text-muted truncate">
                                    {project.tools}
                                </p>
                                <div className="mt-2 flex items-center gap-3">
                                    <span className="tag capitalize">
                                        {project.category}
                                    </span>
                                    <span className="text-xs text-muted">
                                        {formatDate(project.date_completed)}
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-2 shrink-0">
                                <Link
                                    href={`/projects/${project.id}/edit`}
                                    className="btn btn-ghost !py-2"
                                >
                                    Edit
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-ghost !py-2"
                                    onClick={() => setToDelete(project)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <ConfirmDialog
                open={toDelete !== null}
                title="Delete this project?"
                message={
                    toDelete
                        ? `"${toDelete.title}" will be removed from your portfolio. This cannot be undone.`
                        : ''
                }
                confirmLabel="Delete"
                processing={deleting}
                onConfirm={() => confirmDelete(toDelete)}
                onCancel={() => setToDelete(null)}
            />
        </AdminLayout>
    );
}

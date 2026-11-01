import { useEffect, useRef } from 'react';

// The "View details" popup. It opens when a project is given and
// closes when project is null. Esc and the dark backdrop also close it.
export default function ProjectDetailsDialog({ project, onClose }) {
    const ref = useRef(null);

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;

        if (project && !dialog.open) {
            document.documentElement.classList.add('modal-open'); // stop page scroll
            dialog.showModal();
        }
        if (!project && dialog.open) {
            dialog.close();
        }
    }, [project]);

    const handleClose = () => {
        document.documentElement.classList.remove('modal-open');
        onClose();
    };

    return (
        <dialog
            ref={ref}
            aria-labelledby="dialog-title"
            onClose={handleClose}
            onClick={(event) => {
                if (event.target === ref.current) ref.current.close();
            }}
        >
            {project && (
                <>
                    <div className="dialog-visual" aria-hidden="true">
                        {project.image && (
                            <img
                                src={`/storage/${project.image}`}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>

                    <div className="p-6 sm:p-8">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold text-brand capitalize">
                                    {project.category}
                                </p>
                                <h3
                                    id="dialog-title"
                                    className="mt-1 font-display font-bold text-2xl leading-snug"
                                >
                                    {project.title}
                                </h3>
                            </div>
                            <button
                                type="button"
                                className="icon-btn shrink-0"
                                aria-label="Close project details"
                                onClick={() => ref.current.close()}
                            >
                                <i
                                    className="fa-solid fa-xmark"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>

                        <p className="mt-4 text-muted leading-relaxed">
                            {project.description}
                        </p>

                        <h4 className="mt-6 text-sm font-bold">Tools used</h4>
                        <ul className="mt-2 flex flex-wrap gap-2">
                            {project.tools
                                .split(',')
                                .map((tool) => tool.trim())
                                .filter(Boolean)
                                .map((tool) => (
                                    <li key={tool} className="tag">
                                        {tool}
                                    </li>
                                ))}
                        </ul>

                        <p className="mt-6 text-sm text-muted">
                            Completed{' '}
                            {new Date(
                                project.date_completed + 'T00:00:00',
                            ).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>

                        {(project.project_url || project.repo_url) && (
                            <div className="mt-6 flex flex-wrap gap-3">
                                {project.project_url && (
                                    <a
                                        href={project.project_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        View project
                                    </a>
                                )}
                                {project.repo_url && (
                                    <a
                                        href={project.repo_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-ghost"
                                    >
                                        View code
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </>
            )}
        </dialog>
    );
}

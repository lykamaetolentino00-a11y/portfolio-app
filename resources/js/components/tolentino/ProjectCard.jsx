import SelectionHandles from './SelectionHandles';

// One project card on the public portfolio.
// "project" is a row from the database (see the projects table).
export default function ProjectCard({ project, onOpen }) {
    const category =
        project.category.charAt(0).toUpperCase() + project.category.slice(1);

    return (
        <article className="frame-card project-card">
            <div className="project-visual">
                {project.image ? (
                    <img
                        src={`/storage/${project.image}`}
                        alt={`Screenshot of ${project.title}`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <i
                        className="fa-regular fa-image text-4xl text-muted"
                        aria-hidden="true"
                    ></i>
                )}
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="flex gap-2 mb-3">
                    <span className="tag">{category}</span>
                </div>
                <h3 className="font-display font-bold text-lg leading-snug">
                    {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
                    {project.description}
                </p>
                <p className="mt-4 text-sm">
                    <span className="font-semibold">Tools:</span>{' '}
                    <span className="text-muted">{project.tools}</span>
                </p>
                <div className="mt-auto pt-5">
                    <button
                        type="button"
                        className="project-open link-btn"
                        aria-label={`View details: ${project.title}`}
                        onClick={() => onOpen(project)}
                    >
                        View details
                    </button>
                </div>
            </div>

            <SelectionHandles />
        </article>
    );
}

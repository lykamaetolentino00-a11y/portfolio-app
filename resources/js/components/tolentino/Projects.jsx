import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetailsDialog from './ProjectDetailsDialog';
import SectionTitle from './SectionTitle';

const filters = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Web' },
    { value: 'design', label: 'Design' },
    { value: 'school', label: 'School' },
];

// The public Projects section. The "projects" prop comes from the database
// through PortfolioController -> Inertia -> this component.
export default function Projects({ projects = [] }) {
    const [filter, setFilter] = useState('all');
    const [selected, setSelected] = useState(null); // project shown in the popup

    const visible =
        filter === 'all'
            ? projects
            : projects.filter((project) => project.category === filter);

    return (
        <section id="projects" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle title="Projects">
                    Things I&apos;ve designed and built for school and for fun.
                    Open a project to see its details.
                </SectionTitle>

                <div
                    className="mt-8 segmented"
                    role="group"
                    aria-label="Filter projects by category"
                >
                    {filters.map((item) => (
                        <button
                            key={item.value}
                            type="button"
                            className="filter-btn"
                            aria-pressed={filter === item.value}
                            onClick={() => setFilter(item.value)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
                <p className="mt-3 text-sm text-muted" aria-live="polite">
                    Showing {visible.length} of {projects.length} projects
                </p>

                {visible.length === 0 ? (
                    <p className="mt-8 text-muted">
                        {projects.length === 0
                            ? 'No projects yet.'
                            : 'No projects in this category yet.'}
                    </p>
                ) : (
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visible.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onOpen={setSelected}
                            />
                        ))}
                    </div>
                )}
            </div>

            <ProjectDetailsDialog
                project={selected}
                onClose={() => setSelected(null)}
            />
        </section>
    );
}

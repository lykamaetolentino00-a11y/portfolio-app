import { useEffect, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';

// Edit the projects here. "tools" is a list, "link" and "image" are optional.
const projects = [
    {
        title: 'Project One',
        description:
            'What it does, who it is for, and what you built. Replace with your own project.',
        tools: ['HTML', 'Tailwind CSS', 'JavaScript'],
        image: '',
        link: 'https://github.com/your-username/project-one',
    },
    {
        title: 'Project Two',
        description:
            'Describe the problem this project solves and the tools you used.',
        tools: ['JavaScript'],
        image: '',
        link: 'https://github.com/your-username/project-two',
    },
    {
        title: 'Project Three',
        description: 'Explain your role and what you learned.',
        tools: ['Figma'],
        image: '',
        link: 'https://github.com/your-username/project-three',
    },
    {
        title: 'Project Four',
        description: 'Add another project, or delete this one.',
        tools: ['PHP', 'MySQL'],
        image: '',
        link: 'https://github.com/your-username/project-four',
    },
];

export default function Projects() {
    const [selected, setSelected] = useState(null);
    const dialogRef = useRef(null);

    // Open the native <dialog> when a project is selected
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (selected && !dialog.open) dialog.showModal();
        if (!selected && dialog.open) dialog.close();
    }, [selected]);

    return (
        <section id="projects" className="px-6 md:px-14 py-20 max-w-4xl scroll-mt-4">
            <SectionHeading>Projects</SectionHeading>

            <div className="grid sm:grid-cols-2 gap-5">
                {projects.map((project) => (
                    <article key={project.title}>
                        <button
                            type="button"
                            className="bw-card bw-proj p-0! overflow-hidden"
                            onClick={() => setSelected(project)}
                        >
                            <div
                                className="h-36 grid place-items-center"
                                style={{
                                    background:
                                        'linear-gradient(135deg, var(--bg2), var(--line))',
                                }}
                            >
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span
                                        className="text-3xl font-extrabold bw-muted"
                                        style={{ fontFamily: "'Bricolage Grotesque'" }}
                                    >
                                        {project.title
                                            .split(' ')
                                            .map((word) => word[0])
                                            .join('')
                                            .slice(0, 3)}
                                    </span>
                                )}
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="bw-muted mt-2 text-sm">
                                    {project.description.length > 80
                                        ? project.description.slice(0, 80) + '…'
                                        : project.description}
                                </p>
                                <p className="mt-3 text-sm" style={{ color: 'var(--ac)' }}>
                                    {project.tools.join(' · ')}
                                </p>
                            </div>
                        </button>
                    </article>
                ))}
            </div>

            <dialog
                ref={dialogRef}
                aria-labelledby="bw-dialog-title"
                onClose={() => setSelected(null)}
                onClick={(event) => {
                    if (event.target === dialogRef.current) dialogRef.current.close();
                }}
            >
                {selected && (
                    <>
                        <h3 id="bw-dialog-title" className="text-2xl font-bold">
                            {selected.title}
                        </h3>
                        <p className="mt-3 bw-muted">{selected.description}</p>
                        <ul className="flex flex-wrap gap-2 mt-4">
                            {selected.tools.map((tool) => (
                                <li key={tool} className="bw-chip">
                                    {tool}
                                </li>
                            ))}
                        </ul>
                        {selected.link && (
                            <a
                                href={selected.link}
                                className="block mt-4 underline"
                                style={{ color: 'var(--ac)' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View project
                            </a>
                        )}
                        <button
                            type="button"
                            className="bw-btn mt-6"
                            onClick={() => dialogRef.current.close()}
                        >
                            Close
                        </button>
                    </>
                )}
            </dialog>
        </section>
    );
}

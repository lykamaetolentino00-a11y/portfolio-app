import SectionTitle from './SectionTitle';

const technicalSkills = [
    {
        icon: 'fa-brands fa-figma',
        name: 'Figma',
        tagline: 'UI / UX Design',
        text: 'Designing wireframes, mockups, and prototypes for web and mobile interfaces.',
    },
    {
        icon: 'fa-brands fa-html5',
        name: 'HTML / CSS',
        tagline: 'Web structure and styling',
        text: 'Building semantic, responsive layouts using modern HTML5 and CSS3 with Tailwind.',
    },
    {
        icon: 'fa-brands fa-js',
        name: 'JavaScript',
        tagline: 'Interactivity and logic',
        text: 'Adding interactivity, DOM manipulation, and form validation with vanilla JS.',
    },
    {
        icon: 'fa-solid fa-database',
        name: 'PHP / MySQL',
        tagline: 'Backend and database',
        text: 'Building server-side logic and relational databases for dynamic web applications.',
    },
    {
        icon: 'fa-solid fa-cube',
        name: 'Blender',
        tagline: '3D modeling and rendering',
        text: 'Creating 3D models, scenes, and renders for personal and school creative projects.',
    },
    {
        icon: 'fa-solid fa-code',
        name: 'VS Code',
        tagline: 'Code editor',
        text: 'My main editor for web projects, using extensions, Live Server, and Git integration.',
    },
];

const softSkills = [
    'Problem solving',
    'Teamwork',
    'Communication',
    'Time management',
    'Critical thinking',
    'Adaptability',
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-frame border-y border-line">
            <div className="max-w-6xl mx-auto px-6">
                <SectionTitle title="Skills">
                    The tools I use to design and build, and the habits that
                    help me finish projects.
                </SectionTitle>

                <h3 className="font-display font-bold text-xl mt-12 mb-4">
                    Technical skills
                </h3>
                <ul className="grid lg:grid-cols-2 lg:gap-x-12 border-b border-line">
                    {technicalSkills.map((skill) => (
                        <li key={skill.name} className="skill-row">
                            <span className="icon-tile" aria-hidden="true">
                                <i className={skill.icon}></i>
                            </span>
                            <div>
                                <h4 className="font-display font-bold text-lg leading-tight">
                                    {skill.name}
                                </h4>
                                <p className="text-sm font-semibold text-muted">
                                    {skill.tagline}
                                </p>
                                <p className="mt-2 text-sm text-muted leading-relaxed">
                                    {skill.text}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                <h3 className="font-display font-bold text-xl mt-12 mb-5">
                    Soft skills
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                    {softSkills.map((skill) => (
                        <li key={skill} className="flex items-center gap-3">
                            <span
                                className="w-2 h-2 bg-brand shrink-0"
                                aria-hidden="true"
                            ></span>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

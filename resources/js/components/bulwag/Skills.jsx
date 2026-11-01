import SectionHeading from './SectionHeading';

const levels = ['Exploring', 'Practicing', 'Comfortable'];

// level: 1 = Exploring, 2 = Practicing, 3 = Comfortable
const skills = [
    { name: 'HTML5', level: 3 },
    { name: 'CSS & Tailwind', level: 3 },
    { name: 'JavaScript', level: 2 },
    { name: 'Git & GitHub', level: 2 },
    { name: 'Figma', level: 2 },
    { name: 'PHP & MySQL', level: 1 },
];

const softSkills = [
    'Teamwork',
    'Time management',
    'Clear communication',
    'Problem solving',
];

export default function Skills() {
    return (
        <section id="skills" className="px-6 md:px-14 py-20 max-w-4xl scroll-mt-4">
            <SectionHeading>Skills</SectionHeading>

            <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="bw-card p-4 flex justify-between items-center"
                    >
                        <b>{skill.name}</b>
                        <span
                            className="bw-lvl text-sm bw-muted"
                            title={levels[skill.level - 1]}
                        >
                            {[1, 2, 3].map((dot) => (
                                <i key={dot} className={dot <= skill.level ? 'f' : ''}></i>
                            ))}{' '}
                            {levels[skill.level - 1]}
                        </span>
                    </div>
                ))}
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-4">Soft skills</h3>
            <ul className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                    <li key={skill} className="bw-chip">
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}

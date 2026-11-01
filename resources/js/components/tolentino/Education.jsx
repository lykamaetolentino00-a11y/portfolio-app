import SectionTitle from './SectionTitle';

const entries = [
    {
        period: '2024 – Present',
        title: 'Bachelor of Science in Information Technology',
        place: 'Urdaneta City University',
        text: 'Currently a third-year BSIT student developing knowledge and skills in web development, database management, UI/UX design, and system development. Gaining hands-on experience through academic projects, practical activities, and continuous learning.',
    },
    {
        period: '2022 – 2024',
        title: 'Senior High School, HUMSS Strand',
        place: 'Coloscaoayan National High School',
        text: 'Completed senior high school under the Humanities and Social Sciences (HUMSS) strand, developing communication, critical thinking, and research skills that contribute to my growth as an IT student.',
    },
    {
        period: '2026',
        title: 'Academic Project: Personal Portfolio Website',
        place: 'Web Development',
        text: 'Developing a personal portfolio website to showcase my background, skills, and academic projects. Applying my knowledge of web design and front-end development with HTML, Tailwind CSS, and JavaScript.',
    },
    {
        period: '2026',
        title: 'Mobile Application UI Design',
        place: 'Figma',
        text: 'Designed mobile application interfaces using Figma, focusing on screen layouts, intuitive navigation, and user-friendly design principles. This project helped me explore UI/UX design and improve my creativity in developing digital experiences.',
    },
];

export default function Education() {
    return (
        <section id="education" className="py-24 bg-frame border-y border-line">
            <div className="max-w-4xl mx-auto px-6">
                <SectionTitle title="Education & Experience">
                    Where I study, where I came from, and what I&apos;ve worked
                    on so far.
                </SectionTitle>

                <ol className="mt-10 border-b border-line">
                    {entries.map((entry) => (
                        <li
                            key={entry.title}
                            className="entry md:grid-cols-[11rem_1fr]"
                        >
                            <p className="font-semibold text-muted">
                                {entry.period}
                            </p>
                            <div>
                                <h3 className="font-display font-bold text-xl leading-snug">
                                    {entry.title}
                                </h3>
                                <p className="mt-1 font-semibold text-brand">
                                    {entry.place}
                                </p>
                                <p className="mt-3 text-muted leading-relaxed max-w-2xl">
                                    {entry.text}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

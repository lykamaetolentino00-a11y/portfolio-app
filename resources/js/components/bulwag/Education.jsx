import SectionHeading from './SectionHeading';

const entries = [
    {
        title: 'BS Information Technology',
        place: 'Your university · 2023 – present',
        text: 'Coursework in web development, databases, and programming.',
    },
    {
        title: 'Senior High School',
        place: 'Your school · 2021 – 2023',
        text: 'Add your strand and any honors or activities.',
    },
    {
        title: 'Junior High School',
        place: 'Your school · 2017 – 2021',
        text: 'Add any honors, clubs or activities.',
    },
    {
        title: 'Elementary',
        place: 'Your school · 2011 – 2017',
        text: 'Add any honors or achievements.',
    },
];

export default function Education() {
    return (
        <section id="education" className="px-6 md:px-14 py-20 max-w-4xl scroll-mt-4">
            <SectionHeading>Education &amp; experience</SectionHeading>

            <ol
                className="border-l-2 ml-2 space-y-8"
                style={{ borderColor: 'var(--line)' }}
            >
                {entries.map((entry, index) => (
                    <li key={entry.title} className="pl-6 relative">
                        <span
                            className="absolute -left-[7px] top-2 w-3 h-3 rounded-full"
                            style={{
                                background: index === 0 ? 'var(--gold)' : 'var(--line)',
                            }}
                        ></span>
                        <h3 className="text-xl font-bold">{entry.title}</h3>
                        <p className="bw-muted">{entry.place}</p>
                        <p className="mt-1">{entry.text}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}

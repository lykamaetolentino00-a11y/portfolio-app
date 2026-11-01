import SectionHeading from './SectionHeading';

// To show a real photo, put the file in public/images/bulwag/ and set PHOTO
// to something like '/images/bulwag/rachel.jpg'. Empty = show the initials.
const PHOTO = '';

const cards = [
    { title: 'Learning', text: 'Responsive layouts and JavaScript' },
    { title: 'Practicing', text: 'Clean, readable code' },
    { title: 'Aiming for', text: 'A web development internship' },
];

export default function About() {
    return (
        <section id="about" className="px-6 md:px-14 py-20 max-w-4xl scroll-mt-4">
            <SectionHeading>About me</SectionHeading>

            <figure className="mb-8 flex items-center gap-5">
                <div
                    className="w-36 h-36 rounded-2xl overflow-hidden bw-card grid place-items-center text-4xl font-extrabold"
                    style={{ fontFamily: "'Bricolage Grotesque'" }}
                >
                    {PHOTO ? (
                        <img
                            src={PHOTO}
                            alt="Portrait of Rachel Anne Bulwag"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span>RB</span>
                    )}
                </div>
                <figcaption className="bw-muted text-sm">
                    Rachel Anne Bulwag
                    <br />
                    IT student
                </figcaption>
            </figure>

            <p className="text-lg">
                I’m an Information Technology student who enjoys designing
                layouts and writing the code that brings them to life. I like
                starting with a rough sketch, then refining it until it is easy
                to read and easy to use.
            </p>
            <p className="mt-4 bw-muted">
                Replace this paragraph with your own story: where you study,
                what you are building now, and what kind of internship or role
                you want next.
            </p>

            <ul className="mt-6 grid sm:grid-cols-3 gap-4">
                {cards.map((card) => (
                    <li key={card.title} className="bw-card p-4">
                        <b>{card.title}</b>
                        <br />
                        <span className="bw-muted text-sm">{card.text}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

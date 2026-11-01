import SectionTitle from './SectionTitle';
import SelectionHandles from './SelectionHandles';

const facts = [
    { label: 'Location', value: 'Primicias, Bautista, Pangasinan' },
    { label: 'Course/School', value: 'BSIT, Urdaneta City University' },
    { label: 'Email', value: 'lykamaetolentino00@gmail.com' },
    { label: 'Status', value: 'Open to internship opportunities' },
];

export default function About() {
    return (
        <section id="about" className="py-24">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[18rem_1fr] gap-14 lg:gap-20 items-start">
                <div className="avatar-frame w-full max-w-[18rem] mx-auto md:mx-0">
                    <img
                        src="/images/tolentino/profile.png"
                        alt="Photo of Lyka Tolentino"
                        className="w-full h-full object-cover"
                    />
                    <SelectionHandles />
                </div>

                <div>
                    <SectionTitle title="About Me" />

                    <p className="mt-6 leading-relaxed max-w-prose">
                        Hello! I&apos;m Lyka Tolentino, a BSIT student at
                        Urdaneta City University. I&apos;m interested in web
                        development, UI/UX design, and digital creativity.
                    </p>
                    <p className="mt-4 text-muted leading-relaxed max-w-prose">
                        I enjoy designing website interfaces in Figma,
                        developing web applications using HTML, CSS, PHP, and
                        MySQL, and exploring 3D modeling and animation with
                        Blender. My goal is to become an IT professional who can
                        create useful, accessible, and visually engaging digital
                        solutions.
                    </p>

                    <dl className="mt-8 border-b border-line">
                        {facts.map((fact) => (
                            <div key={fact.label} className="fact">
                                <dt className="text-sm font-semibold text-muted">
                                    {fact.label}
                                </dt>
                                <dd>{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}

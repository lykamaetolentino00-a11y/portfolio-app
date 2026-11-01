import SelectionHandles from './SelectionHandles';

// The roles shown in the "Layers" panel. The first one is the selected layer.
const layers = [
    { icon: 'fa-vector-square', label: 'Lyka Tolentino' },
    { icon: 'fa-graduation-cap', label: 'BSIT Student' },
    { icon: 'fa-code', label: 'Aspiring Web Developer' },
    { icon: 'fa-pen-ruler', label: 'UI/UX Design Enthusiast' },
];

const highlights = [
    {
        icon: 'fa-gear',
        title: 'Technical Learner',
        text: 'Developing skills in programming, web development, and IT tools.',
    },
    {
        icon: 'fa-lightbulb',
        title: 'Creative Thinker',
        text: 'Enjoy designing interfaces and finding creative solutions to problems.',
    },
    {
        icon: 'fa-gem',
        title: 'Dedicated Learner',
        text: 'Always eager to explore new technologies and improve my skills.',
    },
];

export default function Hero() {
    return (
        <section id="home" className="pt-32 pb-20 sm:pt-40">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-[1.25fr_1fr] gap-14 items-center">
                    <div>
                        {/* The heading is "selected" like a text layer in Figma */}
                        <div className="selection mb-8">
                            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                                Hi, I&apos;m Lyka Tolentino
                            </h1>
                            <SelectionHandles />
                        </div>

                        <p className="text-xl sm:text-2xl font-medium leading-snug max-w-xl">
                            I design and build useful, accessible, and visually
                            engaging websites.
                        </p>
                        <p className="mt-5 text-muted leading-relaxed max-w-xl">
                            I&apos;m a passionate IT student who enjoys
                            exploring technology, designing user-friendly
                            interfaces, and creating functional digital
                            experiences. I&apos;m always eager to learn new
                            skills, solve problems, and turn creative ideas into
                            reality.
                        </p>

                        <div className="mt-9 flex flex-col sm:flex-row gap-3">
                            <a href="#contact" className="btn btn-primary">
                                Get Connected
                            </a>
                            <a href="#projects" className="btn btn-ghost">
                                View My Work
                            </a>
                        </div>
                    </div>

                    {/* Layers panel: my roles shown like layers in Figma */}
                    <div className="panel w-full max-w-sm lg:justify-self-end">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-line">
                            <p className="text-sm font-bold">Layers</p>
                            <i
                                className="fa-solid fa-layer-group text-muted text-sm"
                                aria-hidden="true"
                            ></i>
                        </div>
                        <ul className="py-2" aria-label="My roles">
                            {layers.map((layer, index) => (
                                <li
                                    key={layer.label}
                                    className={
                                        index === 0
                                            ? 'layer-row is-selected font-bold'
                                            : 'layer-row layer-child'
                                    }
                                    style={{ '--i': index }}
                                >
                                    <i
                                        className={
                                            'fa-solid ' +
                                            layer.icon +
                                            ' w-4 text-center ' +
                                            (index === 0
                                                ? 'text-brand'
                                                : 'text-muted')
                                        }
                                        aria-hidden="true"
                                    ></i>
                                    <span>{layer.label}</span>
                                    <i
                                        className="fa-solid fa-eye ml-auto text-muted text-xs"
                                        aria-hidden="true"
                                    ></i>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Highlights */}
                <ul className="mt-20 pt-10 border-t border-line grid sm:grid-cols-3 gap-8">
                    {highlights.map((item) => (
                        <li key={item.title} className="flex gap-4">
                            <i
                                className={
                                    'fa-solid ' +
                                    item.icon +
                                    ' text-brand text-xl mt-1'
                                }
                                aria-hidden="true"
                            ></i>
                            <div>
                                <h2 className="font-display font-bold text-lg">
                                    {item.title}
                                </h2>
                                <p className="mt-1 text-sm text-muted leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

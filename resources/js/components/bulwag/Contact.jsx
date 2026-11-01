import { useState } from 'react';
import SectionHeading from './SectionHeading';

const emptyValues = { name: '', email: '', message: '' };

// Front-end only validation (nothing is sent anywhere), like the original page.
function validate(values) {
    const errors = {};
    if (values.name.trim().length < 2) {
        errors.name = 'Enter your name (at least 2 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
        errors.email = 'Enter a valid email, like name@example.com.';
    }
    if (values.message.trim().length < 10) {
        errors.message = 'Write at least 10 characters.';
    }
    return errors;
}

export default function Contact() {
    const [values, setValues] = useState(emptyValues);
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

    const handleChange = (field) => (event) => {
        setValues({ ...values, [field]: event.target.value });
        setSent(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const found = validate(values);
        setErrors(found);

        if (Object.keys(found).length === 0) {
            setSent(true);
            setValues(emptyValues);
        } else {
            setSent(false);
        }
    };

    return (
        <section id="contact" className="px-6 md:px-14 py-20 max-w-4xl scroll-mt-4">
            <SectionHeading>Contact</SectionHeading>

            <form onSubmit={handleSubmit} noValidate className="bw-card p-6 grid gap-4">
                <div>
                    <label htmlFor="bw-name" className="font-semibold">
                        Name
                    </label>
                    <input
                        id="bw-name"
                        autoComplete="name"
                        value={values.name}
                        onChange={handleChange('name')}
                        aria-invalid={errors.name ? 'true' : undefined}
                    />
                    <p className="bw-err">{errors.name}</p>
                </div>

                <div>
                    <label htmlFor="bw-email" className="font-semibold">
                        Email
                    </label>
                    <input
                        id="bw-email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleChange('email')}
                        aria-invalid={errors.email ? 'true' : undefined}
                    />
                    <p className="bw-err">{errors.email}</p>
                </div>

                <div>
                    <label htmlFor="bw-message" className="font-semibold">
                        Message
                    </label>
                    <textarea
                        id="bw-message"
                        rows={5}
                        maxLength={300}
                        value={values.message}
                        onChange={handleChange('message')}
                        aria-invalid={errors.message ? 'true' : undefined}
                    ></textarea>
                    <div className="flex justify-between">
                        <p className="bw-err">{errors.message}</p>
                        <span className="bw-muted text-sm">
                            {values.message.length} / 300
                        </span>
                    </div>
                </div>

                <button type="submit" className="bw-btn bw-pri justify-self-start">
                    Send message
                </button>
                <p className="font-semibold" role="status">
                    {sent
                        ? 'Thanks! Your message is ready to send (connect a backend or form service to deliver it).'
                        : ''}
                </p>
            </form>

            <ul className="mt-6 flex flex-wrap gap-3" aria-label="Professional links">
                <li>
                    <a className="bw-chip" href="mailto:your.email@example.com">
                        Email
                    </a>
                </li>
                <li>
                    <a
                        className="bw-chip"
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        className="bw-chip"
                        href="https://www.linkedin.com/in/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </section>
    );
}

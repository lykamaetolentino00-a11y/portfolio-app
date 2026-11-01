import { useState } from 'react';
import FormField from '../FormField';
import SectionTitle from './SectionTitle';

// One rule per field: test() returns true when the value is OK.
const rules = {
    name: {
        test: (value) => value.length >= 2,
        message: 'Enter your name (at least 2 characters).',
    },
    email: {
        test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: 'Enter a valid email address, like name@example.com.',
    },
    subject: {
        test: (value) => value.length >= 3,
        message: 'Enter a subject (at least 3 characters).',
    },
    message: {
        test: (value) => value.length >= 10,
        message: 'Write a message (at least 10 characters).',
    },
};

const emptyValues = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
    const [values, setValues] = useState(emptyValues);
    const [errors, setErrors] = useState({});
    const [sentTo, setSentTo] = useState(null); // name of the sender after a valid submit

    const check = (field, value) =>
        rules[field].test(value.trim()) ? '' : rules[field].message;

    const handleChange = (field) => (event) => {
        const value = event.target.value;
        setValues({ ...values, [field]: value });
        // While typing, re-check only a field that is currently showing an error
        if (errors[field]) setErrors({ ...errors, [field]: check(field, value) });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // front-end only: nothing is sent anywhere

        const fields = Object.keys(rules);
        const newErrors = {};
        fields.forEach((field) => {
            const message = check(field, values[field]);
            if (message) newErrors[field] = message;
        });
        setErrors(newErrors);

        const firstInvalid = fields.find((field) => newErrors[field]);
        if (firstInvalid) {
            document.getElementById(firstInvalid).focus();
            return;
        }
        setSentTo(values.name.trim());
    };

    const reset = () => {
        setValues(emptyValues);
        setErrors({});
        setSentTo(null);
    };

    const bind = (field) => ({
        id: field,
        name: field,
        value: values[field],
        onChange: handleChange(field),
        className: 'field',
        'aria-invalid': errors[field] ? 'true' : undefined,
        'aria-describedby': errors[field] ? `${field}-error` : undefined,
    });

    return (
        <section id="contact" className="py-24">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 lg:gap-20">
                <div>
                    <SectionTitle title="Contact Me" />
                    <p className="mt-3 text-muted leading-relaxed max-w-md">
                        I&apos;d love to connect with fellow students,
                        developers, and creatives. Reach out for collaboration,
                        project discussions, or internship opportunities.
                    </p>

                    <div className="mt-8 border-b border-line">
                        <a
                            href="mailto:lykamaetolentino00@gmail.com"
                            className="contact-row"
                        >
                            <span className="icon-tile" aria-hidden="true">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            <span className="min-w-0">
                                <span className="block text-sm font-semibold text-muted">
                                    Email
                                </span>
                                <span className="block font-medium break-all">
                                    lykamaetolentino00@gmail.com
                                </span>
                            </span>
                        </a>
                        <a
                            href="https://github.com/lykamaetolentino00-a11y"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-row"
                        >
                            <span className="icon-tile" aria-hidden="true">
                                <i className="fa-brands fa-github"></i>
                            </span>
                            <span className="min-w-0">
                                <span className="block text-sm font-semibold text-muted">
                                    GitHub
                                </span>
                                <span className="block font-medium break-all">
                                    github.com/lykamaetolentino00-a11y
                                    <span className="sr-only">
                                        {' '}
                                        (opens in a new tab)
                                    </span>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="bg-frame border border-line rounded p-6 sm:p-8">
                    {sentTo !== null ? (
                        <div role="status" className="text-center py-6">
                            <i
                                className="fa-solid fa-circle-check text-brand text-4xl"
                                aria-hidden="true"
                            ></i>
                            <h3 className="mt-4 font-display font-bold text-2xl break-words">
                                Thanks, {sentTo}!
                            </h3>
                            <p className="mt-2 text-muted leading-relaxed">
                                Your message looks good. This form is front-end
                                only, so nothing was actually sent. Please
                                email me directly if it&apos;s urgent.
                            </p>
                            <button
                                type="button"
                                className="btn btn-ghost mt-6"
                                onClick={reset}
                            >
                                Write another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="grid gap-5">
                                <FormField
                                    label="Name"
                                    name="name"
                                    error={errors.name}
                                >
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        autoComplete="name"
                                        {...bind('name')}
                                    />
                                </FormField>
                                <FormField
                                    label="Email"
                                    name="email"
                                    error={errors.email}
                                >
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        autoComplete="email"
                                        {...bind('email')}
                                    />
                                </FormField>
                                <FormField
                                    label="Subject"
                                    name="subject"
                                    error={errors.subject}
                                >
                                    <input
                                        type="text"
                                        placeholder="What is this about?"
                                        {...bind('subject')}
                                    />
                                </FormField>
                                <FormField
                                    label="Message"
                                    name="message"
                                    error={errors.message}
                                >
                                    <textarea
                                        rows={5}
                                        placeholder="Write your message here"
                                        {...bind('message')}
                                    />
                                </FormField>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-full mt-6"
                            >
                                <i
                                    className="fa-solid fa-paper-plane"
                                    aria-hidden="true"
                                ></i>
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

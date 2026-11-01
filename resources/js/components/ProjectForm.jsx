import { Link, useForm } from '@inertiajs/react';
import FormField from './FormField';

// One form used by BOTH the Create page and the Edit page.
// - Create: <ProjectForm categories={categories} />
// - Edit:   <ProjectForm project={project} categories={categories} />
export default function ProjectForm({ project = null, categories = [] }) {
    const isEdit = project !== null;

    // useForm keeps what the user typed, so nothing is lost when validation fails.
    const { data, setData, post, processing, errors } = useForm({
        title: project?.title ?? '',
        description: project?.description ?? '',
        category: project?.category ?? categories[0] ?? '',
        tools: project?.tools ?? '',
        project_url: project?.project_url ?? '',
        repo_url: project?.repo_url ?? '',
        image: null,
        date_completed: project?.date_completed ?? '',
        // Browsers cannot send a file with a real PUT request, so we send a POST
        // and tell Laravel to treat it as PUT (method spoofing).
        ...(isEdit ? { _method: 'put' } : {}),
    });

    // Props shared by every input: value, onChange, and the error styling.
    const bind = (name) => ({
        id: name,
        name,
        value: data[name],
        onChange: (event) => setData(name, event.target.value),
        className: 'field',
        'aria-invalid': errors[name] ? 'true' : undefined,
        'aria-describedby': errors[name] ? `${name}-error` : undefined,
    });

    const submit = (event) => {
        event.preventDefault();
        post(isEdit ? `/projects/${project.id}` : '/projects', {
            forceFormData: true, // needed because of the image file
        });
    };

    return (
        // noValidate: let Laravel (the server) do the validating, not the browser
        <form onSubmit={submit} noValidate className="frame-card p-6 sm:p-8">
            <div className="grid gap-6">
                <FormField label="Title" name="title" error={errors.title}>
                    <input type="text" {...bind('title')} />
                </FormField>

                <FormField
                    label="Description"
                    name="description"
                    error={errors.description}
                    hint={`${data.description.length} / 500 characters (at least 20)`}
                >
                    <textarea rows={5} {...bind('description')} />
                </FormField>

                <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                        label="Category"
                        name="category"
                        error={errors.category}
                    >
                        <select {...bind('category')}>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category.charAt(0).toUpperCase() +
                                        category.slice(1)}
                                </option>
                            ))}
                        </select>
                    </FormField>

                    <FormField
                        label="Date completed"
                        name="date_completed"
                        error={errors.date_completed}
                    >
                        <input type="date" {...bind('date_completed')} />
                    </FormField>
                </div>

                <FormField
                    label="Tools used"
                    name="tools"
                    error={errors.tools}
                    hint="Separate with commas, for example: HTML, Tailwind CSS"
                >
                    <input type="text" {...bind('tools')} />
                </FormField>

                <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                        label="Project URL (optional)"
                        name="project_url"
                        error={errors.project_url}
                    >
                        <input
                            type="url"
                            placeholder="https://"
                            {...bind('project_url')}
                        />
                    </FormField>

                    <FormField
                        label="Repository URL (optional)"
                        name="repo_url"
                        error={errors.repo_url}
                    >
                        <input
                            type="url"
                            placeholder="https://github.com/"
                            {...bind('repo_url')}
                        />
                    </FormField>
                </div>

                <FormField
                    label="Image (optional)"
                    name="image"
                    error={errors.image}
                    hint="JPG, PNG, or WEBP, up to 2 MB."
                >
                    {isEdit && project.image && (
                        <img
                            src={`/storage/${project.image}`}
                            alt="Current project screenshot"
                            className="mb-3 h-28 w-auto rounded border border-line"
                        />
                    )}
                    <input
                        id="image"
                        name="image"
                        type="file"
                        className="field"
                        aria-invalid={errors.image ? 'true' : undefined}
                        onChange={(event) =>
                            setData('image', event.target.files[0] ?? null)
                        }
                    />
                    {isEdit && (
                        <p className="mt-1 text-xs text-muted">
                            Leave empty to keep the current image.
                        </p>
                    )}
                </FormField>
            </div>

            <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                <Link href="/projects" className="btn btn-ghost">
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={processing}
                >
                    {processing
                        ? 'Saving...'
                        : isEdit
                          ? 'Save changes'
                          : 'Add project'}
                </button>
            </div>
        </form>
    );
}

// A label + input + error message, kept together.
// Usage: <FormField label="Title" name="title" error={errors.title}> <input .../> </FormField>
export default function FormField({ label, name, error, hint, children }) {
    return (
        <div>
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            {children}
            {hint && !error && (
                <p className="mt-1 text-xs text-muted">{hint}</p>
            )}
            {error && (
                <p id={`${name}-error`} className="field-error" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}

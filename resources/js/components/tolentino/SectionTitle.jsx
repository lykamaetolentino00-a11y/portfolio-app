// Reusable heading for every section: <SectionTitle title="Projects">short text</SectionTitle>
export default function SectionTitle({ title, children }) {
    return (
        <>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
                {title}
            </h2>
            {children && <p className="mt-3 text-muted max-w-xl">{children}</p>}
        </>
    );
}

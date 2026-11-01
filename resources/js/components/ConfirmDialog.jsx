import { useEffect, useRef } from 'react';

// A confirmation popup built on the native <dialog> element.
// Esc and clicking the dark backdrop both cancel it.
export default function ConfirmDialog({
    open,
    title,
    message,
    confirmLabel = 'Confirm',
    processing = false,
    onConfirm,
    onCancel,
}) {
    const ref = useRef(null);

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;
        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [open]);

    return (
        <dialog
            ref={ref}
            aria-labelledby="confirm-title"
            onClose={onCancel}
            onClick={(event) => {
                if (event.target === ref.current) onCancel();
            }}
        >
            <div className="p-6 sm:p-8">
                <h2
                    id="confirm-title"
                    className="font-display font-bold text-2xl"
                >
                    {title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">{message}</p>
                <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                    <button
                        type="button"
                        className="btn btn-ghost"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="btn bg-[rgb(var(--danger))] text-[rgb(var(--onbrand))]"
                        onClick={onConfirm}
                        disabled={processing}
                    >
                        {processing ? 'Deleting...' : confirmLabel}
                    </button>
                </div>
            </div>
        </dialog>
    );
}

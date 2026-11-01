// The four little squares at the corners of a "selected" frame (Figma style).
// The parent element must have position: relative (the .selection, .avatar-frame
// and .frame-card classes already do this).
export default function SelectionHandles() {
    return (
        <>
            <span className="handle handle-tl" aria-hidden="true"></span>
            <span className="handle handle-tr" aria-hidden="true"></span>
            <span className="handle handle-bl" aria-hidden="true"></span>
            <span className="handle handle-br" aria-hidden="true"></span>
        </>
    );
}

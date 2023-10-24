import "./Paragraph.scss"

/* eslint-disable react/prop-types */
export default function Paragraph({ className, text }) {
    return (
        <p className={className}>{text}</p>
    );
}
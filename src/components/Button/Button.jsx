import "./Button.scss"

/* eslint-disable react/prop-types */
export default function Button({ className, type="button", text }) {
    return (
        <button className={`btn ${className}`} type={type}>
            {text}
        </button>
    );
}
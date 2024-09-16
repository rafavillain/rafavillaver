export default function Link({ className='', href, text, icon, target }) {
    const linkClass = className ? `rv-link ${className}` : "rv-link";

    return (
        <a 
            href={href} 
            className={linkClass}
            target={target}>
            <span className="rv-link__text">{text}</span>
            <span className="rv-link__icon material-symbols-rounded">{icon}</span>
        </a>
    );
}
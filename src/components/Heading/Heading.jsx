import "./Heading.scss"

/* eslint-disable react/prop-types */
/* <Heading type="h1" text="H1 heading" />
    if we add className, it overwrites the default `${prefixHeading}${type}` className
*/
export default function Paragraph({ type, className, text }) {
    const prefixHeading = 't-'

    switch (type) {
        case "h1":
            return <h1 className={className ? className : `${prefixHeading}${type}`}>{text}</h1>
        case "h2":
            return <h2 className={className ? className : `${prefixHeading}${type}`}>{text}</h2>
        case "h3":
            return <h3 className={className ? className : `${prefixHeading}${type}`}>{text}</h3>

        case "h4":
            return <h4 className={className ? className : `${prefixHeading}${type}`}>{text}</h4>

        case "h5":
            return <h5 className={className ? className : `${prefixHeading}${type}`}>{text}</h5>

        case "h6":
            return <h6 className={className ? className : `${prefixHeading}${type}`}>{text}</h6>

        default:
            return null;
    }
}
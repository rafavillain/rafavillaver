import Heading from "../Heading/Heading"

export default function UiKitItem({ title, extraClass, children }) {
    const uikitClass = extraClass ? `rv-uikit-item ${extraClass}` : "rv-uikit-item";

    return (
        <div className={uikitClass}>
            <Heading type="h2" className="rv-uikit-item__title" text={title} />
            <div className="rv-uikit-item__main">
                {children}
            </div>
        </div>
    )
}
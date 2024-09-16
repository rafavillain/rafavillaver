import Heading from "../../components/Heading/Heading"
import UiItem from "../../components/UiItem/UiItem"
import Paragraph from "../../components/Paragraph/Paragraph"
import Picture from "../../components/Picture/Picture"
import Button from "../../components/Button/Button"

export default function Uikit() {
    return (
        <div className="rv-uikit">
            <Heading type="h1" text="UI Kit" />
            
            <UiItem title="Buttons">
                <Button text="Botón primario" />
                <Button uiType="secondary" text="Botón secondary" />
                <Button uiType="inverted" text="Botón inverted" />
            </UiItem>

            <UiItem title="Headings">
                <Heading type="h1" text="H1 heading" />
                <Heading type="h2" text="H2 heading" />
                <Heading type="h3" text="H3 heading" />
                <Heading type="h4" text="H4 heading" />
                <Heading type="h5" text="H5 heading" />
                <Heading type="h6" text="H6 heading" />
            </UiItem>

            <UiItem title="Colors">
                <ul className="rv-uikit__colors">
                    <li className="rv-uikit__color rv-uikit__color--aurora01"><span>$c-aurora01</span></li>
                    <li className="rv-uikit__color rv-uikit__color--aurora02"><span>$c-aurora02</span></li>
                    <li className="rv-uikit__color rv-uikit__color--aurora03"><span>$c-aurora03</span></li>
                    <li className="rv-uikit__color rv-uikit__color--aurora04"><span>$c-aurora04</span></li>
                    <li className="rv-uikit__color rv-uikit__color--aurora05"><span>$c-aurora05</span></li>
                    <li className="rv-uikit__color rv-uikit__color--aurora06"><span>$c-aurora06</span></li>
                </ul>
            </UiItem>

            <UiItem title="Párrafo">
                <Paragraph text="Párrafo lorem ipsum dolor amet" />
                <Paragraph className="t-label" text="Label lorem ipsum dolor amet" />
                <Paragraph className="t-detail" text="Detail lorem ipsum dolor amet" />
            </UiItem>

            <UiItem title="Pictures">
                <Picture className="rv-uikit__img" src_mobile="//unsplash.it/768/600" src_desktop="//unsplash.it/1200/600" alt="" height="600px"
                    width="1200px" />
            </UiItem>
        </div>
    )
}
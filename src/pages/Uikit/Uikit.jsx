import "./Uikit.scss"

import Heading from "../../components/Heading/Heading"
import Paragraph from "../../components/Paragraph/Paragraph"
import Picture from "../../components/Picture/Picture"
import Button from "../../components/Button/Button"

function Uikit() {
    return (
        <div className="uikit">
            <Heading type="h1" text="UI Kit" />

            <div className="uikit__item uikit__colors">
                <Heading type="h2" className="uikit__title" text="Colores" />

                <ul>
                    <li className="uikit__primary">$c-primary</li>
                    <li className="uikit__secondary">$c-secondary</li>
                    <li className="uikit__white">$c-white</li>
                    <li className="uikit__black">$c-black</li>
                </ul>
            </div>

            <div className="uikit__item">
                <Heading type="h2" className="uikit__title" text="Headings" />

                <Heading type="h1" text="H1 heading" />
                <Heading type="h2" text="H2 heading" />
                <Heading type="h3" text="H3 heading" />
                <Heading type="h4" text="H4 heading" />
                <Heading type="h5" text="H5 heading" />
                <Heading type="h6" text="H6 heading" />
            </div>

            <div className="uikit__item">
                <Heading type="h2" className="uikit__title" text="Párrafos" />

                <Paragraph className="m-test__p" text="Párrafo lorem ipsum dolor amet" />
            </div>

            <div className="uikit__item">
                <Heading type="h2" className="uikit__title" text="Imágenes" />

                <Picture className="uikit__img" src_mobile="//unsplash.it/768/600" src_desktop="//unsplash.it/1200/600" alt="" height="600px"
                    width="1200px" />
            </div>

            <div className="uikit__item">
                <Heading type="h2" className="uikit__title" text="Botones" />

                <Button className="btn--primary" text="Botón primario" />
                <Button className="btn--secondary" text="Botón secundario" />
            </div>
        </div>
    )
}

export default Uikit;
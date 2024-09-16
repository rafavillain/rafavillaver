import Heading from "../../components/Heading/Heading"
import Paragraph from "../../components/Paragraph/Paragraph"
import Picture from "../../components/Picture/Picture"
import Button from "../../components/Button/Button"

export default function Hero({data}) {
    const {
        type,
        extraClass,
        img_mobile,
        img_desktop,
        title,
        text,
        btn_text,
    } = data;

    return (
        <section className={type ? `rv-hero rv-hero--${type} rv-hero--${extraClass}` : `rv-hero rv-hero--${extraClass}`}>
            <Picture
                className="rv-hero__img"
                src_mobile={img_mobile}
                src_desktop={img_desktop}
                alt=""
                width="1200"
                height="600"
                lazy={false}
            />

            <div className="rv-hero__content">
                <Heading
                    type="h1"
                    className="rv-hero__title"
                    text={title}
                />

                <Paragraph 
                    className="rv-hero__description" 
                    text={text}
                />

                <Button 
                    uiType={type ? type : ''}
                    text={btn_text}
                    onClick={(e) => {
                        alert(e.target.innerText);
                    }}
                />
            </div>

        </section>
    )
}
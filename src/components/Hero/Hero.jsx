import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph'
import Picture from '../../components/Picture/Picture'
import Button from '../../components/Button/Button'

export default function Hero ({ data }) {
  console.log(data)

  const {
    type,
    extraClass,
    imgMobile,
    imgDesktop,
    title,
    text,
    btnText,
    href
  } = data

  return (
    <section className={type ? `rv-hero rv-hero--${type} rv-hero--${extraClass}` : `rv-hero rv-hero--${extraClass}`}>
      <Picture
        className='rv-hero__img'
        srcMobile={imgMobile}
        srcDesktop={imgDesktop}
        alt=''
        width='1200'
        height='600'
        lazy={false}
      />

      <div className='rv-hero__content'>
        <Heading
          type='h1'
          className='rv-hero__title'
          text={title}
        />

        <Paragraph
          className='rv-hero__description'
          text={text}
        />

        <Button
          uiType={type}
          text={btnText}
          href={href}
          onClick={(e) => {
            console.log(e.target.innerText)
          }}
        />
      </div>

    </section>
  )
}

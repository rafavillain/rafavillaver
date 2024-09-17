import Icon from './../../components/Icon/Icon'

export default function Button ({ extraClass = '', uiType, type = 'button', onClick, text, href, iconName }) {
  const uiButtonType = uiType ? `rv-button rv-button--${uiType}` : 'rv-button'

  if (href) {
    return (
      <a
        href={href}
        className={`${uiButtonType} ${extraClass}`}
        type={type}
        onClick={onClick}
      >
        {text}
        {iconName ? <Icon iconName={iconName} /> : null}
      </a>
    )
  } else {
    return (
      <button
        className={`${uiButtonType} ${extraClass}`}
        type={type}
        onClick={onClick}
      >
        {text}
        {iconName ? <Icon iconName={iconName} /> : null}
      </button>
    )
  }
}

export default function Button ({ extraClass = '', uiType, type = 'button', onClick, text }) {
  const uiButtonType = uiType === 'secondary' ? 'rv-button rv-button--secondary' : 'rv-button'

  return (
    <button
      className={uiButtonType + extraClass}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

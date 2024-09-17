export default function Icon ({ iconName, extraClass }) {
  const iconClass = extraClass ? `rv-icon material-symbols-rounded${extraClass}` : 'rv-icon material-symbols-rounded'

  return (
    <span className={iconClass} aria-hidden='true'>{iconName}</span>
  )
}

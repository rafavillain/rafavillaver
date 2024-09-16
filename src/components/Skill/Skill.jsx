export default function Skill ({ data }) {
  const {
    label,
    value
  } = data
  const id = data.label.toLowerCase()

  return (
    <div id={id} className='rv-skill'>
      {label}
      <div className='rv-skill__value'>
        {value}
      </div>
    </div>
  )
}

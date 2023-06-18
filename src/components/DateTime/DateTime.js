import PropType from 'prop-types'

export default function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  )
}

DateTime.propTypes = {
  date: PropType.string.isRequired
}
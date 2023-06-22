import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, onClickFavorite} = props
  const {id, title, date, isFavorite} = appointmentDetails
  const onFavorite = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const clickFavoriteIcon = () => {
    onClickFavorite(id)
  }

  return (
    <li className="each-appointment">
      <div>
        <p className="title">{title}</p>
        <p className="date"> {date}</p>
      </div>
      <div>
        <button
          type="button"
          onClick={clickFavoriteIcon}
          data-testid="star"
          className="favorite-button"
        >
          <img src={onFavorite} alt="star" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem

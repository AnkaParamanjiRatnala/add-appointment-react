import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

const initialAppointments = []

class Appointments extends Component {
  state = {totalAppointments: initialAppointments, title: '', date: ''}

  onClickFavorite = id => {
    this.setState(prevState => ({
      totalAppointments: prevState.totalAppointments.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isFavorite: !eachItem.isFavorite}
        }
        return eachItem
      }),
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()

    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavorite: false,
    }
    this.setState(prevState => ({
      totalAppointments: [...prevState.totalAppointments, newAppointment],
      title: '',
      date: '',
    }))
  }

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onDate = event => {
    this.setState({
      date: format(new Date(event.target.value), 'dd MMMM yyyy, EEEE'),
    })
  }

  render() {
    const {totalAppointments, title, date} = this.state
    return (
      <div className="appointment-container">
        <div className="card-container">
          <h1 className="appointment-heading">Add Appointment</h1>
          <div className="form-image-container">
            <div>
              <form onSubmit={this.onAddAppointment} className="form-container">
                <label htmlFor="title" className="labels">
                  TITLE
                </label>
                <input
                  id="title"
                  type="text"
                  onChange={this.onTitle}
                  value={title}
                  className="search-input"
                  placeholder="Title"
                />
                <label htmlFor="date-id" className="labels">
                  DATE
                </label>
                <input
                  id="date-id"
                  type="date"
                  onChange={this.onDate}
                  value={date}
                  className="search-input"
                />
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="image"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="appointment-starred">
            <h1 className="appointments"> Appointments</h1>
            <button type="button" className="starred-button">
              Starred
            </button>
          </div>
          <ul className="unordered-list">
            {totalAppointments.map(each => (
              <AppointmentItem
                key={each.id}
                appointmentDetails={each}
                onClickFavorite={this.onClickFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments

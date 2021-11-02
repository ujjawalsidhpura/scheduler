import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get('api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers'),
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }))
    })
  }, [])

  function updateDailySpots(newAppointments) {

    return state.days.map(eachDay => {
      let freeSpots = 0;

      for (let key of eachDay.appointments) {
        if (!newAppointments[key].interview) {
          freeSpots++
        }
      }
      return { ...eachDay, spots: freeSpots }
    })

  }

  // Function to Input/Edit Entry in DB
  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    }

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    //1. Make a PUT request to edit DB
    return axios.put(`http://localhost:8001/api/appointments/${id}`, { ...appointment })
      .then((res) => {
        if (res.status === 204) {
          setState({
            ...state,
            appointments,
            days: updateDailySpots(appointments)
          })
        }
      })
      .catch((err) => { throw err })
  }

  // Func to Delete an Entry from DB
  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    }

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    return axios.delete(`http://localhost:8001/api/appointments/${id}`)
      .then((res) => {
        if (res.status === 204) {
          setState({
            ...state,
            appointments,
            days: updateDailySpots(appointments)
          })
        }
      })
      .catch((err) => { throw err })
  }

  return { state, setState, bookInterview, cancelInterview }
}

export default useApplicationData;
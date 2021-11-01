import React from "react";
import { useState, useEffect } from "react";
import "components/Application.scss";
import axios from "axios";
import DayList from "./DayList";
import Appointment from "components/Appointment/index";
import { getAppointmentsForDay } from "helpers/selectors";
import { getInterview } from "helpers/selectors";
import { getInterviewersForDay } from "helpers/selectors"

export default function Application() {

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
          //2. If response is 204,then only setState to edited DB
          setState({ ...state, appointments })
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
          setState({ ...state, appointments })
        }
      })
      .catch((err) => { throw err })
  }


  const interviewers = getInterviewersForDay(state, state.day)
  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const parsedAppointments =
    dailyAppointments.map(
      (appointment) => {

        const interviewer = getInterview(state, appointment.interview);

        return (
          < Appointment
            key={appointment.id}
            id={appointment.id}
            time={appointment.time}
            interview={appointment.interview}
            interviewers={interviewers}
            interviewer={interviewer}
            bookInterview={bookInterview}
            cancelInterview={cancelInterview}
          />
        )
      }
    )



  return (
    <main className="layout">
      <section className="sidebar">

        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">

          <DayList
            days={state.days}
            value={state.day}
            onChange={(name) => { setState({ ...state, day: name }) }}
          />

        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

      </section>
      <section className="schedule">
        {parsedAppointments}
      </section>
    </main>
  );
}



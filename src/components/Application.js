import React from "react";
import useApplicationData from "hooks/useApplicationData";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "components/Appointment/index";
import { getAppointmentsForDay } from "helpers/selectors";
import { getInterview } from "helpers/selectors";
import { getInterviewersForDay } from "helpers/selectors";

export default function Application() {

  const {
    state,
    setState,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const interviewers = getInterviewersForDay(state, state.day);
  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const parsedAppointments =
    dailyAppointments.map((appointment) => {
      const interviewer = getInterview(state, appointment.interview)

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
        <Appointment
          time="5pm"
        />

      </section>
    </main>
  );
}



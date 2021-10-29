export function getAppointmentsForDay(state, day) {

  let output = []

  const daysArray = state.days;
  for (let eachDay of daysArray) {
    if (eachDay.name === day) {
      eachDay.appointments.map((eachAppointment) => {
        output.push(state.appointments[eachAppointment])
      })
    }
  }

  return output;
}

export function getInterview(state, interview) {

  if (!interview) {
    return null
  } else {
    const student = interview.student;
    const interviewerID = interview.interviewer
    const interviewer = state.interviewers[interviewerID]

    return {
      student,
      interviewer
    }
  }

}




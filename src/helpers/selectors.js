export function getAppointmentsForDay(state, day) {

  let output = []

  const daysArray = state.days;
  for (let eachDay of daysArray) {
    if (eachDay.name === day) {
      eachDay.appointments.forEach((eachAppointment) => {
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

export function getInterviewersForDay(state, day) {

  let eachDayInterviewersIDArray;

  for (let eachDay of state.days) {
    if (eachDay.name === day) {
      eachDayInterviewersIDArray = eachDay.interviewers
    }
  }

  //Check if an Array exist
  if (!eachDayInterviewersIDArray) {
    return [];
  } else {

    let eachDayInterviewersArr = [];

    const interviewersObj = state.interviewers
    for (let id of eachDayInterviewersIDArray) {

      for (let eachInt in interviewersObj) {

        if (id === interviewersObj[eachInt].id)
          eachDayInterviewersArr.push(interviewersObj[eachInt])

      }

    }
    return eachDayInterviewersArr;
  }

}



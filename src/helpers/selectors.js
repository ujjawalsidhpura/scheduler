export default function getAppointmentsForDay(state, day) {

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


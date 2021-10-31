import React from "react";
import Header from "./Header"
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import "./styles.scss";
import useVisualMode from "hooks/useVisualMode";
import axios from "axios";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const EDIT = "EDIT";

export default function Appointment(props) {


  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  )



  const onSave = () => {
    // const test = {
    //   id: props.id,
    //   time: props.time,
    //   interview: {
    //     student: props.student,
    //     interviewer: props.interviewer
    //   }
    // }
    // axios.post(`http://localhost:8001/api/appointments/${props.id}`, test)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err))
    alert(props.id)

  }

  return (
    <article className="appointment" >
      <Header time={props.time} />

      {mode === EMPTY &&
        <Empty onAdd={() => transition(CREATE)} />
      }

      {
        mode === CREATE &&
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={onSave}
        />
      }

      {
        mode === SHOW &&
        <Show
          student={props.interview.student}
          interviewer={props.interviewer ? props.interviewer : null}
          onEdit={() => transition(EDIT)}
        />
      }

      {
        mode === EDIT &&
        <Form
          student={props.interview.student}
          interviewer={props.interviewer}
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={onSave}
        />
      }

    </article >
  )
}

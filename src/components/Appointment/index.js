import React from "react";
import "./styles.scss";
import useVisualMode from "hooks/useVisualMode";
import Header from "./Header"
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Error from './Error'
import Confirm from "./Confirm";

// Variables for User Transitioning 
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const EDIT = "EDIT";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE"

export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  )

  function save(student, interviewer) {

    const interview = {
      student,
      interviewer
    }

    //1. Show saving gif...
    transition(SAVING)

    //2. Call api to update database entry from Application
    //3. Show the updated interview
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((err) => transition(ERROR_SAVE, true))
  }

  function onDelete() {
    transition(DELETING, true)

    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((err) => transition(ERROR_DELETE, true))
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
          onCancel={() => transition(EMPTY)}
          onSave={save}
        />
      }

      {
        mode === SHOW &&
        <Show
          id={props.id}
          student={props.interview.student}
          interviewer={props.interviewer ? props.interviewer : null}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      }

      {
        mode === EDIT &&
        <Form
          student={props.interview.student}
          interviewer={props.interviewer.interviewer.id}
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      }

      {
        mode === SAVING &&
        <Status message="Saving" />
      }

      {
        mode === DELETING &&
        <Status message="Deleting" />
      }

      {
        mode === CONFIRM &&
        <Confirm
          message="Are you sure to Delete this entry?"
          onCancel={() => back()}
          onConfirm={onDelete}
        />
      }

      {mode === ERROR_SAVE &&
        <Error
          message="Sorry. An error occured while saving.Please try again."
          onClose={() => transition(CREATE)}
        />
      }

      {mode === ERROR_DELETE &&
        <Error
          message="Sorry. An error occured while deleting.Please try again."
          onClose={() => transition(SHOW)}
        />
      }


    </article >
  )
}

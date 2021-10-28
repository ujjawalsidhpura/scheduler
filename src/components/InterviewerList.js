import React, { useState } from "react";
import classNames from 'classnames';
import InterviewerListItem from "components/InterviewerListItem"
import "components/InterviewerList.scss"

export default function InterviewerList(props) {

  const interviewersArr = props.interviewers;
  const parsedInterviewers = interviewersArr.map(eachInterviewer =>
    <InterviewerListItem
      key={eachInterviewer.id}
      name={eachInterviewer.name}
      avatar={eachInterviewer.avatar}
      selected={eachInterviewer.id === props.value}
      setInterviewer={() => props.onChange(eachInterviewer.id)}
    />
  )

  return (
    <section className="interviewers">

      <h4 className="interviewers__header text--light">
        Interviewers
      </h4>

      <ul className="interviewers__list">
        {parsedInterviewers}
      </ul>

    </section>
  )
}
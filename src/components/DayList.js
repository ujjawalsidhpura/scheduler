import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {

  const daysArr = props.days;

  const parsedDayList = daysArr.map(eachDay =>
    <DayListItem
      key={eachDay.id}
      name={eachDay.name}
      spots={eachDay.spots}
      selected={eachDay.name === props.value}
      onChange={props.onChange}
    />
  )

  return (

    <ul>
      {parsedDayList}
    </ul>

  )
}
import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "../styles/Calendar.css";
import { DataContext } from "../context/DataProvider";

const CalendarBox = ({ date, setDate }) => {
  const { setIsCalendarOpen } = useContext(DataContext);

  const onChange = (date) => {
    setDate(date);
    setIsCalendarOpen(false);
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default CalendarBox;

import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";
import { v4 as uuidv4 } from "uuid";
import CalendarBox from "./CalendarBox";

const TodoAdd = () => {
  const { addInputOpen, setAddInputOpen } = useContext(DataContext);
  const {
    todos,
    setTodos,
    date,
    setDate,
    isCalendarOpen,
    setIsCalendarOpen,
    setShow,
  } = useContext(DataContext);
  const [inputAddValue, setInputAddValue] = useState("");

  const todoAddHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        name: inputAddValue,
        completed: false,
        date: date.toString().slice(0, 10),
      },
    ]);
    setInputAddValue("");
    setIsCalendarOpen(false);
    setDate("");
  };
  const cancelAddHandler = () => {
    setAddInputOpen(false);
    setDate("");
    setInputAddValue("");
  };

  if (addInputOpen === false) {
    return (
      <div
        onClick={() => {
          setAddInputOpen(true);
        }}
        className="flex items-center py-2 cursor-pointer group"
      >
        <span className="text-xl w-8 h-8 flex items-center justify-center group-hover:bg-red-300 group-hover:text-white rounded mr-2 transition-all duration-100">
          <ion-icon name="add-outline"></ion-icon>
        </span>
        <span className="text-gray-400 font-light">Add task</span>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col py-2 group">
        <form
          onSubmit={(e) => todoAddHandler(e)}
          className="w-full rounded border-gray-400 border p-2 relative overflow-visible"
        >
          <input
            className="w-full placeholder-gray-400 font-light text-black border-0 focus:ring-0 p-0 mb-3 pl-1"
            type="text"
            placeholder="e.g., Read every day  p3 @goals #Learning"
            value={inputAddValue}
            onChange={(e) => setInputAddValue(e.target.value)}
            autoFocus
          />

          <button
            className="px-2 py-1 border rounded border-gray-400 flex items-center justify-center text-gray-600 text-sm transition duration-100 hover:bg-gray-100"
            type="button"
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          >
            <ion-icon name="calendar-outline"></ion-icon>
            <span className="ml-2">
              {date !== "" ? date.toString().slice(0, 10) : "Schedule"}
            </span>
          </button>
          {isCalendarOpen && <CalendarBox date={date} setDate={setDate} />}
        </form>
        <div className="flex items-center mt-3">
          <button
            onClick={(e) => todoAddHandler(e)}
            className="px-5 py-2 bg-red-400 rounded text-white hover:border-red-400 hover:bg-white border hover:text-red-400 transition-all duration-100 mr-3"
          >
            Add task
          </button>
          <button
            onClick={cancelAddHandler}
            className="cursor-pointer hover:underline"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
};

export default TodoAdd;

import React, { useState, useContext, useRef } from "react";
import { DataContext } from "../context/DataProvider";
import CalendarBox from "./CalendarBox";

const TodoItem = ({ todo }) => {
  const inputEl = useRef();
  const {
    todos,
    setTodos,
    isCalendarOpen,
    setIsCalendarOpen,
    date,
    setDate,
    setAddInputOpen,
  } = useContext(DataContext);
  const [editTodo, setEditTodo] = useState(false);
  const [checked, setChecked] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);
  console.log(todos);
  console.log(new Date().toString().slice(0, 10));

  const EditItemHandler = () => {
    setEditTodo(true);
    setAddInputOpen(false);
  };

  const EditTodoItemHandler = (e) => {
    e.preventDefault();
    setEditTodo(false);
    const EditedTodo = todos.map((newTodo) => {
      if (newTodo.id === todo.id) {
        newTodo.name = editValue;
        newTodo.date = date;
      }
      return newTodo;
    });
    setTodos(EditedTodo);
    setDate("");
  };

  const DeleteTodoItemHandler = () => {
    const deletedTodo = todos.filter((deleteTodo) => deleteTodo.id !== todo.id);
    setTodos(deletedTodo);
  };

  const Completed = () => {
    setChecked(!checked);
    setTimeout(() => {
      const completedTodo = todos.map((completeTodo) => {
        if (completeTodo.id === todo.id) {
          completeTodo.completed = !todo.completed;
        }
        return completeTodo;
      });
      setTodos(completedTodo);
    }, 300);
  };

  if (editTodo) {
    return (
      <div className="flex flex-col py-2 group">
        <form
          onSubmit={(e) => EditTodoItemHandler(e)}
          className="w-full rounded border-gray-400 border p-2 relative overflow-visible"
        >
          <input
            className="w-full placeholder-gray-400 font-light text-black border-0 focus:ring-0 p-0 mb-3 pl-1"
            type="text"
            placeholder="e.g., Read every day  p3 @goals #Learning"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
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
            onClick={(e) => EditTodoItemHandler(e)}
            className="px-5 py-2 bg-red-400 rounded text-white hover:border-red-400 hover:bg-white border hover:text-red-400 transition-all duration-100 mr-3"
          >
            Save
          </button>
          <button
            onClick={() => setEditTodo(false)}
            className="cursor-pointer hover:underline"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between items-center py-2 border-b cursor-pointer">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-red-400 rounded-2xl border border-gray-400 mr-3 transition duration-300"
            checked={todo.completed === false ? checked : !checked}
            onChange={() => Completed()}
          />
          <div className="flex flex-col">
            <span>{todo.name}</span>
            {todo.date ? (
              <div className="text-blue-500 font-thin text-sm flex items-center">
                <ion-icon name="calendar-clear-outline"></ion-icon>
                <span className="ml-2">
                  {todo.date.toString().slice(0, 10)}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex">
          <button
            onClick={EditItemHandler}
            className="text-xl w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-all duration-100"
          >
            <ion-icon name="create-outline"></ion-icon>
          </button>
          <button
            onClick={DeleteTodoItemHandler}
            className="text-lg w-8 h-8 flex items-center justify-center hover:bg-red-300 hover:text-white rounded transition-all duration-100"
          >
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </div>
      </div>
    );
  }
};

export default TodoItem;

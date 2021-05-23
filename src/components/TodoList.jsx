import React, { useContext } from "react";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";

//Context
import { DataContext } from "../context/DataProvider";

const TodoList = ({ today }) => {
  const { todos, search, showCompleted } = useContext(DataContext);
  const currentDate = new Date().toString().slice(0, 10);
  console.log(currentDate);

  if (today !== "today") {
    if (showCompleted !== true) {
      return (
        <div>
          {todos
            .filter((todo) => {
              if (search === "") {
                return todo;
              } else if (
                todo.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return todo;
              }
            })
            .map((todo, index) =>
              todo.completed !== true ? (
                <TodoItem key={index} todo={todo} />
              ) : (
                ""
              )
            )}
          <TodoAdd />
        </div>
      );
    } else {
      return (
        <div>
          <div className="text-xl semibold mb-2">Completed Tasks</div>
          {todos
            .filter((todo) => {
              if (todo.date === currentDate) {
                if (search === "") {
                  return todo;
                } else if (
                  todo.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return todo;
                }
              }
            })
            .map((todo, index) =>
              todo.completed === true ? (
                <TodoItem key={index} todo={todo} />
              ) : (
                ""
              )
            )}
        </div>
      );
    }
  } else {
    if (showCompleted !== true) {
      return (
        <div>
          {todos
            .filter((todo) => {
              if (todo.date === currentDate) {
                if (search === "") {
                  return todo;
                } else if (
                  todo.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return todo;
                }
              }
            })
            .map((todo, index) =>
              todo.completed !== true ? (
                <TodoItem key={index} todo={todo} />
              ) : (
                ""
              )
            )}
          <TodoAdd />
        </div>
      );
    } else {
      return (
        <div>
          <div className="text-xl semibold mb-2">Completed Tasks</div>
          {todos
            .filter((todo) => {
              if (search === "") {
                return todo;
              } else if (
                todo.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return todo;
              }
            })
            .map((todo, index) =>
              todo.completed === true ? (
                <TodoItem key={index} todo={todo} />
              ) : (
                ""
              )
            )}
        </div>
      );
    }
  }
};

export default TodoList;

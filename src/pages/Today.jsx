import React, { useContext } from "react";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import { DataContext } from "../context/DataProvider";
import AllClear from "../img/Clear.svg";

const Today = () => {
  const { isSidebarOpen, setIsSidebarOpen, todos, setTodos } =
    useContext(DataContext);
  return (
    <div
      className={`flex flex-col px-5 mt-6 transition-all duration-200 ${
        isSidebarOpen ? "sm:ml-72 sm:px-9 md:px-32" : "sm:px-40 md:px-72"
      }`}
    >
      <Title title="Today" />
      <TodoList today="today" />
      {todos.length === 0 ? (
        <div
          className="-z-1 w-80 h-72 bg-center bg-cover bg-no-repeat absolute top-60 left-1/2 transform -translate-x-1/2 sm:w-96 sm:h-80 sm:top-44"
          style={{ backgroundImage: `url(${AllClear})` }}
        >
          <div className="relative flex flex-col w-full h-full items-center justify-end">
            <div className="absolute -bottom-20 text-center">
              <h2 className="font-semibold">All Clear</h2>
              <p className="font-light">
                Looks like everything's organized in the right place.
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Today;

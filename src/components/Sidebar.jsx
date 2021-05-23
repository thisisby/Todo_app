import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/DataProvider";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen, todos } = useContext(DataContext);

  const [quantity, setQuantity] = useState(0);
  const [TodayQuantity, setTodayQuantity] = useState(0);

  useEffect(() => {
    const NewTodos = todos.filter((todo) => todo.completed === false);
    setQuantity(NewTodos.length);
    const TodayTodos = todos.filter(
      (todo) => todo.date === new Date().toString().slice(0, 10)
    );
    setTodayQuantity(TodayTodos.length);
  }, [todos]);

  return (
    <div
      className={`fixed ${
        isSidebarOpen === true ? "left-0" : "-left-96"
      } transition-all duration-200 w-3/4 h-screen py-4 px-3 pl-8 bg-white flex flex-col border-r border-gray-100 sm:w-2/5 md:w-72 z-10`}
    >
      <NavLink
        activeClassName="bg-gray-100"
        to="/Inbox"
        className="flex justify-between items-center p-2 transition-all duration-100 bg-transparent hover:bg-gray-100 rounded mb-1"
      >
        <span className=" flex items-center">
          <span className="mr-2 flex items-center">
            <ion-icon name="albums-outline"></ion-icon>
          </span>
          Inbox
        </span>

        <span className="text-gray-400">{quantity}</span>
      </NavLink>
      <NavLink
        activeClassName="bg-gray-100"
        to="/Today"
        className="flex justify-between items-center p-2 transition-all duration-100 bg-transparent hover:bg-gray-100 rounded mb-1"
      >
        <span className=" flex items-center">
          <span className="mr-2 flex items-center">
            <ion-icon name="today-outline"></ion-icon>
          </span>
          Today
        </span>

        <span className="text-gray-400">{TodayQuantity}</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;

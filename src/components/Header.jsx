import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const {
    isSidebarOpen,
    setIsSidebarOpen,
    addInputOpen,
    setAddInputOpen,
    todos,
    setTodos,
    setSearch,
  } = useContext(DataContext);

  const searchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex justify-between py-2 px-3 bg-red-500 text-gray-100 sm:px-7">
      <div className="relative flex">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-2xl w-8 h-8 flex items-center justify-center hover:bg-red-400 rounded mr-2 transition-all duration-100"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </button>
        <button className="text-2xl w-8 h-8 flex items-center justify-center hover:bg-red-400 rounded mr-2 transition-all duration-100">
          <ion-icon name="home-outline"></ion-icon>
        </button>
        <button
          onFocus={() => setShowSearch(true)}
          className={`text-2xl w-8 h-8 flex items-center justify-center sm:hidden ${
            showSearch ? "z-0" : "z-10"
          }`}
        >
          <ion-icon name="search-outline"></ion-icon>
        </button>

        <form
          onSubmit={searchSubmit}
          className={`absolute left-20 transition duration-150 sm:static sm:opacity-100 ${
            showSearch ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <input
            className={`border-0 bg-red-400 rounded text-white placeholder-white px-3 py-1 transition-all duration-300 sm:focus:w-80 sm:focus:bg-white sm:focus:text-black sm:focus:placeholder-black focus:outline-none`}
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setShowSearch(false)}
            className={`text-2xl w-8 h-8 flex items-center justify-center absolute top-0 right-0 ${
              showSearch ? "block" : "hidden"
            }`}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </form>
      </div>
      <div>
        <button
          onClick={() => setAddInputOpen(true)}
          className="text-2xl w-8 h-8 flex items-center justify-center hover:bg-red-400 rounded transition-all duration-100"
        >
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Header;

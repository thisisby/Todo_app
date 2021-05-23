import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [addInputOpen, setAddInputOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);
  const [date, setDate] = useState("");

  return (
    <DataContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        todos,
        setTodos,
        addInputOpen,
        setAddInputOpen,
        search,
        setSearch,
        showCompleted,
        setShowCompleted,
        date,
        setDate,
        isCalendarOpen,
        setIsCalendarOpen,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

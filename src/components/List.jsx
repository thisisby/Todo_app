import React, { useContext } from "react";
import ListItem from "./ListItem";

import { DataContext } from "../context/DataProvider";

const List = () => {
  const [todos, setTodos] = useContext(DataContext);
  const handleEditTodos = (editvalue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editvalue;
      }
    });
    setTodos(newTodos);
  };
  return (
    <div>
      {todos.map((todo, index) => (
        <ListItem
          key={index}
          todo={todo}
          id={index}
          handleEditTodos={handleEditTodos}
        />
      ))}
    </div>
  );
};

export default List;

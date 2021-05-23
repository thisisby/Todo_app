import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";

const FormInput = () => {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState();

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
  };
  return (
    <form className="flex" onSubmit={addTodo}>
      <input
        className="border py-2 px-4"
        type="text"
        required
        placeholder="Add todo"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value.toLowerCase())}
      />
      <button className="border p-4" type="submit">
        Create
      </button>
    </form>
  );
};

export default FormInput;

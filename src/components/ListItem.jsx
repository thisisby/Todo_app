import React, { useState } from "react";

const ListItem = ({ todo, id, handleEditTodos }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);
  const handleEdit = () => {
    setOnEdit(true);
  };
  const handleSave = () => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };

  if (onEdit) {
    return (
      <div className="flex border justify-between mb-3">
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
        <button className="border bg-green-100 p-4" onClick={handleSave}>
          Save
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex border justify-between mb-3">
        <label htmlFor={id}>
          <input type="checkbox" id={id} />
          {todo.name}
        </label>
        <button className="border bg-green-100 p-4" onClick={handleEdit}>
          Edit
        </button>
      </div>
    );
  }
};

export default ListItem;

import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setNewTodoValue } = props;

  return (
    <header>
      <input
        placeholder="Enter todo..."
        value={todoValue}
        onChange={(e) => {
          setNewTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setNewTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((item, index) => {
        return (
          <TodoCard {...props} key={index} todoIndex={index}>
            <p>{item}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

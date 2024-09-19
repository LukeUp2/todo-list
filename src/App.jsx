import { useState, useEffect } from "react";
import TodoInput from "./componets/TodoInput";
import TodoList from "./componets/TodoLIst";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoValue, setNewTodoValue] = useState("");

  function persistData(newTodos) {
    localStorage.setItem("todos", JSON.stringify({ todos: newTodos }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(todoIndexToBeDeleted) {
    const newTodoList = todos.filter((item, todoIndex) => {
      return todoIndex != todoIndexToBeDeleted;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setNewTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={newTodoValue}
        setNewTodoValue={setNewTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;

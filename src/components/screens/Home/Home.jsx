import React, { useEffect, useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

export const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://63ea0e25e0ac9368d64926b5.mockapi.io/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log("Error when fetching data", err));
  }, []);

  const changeTodo = (_id) => {
    const copy = [...todos];
    const current = copy.find((item) => item.id === _id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (_id) =>
    setTodos([...todos].filter((item) => item.id !== _id));

  return (
    <div className="w-2/5	">
      <h1 className="text-2xl font-bold text-center mb-8">TooDoo</h1>

      <CreateTodoField setTodos={setTodos} />

      {todos.map((todo) => (
        <TodoItem
          changeTodo={changeTodo}
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

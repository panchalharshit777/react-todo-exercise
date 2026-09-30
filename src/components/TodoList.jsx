import { useState } from "react";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";

function TodoList() {
  const [todos, setTodos] = useState([]); // start with empty list

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <NewTodo onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),   // unique ID
      text: input       // only text for display
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={addTodo}>Add Todo</button>

     <ul>
        {todos.map((todo, index) => (
            <li key={todo.id} className="todo-item">
                {index + 1} - {todo.text}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
        ))}
    </ul>

    </div>
  );
}

export default TodoApp;

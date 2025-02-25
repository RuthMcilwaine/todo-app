import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React', completed: true },
    { id: 2, task: 'Build Todo App', completed: false },
    { id: 3, task: 'Read Documentation', completed: true },
  ]);

  const create = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]); // Add the new todo to the list
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const edit = (id, newTask) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
  };

  return (
    <div>
      <h1>Todos!</h1>
      <TodoForm createTodo={create} />
      <ul>
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            task={todo.task}
            removeTodo={remove}
            editTodo={edit}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

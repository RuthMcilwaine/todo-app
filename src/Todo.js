import React from 'react';

function Todo({ removeTodo, editTodo, id, task }) {
  const handleDelete = () => {
    removeTodo(id);
  };

  const handleUpdate = () => {
    editTodo(id);
  };

  return (
    <div>
      {task}
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
export default Todo;

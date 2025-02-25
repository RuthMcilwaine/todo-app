import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const TodoForm = ({ createTodo }) => {
  const [task, setTask] = useState();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({ task, id: uuid() });
    setTask('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add To Do"
          id="task"
          name="task"
          value={task}
          onChange={handleChange}
        ></input>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
export default TodoForm;

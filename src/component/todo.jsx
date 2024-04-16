import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';
import '../todoInput.css';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      dispatch(addTodo({ task: task })); // Pass task as an object
      setTask('');
    }
  };

  return (
        <>
        <h1 className='heading'>Todo React Application</h1>
    <div className="task-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className='btn'>Add Task</button>
      </form>
    </div>
    </>
  );
};

export default TaskInput;

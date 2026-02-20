import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    const newTask = {
      id: Date.now(), // simple unique id
      text: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

const toggleTaskCompletion = (taskId) => {
  setTasks(tasks.map(task =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  ));
};

const deleteTask = (taskId) => {
  setTasks(tasks.filter(task => task.id !== taskId));
};

return (
  <div className="todo-container">
    <h1>My Todo List</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

}

export default TodoList;
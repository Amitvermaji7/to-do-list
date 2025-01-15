
import React from 'react';

function TaskList({ tasks, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <span>{task}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
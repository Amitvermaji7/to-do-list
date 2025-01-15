import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [task, setTask] = useState("");

  // Handle task input changes
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  // Handle adding a task
  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask(""); // Clear input after adding
    }
  };

  // Handle pressing Enter to add a task
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TaskInput;

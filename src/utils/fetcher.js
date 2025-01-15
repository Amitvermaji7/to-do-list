// src/utils/fetcher.js
import { useState, useEffect } from 'react';

const fetchTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return { tasks, addTask, deleteTask };
};

export default fetchTasks;
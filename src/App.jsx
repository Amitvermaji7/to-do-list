// src/App.jsx
import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import fetchTasks from './utils/fetcher';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState('');
  const [deleteTask, setDeleteTask] = useState('');

  const handleSignUp = () => {
    if (password === confirmPassword) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      setIsSignedUp(false);
      setIsLoggedIn(true);
    } else {
      alert('Passwords do not match');
    }
  };

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <TaskInput addTask={handleAddTask} />
          <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : isSignedUp ? (
        <div>
          <h1>Sign up</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleSignUp}>Sign up</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <button onClick={() => setIsSignedUp(true)}>Sign up</button>
        </div>
      )}
    </div>
  );
}

export default App;
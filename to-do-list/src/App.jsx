// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>To-Do List</h1>
      <div className="app">
        <div className="card">
          <h2>Add a Task:</h2>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
          <h2>Tasks:</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => handleRemoveTask(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

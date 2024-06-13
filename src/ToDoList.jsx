import { useState } from "react";
import './App.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState(['Example One', 'Example Two']);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {

  };

  const deleteTask = (index) => {

  }

  const moveTaskUp = (index) => {

  }

  const moveTaskDown = (index) => {

  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>
      <div>
        <input 
          type="text"
          placeholder="Enter a task" 
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="add-button"
          onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => 
          <li key={index}>
            <span className="text">{task}</span>
            <button 
              onClick={() => deleteTask(index)}
              className="delete-button">
                Delete
            </button>
            <button 
              onClick={() => moveTaskUp(index)}
              className="move-up-button">
                Move Up
            </button>
            <button 
              onClick={() => moveTaskDown(index)}
              className="move-down-button">
                Move Down
            </button>
          </li>
        )}
      </ol>
    </div>
  )

}
export default ToDoList;
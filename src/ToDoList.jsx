import { useState } from "react";
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState(['Example One', 'Example Two']);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks(t => [...t, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  const handleEditChange = (e) => {
    setEditValue(e.target.value)
  }

  const handleEdit = (index) => {

  }

  const handleResubmit = (e) => {
    
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
              className="move-button">
                ⬆️
            </button>
            <button 
              onClick={() => moveTaskDown(index)}
              className="move-button">
                ⬇️
            </button>
          </li>
        )}
      </ol>
    </div>
  )

}
export default ToDoList;
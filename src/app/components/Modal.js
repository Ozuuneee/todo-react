import { useState } from "react";
import "./style.css";

export default function Modal({ taskToEdit, closeModal, handleSubmit }) {
  const [taskName, setTaskName] = useState(
    taskToEdit ? taskToEdit.querySelector(".taskName").innerText : ""
  );
  const [status, setStatus] = useState(
    taskToEdit ? taskToEdit.dataset.status : "todo"
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") setTaskName(value);
    if (name === "status") setStatus(value);
  };

  const handleSubmitTask = () => {
    handleSubmit(taskName, status);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <h2>{taskToEdit ? "Edit task" : "Add task"}</h2>
        <input
          type="text"
          className="text"
          placeholder="Task name..."
          name="taskName"
          value={taskName}
          onChange={handleChange}
        />
        <select
          name="status"
          className="status"
          value={status}
          onChange={handleChange}
        >
          <option value="select">Select status</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
          <option value="blocked">Blocked</option>
        </select>
        <button onClick={handleSubmitTask}>Submit</button>
        <span className="closeModal" onClick={closeModal}>
          X
        </span>
      </div>
    </div>
  );
}

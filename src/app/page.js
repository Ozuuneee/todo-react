"use client";
import { useState } from "react";
import TaskColumn from "./components/TaskColumn";
import Modal from "./components/Modal";
import "./components/style.css";

export default function Home() {
  const [tasks, setTasks] = useState({
    todo: [],
    "in-progress": [],
    done: [],
    blocked: [],
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const openModal = (task = null) => {
    setTaskToEdit(task);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTaskToEdit(null);
  };

  const handleSubmit = (taskName, status) => {
    if (taskToEdit) {
      const updatedTasks = { ...tasks };
      updatedTasks[taskToEdit.dataset.status] = updatedTasks[
        taskToEdit.dataset.status
      ].filter((task) => task !== taskToEdit);
      updatedTasks[status] = [...updatedTasks[status], { name: taskName }];
      setTasks(updatedTasks);
    } else {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [status]: [...prevTasks[status], { name: taskName }],
      }));
    }
  };

  const onDeleteTask = (taskName, status) => {
    const updatedTasks = { ...tasks };
    updatedTasks[status] = updatedTasks[status].filter(
      (task) => task.name !== taskName
    );
    setTasks(updatedTasks);
  };

  const onDrop = (e, status) => {
    const taskId = e.dataTransfer.getData("taskId");
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={() => openModal()}>Add Task</button>
      </div>
      <header>
        {Object.keys(tasks).map((status) => (
          <TaskColumn
            key={status}
            title={status.charAt(0).toUpperCase() + status.slice(1)}
            status={status}
            tasks={tasks[status]}
            onEditTask={(task) => openModal(task)}
            onDeleteTask={(task) => onDeleteTask(task.name, status)}
            onDrop={(e) => onDrop(e, status)}
          />
        ))}
      </header>
      {modalVisible && (
        <Modal
          taskToEdit={taskToEdit}
          closeModal={closeModal}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

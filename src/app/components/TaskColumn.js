import TaskCard from "./TaskCard";
import "./style.css";
export default function TaskColumn({
  title,
  status,
  tasks,
  onEditTask,
  onDeleteTask,
  onDrop,
}) {
  return (
    <div
      status={status}
      className="TaskColumn"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="inner">
        <div className="roundShape"></div>
        <div className="t5">{title}</div>
        <div className={`num-${status}`}>{tasks.length}</div>
      </div>
      <div className="taskList">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            taskName={task.name}
            status={status}
            onEdit={() => onEditTask(task)}
            onDelete={() => onDeleteTask(task)}
          />
        ))}
      </div>
    </div>
  );
}

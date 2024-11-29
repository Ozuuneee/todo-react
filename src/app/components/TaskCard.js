export default function TaskCard({ taskName, status, onEdit, onDelete }) {
  return (
    <div className="taskCard" data-status={status} draggable>
      <span className="taskName">{taskName}</span>
      <div className="taskActions">
        <button className="editBtn" onClick={onEdit}>
          <img src="edit.png" alt="Edit" />
        </button>
        <button className="deleteBtn" onClick={onDelete}>
          <img src="delete.png" alt="Delete" />
        </button>
      </div>
    </div>
  );
}

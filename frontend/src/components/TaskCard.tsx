import type { Task } from "../types/task";

interface Props {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}

function TaskCard({ task, onEdit, onDelete }: Props) {
  const getStatusColor = () => {
    switch (task.status) {
      case "Completed":
        return "bg-green-100 text-green-700";

      case "In Progress":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case "High":
        return "bg-red-100 text-red-700";

      case "Medium":
        return "bg-orange-100 text-orange-700";

      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold">
          {task.title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm ${getPriorityColor()}`}
        >
          {task.priority}
        </span>

      </div>

      <p className="text-gray-600 mt-3">
        {task.description}
      </p>

      <div className="flex gap-3 mt-5">

        <span
          className={`px-3 py-1 rounded-full text-sm ${getStatusColor()}`}
        >
          {task.status}
        </span>

        <span className="text-gray-500">
          📅 {new Date(task.dueDate).toLocaleDateString()}
        </span>

      </div>

      <div className="mt-6 flex gap-3">

        <button
          onClick={onEdit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;
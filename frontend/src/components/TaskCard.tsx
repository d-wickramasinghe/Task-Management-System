import type { Task } from "../types/task";
import {
  CalendarDays,
  Pencil,
  Trash2,
} from "lucide-react";

interface Props {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}

function TaskCard({
  task,
  onEdit,
  onDelete,
}: Props) {
  const statusColor = () => {
    switch (task.status) {
      case "Completed":
        return "bg-green-100 text-green-700";

      case "In Progress":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  const priorityColor = () => {
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
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6">

      <div className="flex justify-between items-start">

        <h2 className="text-xl font-bold text-slate-800">
          {task.title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor()}`}
        >
          {task.status}
        </span>

      </div>

      <p className="text-gray-500 mt-4">
        {task.description}
      </p>

      <div className="flex items-center justify-between mt-6">

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${priorityColor()}`}
        >
          {task.priority}
        </span>

        <div className="flex items-center gap-2 text-gray-500">

          <CalendarDays size={18} />

          <span className="text-sm">
            {new Date(task.dueDate).toLocaleDateString()}
          </span>

        </div>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={onEdit}
          className="flex-1 flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          <Pencil size={18} />
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex-1 flex justify-center items-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
        >
          <Trash2 size={18} />
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;
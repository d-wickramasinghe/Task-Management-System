import { useState } from "react";
import api from "../services/api";
import type { Task } from "../types/task";

interface Props {
  task: Task;
  onUpdated: () => void;
}

function EditTaskForm({ task, onUpdated }: Props) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [dueDate, setDueDate] = useState(task.dueDate.slice(0, 10));

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.put(`/tasks/${task.id}`, {
        title,
        description,
        priority,
        status,
        dueDate,
      });

      alert("Task Updated Successfully");
      onUpdated();
    } catch (error: any) {
  console.error(error);

  console.log(error.response);

  alert(error.response?.data?.message || "Failed to update task");
}
  };

  return (
    <form onSubmit={handleUpdate}>
      <h3>Edit Task</h3>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <br /><br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <br /><br />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        Save Changes
      </button>
    </form>
  );
}

export default EditTaskForm;
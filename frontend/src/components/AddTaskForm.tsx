// import { useState } from "react";
// import api from "../services/api";

// interface Props {
//   onTaskAdded: () => void;
// }

// function AddTaskForm({ onTaskAdded }: Props) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState("Medium");
//   const [status, setStatus] = useState("Pending");
//   const [dueDate, setDueDate] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await api.post("/tasks", {
//         title,
//         description,
//         priority,
//         status,
//         dueDate,
//       });

//       setTitle("");
//       setDescription("");
//       setPriority("Medium");
//       setStatus("Pending");
//       setDueDate("");

//       onTaskAdded();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to create task");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add Task</h2>

//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />

//       <br /><br />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />

//       <br /><br />

//       <select
//         value={priority}
//         onChange={(e) => setPriority(e.target.value)}
//       >
//         <option>High</option>
//         <option>Medium</option>
//         <option>Low</option>
//       </select>

//       <br /><br />

//       <select
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//       >
//         <option>Pending</option>
//         <option>In Progress</option>
//         <option>Completed</option>
//       </select>

//       <br /><br />

//       <input
//         type="date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//         required
//       />

//       <br /><br />

//       <button type="submit">Add Task</button>
//     </form>
//   );
// }

// export default AddTaskForm;


import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { Plus, Flag, ListChecks, CalendarDays } from "lucide-react";

interface Props {
  onTaskAdded: () => void;
}

function AddTaskForm({ onTaskAdded }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/tasks", {
        title,
        description,
        priority,
        status,
        dueDate,
      });

      setTitle("");
      setDescription("");
      setPriority("Medium");
      setStatus("Pending");
      setDueDate("");

      onTaskAdded();

      toast.success("Task created successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create task");
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600">
          <Plus size={18} strokeWidth={2.5} />
        </div>
        <h2 className="text-lg font-semibold text-slate-800">
          Add New Task
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1.5">
            Title
          </label>
          <input
            type="text"
            placeholder="e.g. Prepare quarterly report"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition-shadow duration-150 focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1.5">
            Description
          </label>
          <textarea
            rows={3}
            placeholder="Add any relevant details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 resize-none transition-shadow duration-150 focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="flex items-center gap-1.5 text-sm font-medium text-slate-600 mb-1.5">
              <Flag size={14} className="text-slate-400" />
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 bg-white transition-shadow duration-150 focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 focus:outline-none"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-sm font-medium text-slate-600 mb-1.5">
              <ListChecks size={14} className="text-slate-400" />
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 bg-white transition-shadow duration-150 focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 focus:outline-none"
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-1.5 text-sm font-medium text-slate-600 mb-1.5">
              <CalendarDays size={14} className="text-slate-400" />
              Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 transition-shadow duration-150 focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-semibold py-3 rounded-lg transition-colors duration-150 shadow-sm hover:shadow"
        >
          <Plus size={16} strokeWidth={2.5} />
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
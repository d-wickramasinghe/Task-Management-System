// import { useState } from "react";
// import api from "../services/api";
// import type { Task } from "../types/task";

// interface Props {
//   task: Task;
//   onUpdated: () => void;
// }

// function EditTaskForm({ task, onUpdated }: Props) {
//   const [title, setTitle] = useState(task.title);
//   const [description, setDescription] = useState(task.description);
//   const [priority, setPriority] = useState(task.priority);
//   const [status, setStatus] = useState(task.status);
//   const [dueDate, setDueDate] = useState(task.dueDate.slice(0, 10));

//   const handleUpdate = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await api.put(`/tasks/${task.id}`, {
//         title,
//         description,
//         priority,
//         status,
//         dueDate,
//       });

//       alert("Task Updated Successfully");
//       onUpdated();
//     } catch (error: any) {
//   console.error(error);

//   console.log(error.response);

//   alert(error.response?.data?.message || "Failed to update task");
// }
//   };

//   return (
//     <form onSubmit={handleUpdate}>
//       <h3>Edit Task</h3>

//       <input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <br /><br />

//       <textarea
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
//       />

//       <br /><br />

//       <button type="submit">
//         Save Changes
//       </button>
//     </form>
//   );
// }

// export default EditTaskForm;

// import { useState } from "react";
// import api from "../services/api";
// import type { Task } from "../types/task";
// import { toast } from "react-toastify";

// interface Props {
//   task: Task;
//   onUpdated: () => void;
// }

// function EditTaskForm({ task, onUpdated }: Props) {
//   const [title, setTitle] = useState(task.title);
//   const [description, setDescription] = useState(task.description);
//   const [priority, setPriority] = useState(task.priority);
//   const [status, setStatus] = useState(task.status);
//   const [dueDate, setDueDate] = useState(task.dueDate.slice(0, 10));

//   const handleUpdate = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await api.put(`/tasks/${task.id}`, {
//         title,
//         description,
//         priority,
//         status,
//         dueDate,
//       });

//       toast.success("Task updated successfully");
//       onUpdated();
//     } catch (error: any) {
//       console.error(error);
//       toast.error(error.response?.data?.message || "Failed to update task");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-6">

//         <h2 className="text-2xl font-bold mb-6 text-gray-800">
//           ✏️ Edit Task
//         </h2>

//         <form onSubmit={handleUpdate} className="space-y-5">

//           <div>
//             <label className="block mb-2 font-medium">
//               Title
//             </label>

//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">
//               Description
//             </label>

//             <textarea
//               rows={4}
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <div className="grid md:grid-cols-3 gap-4">

//             <div>
//               <label className="block mb-2 font-medium">
//                 Priority
//               </label>

//               <select
//                 value={priority}
//                 onChange={(e) => setPriority(e.target.value)}
//                 className="w-full border rounded-lg px-4 py-3"
//               >
//                 <option>High</option>
//                 <option>Medium</option>
//                 <option>Low</option>
//               </select>
//             </div>

//             <div>
//               <label className="block mb-2 font-medium">
//                 Status
//               </label>

//               <select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="w-full border rounded-lg px-4 py-3"
//               >
//                 <option>Pending</option>
//                 <option>In Progress</option>
//                 <option>Completed</option>
//               </select>
//             </div>

//             <div>
//               <label className="block mb-2 font-medium">
//                 Due Date
//               </label>

//               <input
//                 type="date"
//                 value={dueDate}
//                 onChange={(e) => setDueDate(e.target.value)}
//                 className="w-full border rounded-lg px-4 py-3"
//               />
//             </div>

//           </div>

//           <div className="flex justify-end gap-3 pt-4">

//             <button
//               type="button"
//               onClick={onUpdated}
//               className="px-5 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
//             >
//               💾 Save Changes
//             </button>

//           </div>

//         </form>

//       </div>
//     </div>
//   );
// }

// export default EditTaskForm;




import { useEffect, useState } from "react";
import {
  CalendarDays,
  Flag,
  ListChecks,
  Save,
  X,
} from "lucide-react";
import api from "../services/api";
import type { Task } from "../types/task";
import { toast } from "react-toastify";

interface Props {
  task: Task;
  onUpdated: () => void;
  onClose: () => void;
}

function EditTaskForm({
  task,
  onUpdated,
  onClose,
}: Props) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [dueDate, setDueDate] = useState(task.dueDate.slice(0, 10));

  // Disable background scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

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

      toast.success("Task updated successfully!");

      onUpdated();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update task");
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Edit Task
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Update your task details.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleUpdate}
          className="space-y-6 p-8"
        >
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {/* Grid */}
          <div className="grid gap-5 md:grid-cols-3">

            {/* Priority */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                <Flag size={16} />
                Priority
              </label>

              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                <ListChecks size={16} />
                Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                <CalendarDays size={16} />
                Due Date
              </label>

              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
            >
              <Save size={18} />
              Save Changes
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTaskForm;
// import { useEffect, useState } from "react";
// import { CalendarDays, Flag, ListChecks } from "lucide-react";
// import api from "../services/api";
// import { toast } from "react-toastify";
// import { useNotifications } from "../context/NotificationContext";

// interface Props {
//   onTaskAdded: () => void;
//   onClose: () => void;
// }

// function AddTaskForm({ onTaskAdded, onClose, }: Props) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState("Medium");
//   const [status, setStatus] = useState("Pending");
//   const [dueDate, setDueDate] = useState("");
//   const { addNotification } = useNotifications();

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
//       addNotification(
//   `Task "${title}" created successfully.`,
//   "success"
// );

//       toast.success("Task created successfully!");

//       setTitle("");
//       setDescription("");
//       setPriority("Medium");
//       setStatus("Pending");
//       setDueDate("");

//       onTaskAdded();
//       onClose();
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to create task");
//     }
//   };

//   useEffect(() => {
//   document.body.style.overflow = "hidden";

//   return () => {
//     document.body.style.overflow = "auto";
//   };
// }, []);

// useEffect(() => {
//   const handleKeyDown = (e: KeyboardEvent) => {
//     if (e.key === "Escape") {
//       onClose();
//     }
//   };

//   window.addEventListener("keydown", handleKeyDown);

//   return () =>
//     window.removeEventListener("keydown", handleKeyDown);
// }, [onClose]);

//   return (
//   <div
//     onClick={onClose}
//     className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
//   >
//     <div
//       onClick={(e) => e.stopPropagation()}
//       className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl"
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">
//         <div>
//           <h2 className="text-2xl font-bold text-slate-800">
//             Add New Task
//           </h2>

//           <p className="mt-1 text-sm text-slate-500">
//             Create a new task for your team.
//           </p>
//         </div>

//         <button
//           type="button"
//           onClick={onClose}
//           className="rounded-lg p-2 transition hover:bg-slate-100"
//         >
//           ✕
//         </button>
//       </div>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-6 p-8"
//       >
//         {/* Title */}
//         <div>
//           <label className="mb-2 block text-sm font-medium text-slate-700">
//             Title
//           </label>

//           <input
//             type="text"
//             placeholder="Enter task title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="mb-2 block text-sm font-medium text-slate-700">
//             Description
//           </label>

//           <textarea
//             rows={4}
//             placeholder="Task description..."
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//           />
//         </div>

//         {/* Grid */}
//         <div className="grid gap-5 md:grid-cols-3">

//           <div>
//             <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
//               Priority
//             </label>

//             <select
//               value={priority}
//               onChange={(e) => setPriority(e.target.value)}
//               className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//             >
//               <option>High</option>
//               <option>Medium</option>
//               <option>Low</option>
//             </select>
//           </div>

//           <div>
//             <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
//               Status
//             </label>

//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//             >
//               <option>Pending</option>
//               <option>In Progress</option>
//               <option>Completed</option>
//             </select>
//           </div>

//           <div>
//             <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
//               Due Date
//             </label>

//             <input
//               type="date"
//               value={dueDate}
//               onChange={(e) => setDueDate(e.target.value)}
//               required
//               className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//             />
//           </div>

//         </div>

//         {/* Buttons */}
//         <div className="flex justify-end gap-3 pt-2">

//           <button
//             type="button"
//             onClick={onClose}
//             className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100"
//           >
//             Cancel
//           </button>

//           <button
//             type="submit"
//             className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
//           >
//             Create Task
//           </button>

//         </div>
//       </form>
//     </div>
//   </div>
// );
// }

// export default AddTaskForm;

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Flag,
  ListChecks,
  LoaderCircle,
  Plus,
  X,
} from "lucide-react";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNotifications } from "../context/NotificationContext";

interface Props {
  onTaskAdded: () => void | Promise<void>;
  onClose: () => void;
}

function AddTaskForm({
  onTaskAdded,
  onClose,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");
  const [dueDate, setDueDate] = useState("");
  const [saving, setSaving] = useState(false);

  const { addNotification } = useNotifications();

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !saving) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, saving]);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (saving) {
      return;
    }

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      toast.error("Task title is required");
      return;
    }

    if (!dueDate) {
      toast.error("Due date is required");
      return;
    }

    if (dueDate < today) {
      toast.error("Due date cannot be earlier than today");
      return;
    }

    try {
      setSaving(true);

      await api.post("/tasks", {
        title: trimmedTitle,
        description: description.trim(),
        priority,
        status,
        dueDate,
      });

      addNotification(
        `Task "${trimmedTitle}" created successfully.`,
        "success"
      );

      toast.success("Task created successfully!");

      setTitle("");
      setDescription("");
      setPriority("Medium");
      setStatus("Pending");
      setDueDate("");

      await onTaskAdded();
    } catch (error) {
      console.error("CREATE TASK ERROR:", error);
      toast.error("Failed to create task");
    } finally {
      setSaving(false);
    }
  };

  const handleClose = () => {
    if (!saving) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-task-title"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 sm:px-8 sm:py-6">
          <div>
            <h2
              id="add-task-title"
              className="text-2xl font-bold text-slate-800"
            >
              Add New Task
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Create a new task and assign its priority,
              status and due date.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            disabled={saving}
            aria-label="Close add task form"
            className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X size={22} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6 sm:p-8"
        >
          <div>
            <label
              htmlFor="add-task-title-input"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Title <span className="text-rose-500">*</span>
            </label>

            <input
              id="add-task-title-input"
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              disabled={saving}
              required
              autoFocus
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-slate-100"
            />
          </div>

          <div>
            <label
              htmlFor="add-task-description"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Description
            </label>

            <textarea
              id="add-task-description"
              rows={4}
              placeholder="Enter an optional task description"
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              disabled={saving}
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-slate-100"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label
                htmlFor="add-task-priority"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <Flag size={16} />
                Priority
                <span className="text-rose-500">*</span>
              </label>

              <select
                id="add-task-priority"
                value={priority}
                onChange={(event) =>
                  setPriority(event.target.value)
                }
                disabled={saving}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-slate-100"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="add-task-status"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <ListChecks size={16} />
                Status
                <span className="text-rose-500">*</span>
              </label>

              <select
                id="add-task-status"
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value)
                }
                disabled={saving}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-slate-100"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">
                  In Progress
                </option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="add-task-due-date"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <CalendarDays size={16} />
                Due Date
                <span className="text-rose-500">*</span>
              </label>

              <input
                id="add-task-due-date"
                type="date"
                value={dueDate}
                min={today}
                onChange={(event) =>
                  setDueDate(event.target.value)
                }
                disabled={saving}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-slate-100"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse justify-end gap-3 pt-2 sm:flex-row">
            <button
              type="button"
              onClick={handleClose}
              disabled={saving}
              className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? (
                <LoaderCircle
                  size={18}
                  className="animate-spin"
                />
              ) : (
                <Plus size={18} />
              )}

              {saving ? "Creating Task..." : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskForm;
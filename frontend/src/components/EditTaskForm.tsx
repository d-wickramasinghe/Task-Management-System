// import { useEffect, useState } from "react";
// import { useNotifications } from "../context/NotificationContext";
// import {
//   CalendarDays,
//   Flag,
//   ListChecks,
//   Save,
//   X,
// } from "lucide-react";
// import api from "../services/api";
// import type { Task } from "../types/task";
// import { toast } from "react-toastify";

// interface Props {
//   task: Task;
//   onUpdated: () => void;
//   onClose: () => void;
// }

// function EditTaskForm({
//   task,
//   onUpdated,
//   onClose,
// }: Props) {
//   const [title, setTitle] = useState(task.title);
//   const [description, setDescription] = useState(task.description);
//   const [priority, setPriority] = useState(task.priority);
//   const [status, setStatus] = useState(task.status);
//   const [dueDate, setDueDate] = useState(task.dueDate.slice(0, 10));
//   const { addNotification } = useNotifications();

//   // Disable background scrolling
//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   // Close modal with ESC key
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [onClose]);

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
//       addNotification(
//   `Task "${title}" updated successfully.`,
//   "info"
// );

//       toast.success("Task updated successfully!");

//       onUpdated();
//       onClose();
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to update task");
//     }
//   };

//   return (
//     <div
//       onClick={onClose}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in duration-200"
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">
//           <div>
//             <h2 className="text-2xl font-bold text-slate-800">
//               Edit Task
//             </h2>

//             <p className="mt-1 text-sm text-slate-500">
//               Update your task details.
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             className="rounded-xl p-2 transition hover:bg-slate-100"
//           >
//             <X size={22} />
//           </button>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleUpdate}
//           className="space-y-6 p-8"
//         >
//           {/* Title */}
//           <div>
//             <label className="mb-2 block text-sm font-medium text-slate-700">
//               Title
//             </label>

//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//               className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="mb-2 block text-sm font-medium text-slate-700">
//               Description
//             </label>

//             <textarea
//               rows={4}
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//             />
//           </div>

//           {/* Grid */}
//           <div className="grid gap-5 md:grid-cols-3">

//             {/* Priority */}
//             <div>
//               <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
//                 <Flag size={16} />
//                 Priority
//               </label>

//               <select
//                 value={priority}
//                 onChange={(e) => setPriority(e.target.value)}
//                 className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//               >
//                 <option>High</option>
//                 <option>Medium</option>
//                 <option>Low</option>
//               </select>
//             </div>

//             {/* Status */}
//             <div>
//               <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
//                 <ListChecks size={16} />
//                 Status
//               </label>

//               <select
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//               >
//                 <option>Pending</option>
//                 <option>In Progress</option>
//                 <option>Completed</option>
//               </select>
//             </div>

//             {/* Due Date */}
//             <div>
//               <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
//                 <CalendarDays size={16} />
//                 Due Date
//               </label>

//               <input
//                 type="date"
//                 value={dueDate}
//                 onChange={(e) => setDueDate(e.target.value)}
//                 className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//               />
//             </div>

//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-3 pt-2">

//             <button
//               type="button"
//               onClick={onClose}
//               className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
//             >
//               <Save size={18} />
//               Save Changes
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
  LoaderCircle,
  Save,
  X,
} from "lucide-react";
import api from "../services/api";
import type { Task } from "../types/task";
import { toast } from "react-toastify";
import { useNotifications } from "../context/NotificationContext";

interface Props {
  task: Task;
  onUpdated: () => void | Promise<void>;
  onClose: () => void;
}

function EditTaskForm({
  task,
  onUpdated,
  onClose,
}: Props) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(
    task.description ?? ""
  );
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [dueDate, setDueDate] = useState(
    task.dueDate.slice(0, 10)
  );
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

  const handleUpdate = async (
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

      await api.put(`/tasks/${task.id}`, {
        title: trimmedTitle,
        description: description.trim(),
        priority,
        status,
        dueDate,
      });

      if (
        status === "Completed" &&
        task.status !== "Completed"
      ) {
        addNotification(
          `Task "${trimmedTitle}" marked as completed.`,
          "success"
        );
      } else {
        addNotification(
          `Task "${trimmedTitle}" updated successfully.`,
          "info"
        );
      }

      toast.success("Task updated successfully!");

      await onUpdated();
    } catch (error) {
      console.error("UPDATE TASK ERROR:", error);
      toast.error("Failed to update task");
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
        aria-labelledby="edit-task-title"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 sm:px-8 sm:py-6">
          <div>
            <h2
              id="edit-task-title"
              className="text-2xl font-bold text-slate-800"
            >
              Edit Task
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Update the selected task details.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            disabled={saving}
            aria-label="Close edit task form"
            className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X size={22} />
          </button>
        </div>

        <form
          onSubmit={handleUpdate}
          className="space-y-6 p-6 sm:p-8"
        >
          <div>
            <label
              htmlFor="edit-task-title-input"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Title <span className="text-rose-500">*</span>
            </label>

            <input
              id="edit-task-title-input"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              disabled={saving}
              required
              autoFocus
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-slate-100"
            />
          </div>

          <div>
            <label
              htmlFor="edit-task-description"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Description
            </label>

            <textarea
              id="edit-task-description"
              rows={4}
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              disabled={saving}
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-slate-100"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label
                htmlFor="edit-task-priority"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <Flag size={16} />
                Priority
                <span className="text-rose-500">*</span>
              </label>

              <select
                id="edit-task-priority"
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
                htmlFor="edit-task-status"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <ListChecks size={16} />
                Status
                <span className="text-rose-500">*</span>
              </label>

              <select
                id="edit-task-status"
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
                htmlFor="edit-task-due-date"
                className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <CalendarDays size={16} />
                Due Date
                <span className="text-rose-500">*</span>
              </label>

              <input
                id="edit-task-due-date"
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
                <Save size={18} />
              )}

              {saving ? "Updating Task..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTaskForm;
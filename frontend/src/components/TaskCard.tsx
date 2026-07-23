// // import type { Task } from "../types/task";
// // import {
// //   CalendarDays,
// //   Pencil,
// //   Trash2,
// // } from "lucide-react";

// // interface Props {
// //   task: Task;
// //   onEdit: () => void;
// //   onDelete: () => void;
// // }

// // function TaskCard({
// //   task,
// //   onEdit,
// //   onDelete,
// // }: Props) {
// //   const statusColor = () => {
// //     switch (task.status) {
// //       case "Completed":
// //         return "bg-green-100 text-green-700";

// //       case "In Progress":
// //         return "bg-blue-100 text-blue-700";

// //       default:
// //         return "bg-yellow-100 text-yellow-700";
// //     }
// //   };

// //   const priorityColor = () => {
// //     switch (task.priority) {
// //       case "High":
// //         return "bg-red-100 text-red-700";

// //       case "Medium":
// //         return "bg-orange-100 text-orange-700";

// //       default:
// //         return "bg-gray-200 text-gray-700";
// //     }
// //   };

// //   return (
// //     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6">

// //       <div className="flex justify-between items-start">

// //         <h2 className="text-xl font-bold text-slate-800">
// //           {task.title}
// //         </h2>

// //         <span
// //           className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor()}`}
// //         >
// //           {task.status}
// //         </span>

// //       </div>

// //       <p className="text-gray-500 mt-4">
// //         {task.description}
// //       </p>

// //       <div className="flex items-center justify-between mt-6">

// //         <span
// //           className={`px-3 py-1 rounded-full text-sm font-semibold ${priorityColor()}`}
// //         >
// //           {task.priority}
// //         </span>

// //         <div className="flex items-center gap-2 text-gray-500">

// //           <CalendarDays size={18} />

// //           <span className="text-sm">
// //             {new Date(task.dueDate).toLocaleDateString()}
// //           </span>

// //         </div>

// //       </div>

// //       <div className="flex gap-3 mt-6">

// //         <button
// //           onClick={onEdit}
// //           className="flex-1 flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
// //         >
// //           <Pencil size={18} />
// //           Edit
// //         </button>

// //         <button
// //           onClick={onDelete}
// //           className="flex-1 flex justify-center items-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
// //         >
// //           <Trash2 size={18} />
// //           Delete
// //         </button>

// //       </div>

// //     </div>
// //   );
// // }

// // export default TaskCard;

// import type { Task } from "../types/task";
// import {
//   CalendarDays,
//   Pencil,
//   Trash2,
//   AlertCircle,
// } from "lucide-react";

// interface Props {
//   task: Task;
//   onEdit: () => void;
//   onDelete: () => void;
// }

// function TaskCard({
//   task,
//   onEdit,
//   onDelete,
// }: Props) {

//   const getStatusBadge = () => {
//     switch (task.status) {
//       case "Completed":
//         return "bg-emerald-50 text-emerald-700 border border-emerald-200";

//       case "In Progress":
//         return "bg-blue-50 text-blue-700 border border-blue-200";

//       default:
//         return "bg-amber-50 text-amber-700 border border-amber-200";
//     }
//   };

//   const getPriorityBadge = () => {
//     switch (task.priority) {
//       case "High":
//         return "bg-rose-50 text-rose-700 border border-rose-200";

//       case "Medium":
//         return "bg-orange-50 text-orange-700 border border-orange-200";

//       default:
//         return "bg-slate-100 text-slate-700 border border-slate-200";
//     }
//   };

//   const getDueDateInfo = () => {
//     const today = new Date();

//     today.setHours(0, 0, 0, 0);

//     const due = new Date(task.dueDate);

//     due.setHours(0, 0, 0, 0);

//     const diff =
//       Math.ceil(
//         (due.getTime() - today.getTime()) /
//           (1000 * 60 * 60 * 24)
//       );

//     if (diff < 0) {
//       return {
//         text: `Overdue (${Math.abs(diff)} day${
//           Math.abs(diff) > 1 ? "s" : ""
//         })`,
//         className:
//           "bg-rose-50 text-rose-700 border border-rose-200",
//       };
//     }

//     if (diff === 0) {
//       return {
//         text: "Due Today",
//         className:
//           "bg-amber-50 text-amber-700 border border-amber-200",
//       };
//     }

//     if (diff === 1) {
//       return {
//         text: "Due Tomorrow",
//         className:
//           "bg-orange-50 text-orange-700 border border-orange-200",
//       };
//     }

//     return {
//       text: due.toLocaleDateString(),
//       className:
//         "bg-slate-100 text-slate-700 border border-slate-200",
//     };
//   };

//   const dueDate = getDueDateInfo();

//   return (
//     <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

//       {/* Header */}

//       <div className="flex items-start justify-between gap-3">

//         <div className="flex-1">

//           <h3 className="text-xl font-semibold tracking-tight text-slate-800">
//             {task.title}
//           </h3>

//         </div>

//         <span
//           className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusBadge()}`}
//         >
//           {task.status}
//         </span>

//       </div>

//       {/* Description */}

//       <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
//         {task.description || "No description provided."}
//       </p>

//       {/* Meta */}

//       <div className="mt-6 flex flex-wrap items-center gap-3">

//         <span
//           className={`rounded-full px-3 py-1 text-xs font-medium ${getPriorityBadge()}`}
//         >
//           {task.priority} Priority
//         </span>

//         <span
//           className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${dueDate.className}`}
//         >
//           <CalendarDays size={14} />
//           {dueDate.text}
//         </span>

//       </div>

//       {/* Footer */}

//       <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">

//         <div className="flex items-center gap-2 text-xs text-slate-500">
//           <AlertCircle size={14} />
//           Task #{task.id}
//         </div>

//         <div className="flex gap-2">

//           <button
//             onClick={onEdit}
//             className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
//           >
//             <Pencil size={16} />
//             Edit
//           </button>

//           <button
//             onClick={onDelete}
//             className="flex items-center gap-2 rounded-xl border border-rose-200 px-4 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-50"
//           >
//             <Trash2 size={16} />
//             Delete
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default TaskCard;


import type { Task } from "../types/task";
import {
  CalendarDays,
  Pencil,
  Trash2,
  AlertCircle,
  CheckCircle2,
  Clock3,
  LoaderCircle,
  Flag,
} from "lucide-react";

interface Props {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}

function TaskCard({ task, onEdit, onDelete }: Props) {
  const getStatusStyle = () => {
    switch (task.status) {
      case "Completed":
        return {
          className:
            "bg-emerald-50 text-emerald-700 border border-emerald-200",
          icon: <CheckCircle2 size={14} />,
        };

      case "In Progress":
        return {
          className:
            "bg-blue-50 text-blue-700 border border-blue-200",
          icon: <LoaderCircle size={14} />,
        };

      default:
        return {
          className:
            "bg-amber-50 text-amber-700 border border-amber-200",
          icon: <Clock3 size={14} />,
        };
    }
  };

  const getPriorityStyle = () => {
    switch (task.priority) {
      case "High":
        return "bg-rose-50 text-rose-700 border border-rose-200";

      case "Medium":
        return "bg-orange-50 text-orange-700 border border-orange-200";

      default:
        return "bg-slate-100 text-slate-700 border border-slate-200";
    }
  };

  const getDueDateInfo = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const due = new Date(task.dueDate);
    due.setHours(0, 0, 0, 0);

    const diff = Math.ceil(
      (due.getTime() - today.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    if (diff < 0) {
      return {
        text: `Overdue (${Math.abs(diff)} day${
          Math.abs(diff) > 1 ? "s" : ""
        })`,
        className:
          "bg-rose-50 text-rose-700 border border-rose-200",
      };
    }

    if (diff === 0) {
      return {
        text: "Due Today",
        className:
          "bg-amber-50 text-amber-700 border border-amber-200",
      };
    }

    if (diff === 1) {
      return {
        text: "Due Tomorrow",
        className:
          "bg-orange-50 text-orange-700 border border-orange-200",
      };
    }

    return {
      text: `${diff} Days Left`,
      className:
        "bg-emerald-50 text-emerald-700 border border-emerald-200",
    };
  };

  const status = getStatusStyle();
  const dueDate = getDueDateInfo();

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Header */}

      <div className="flex items-start justify-between gap-3">

        <div className="flex-1">

          <h2 className="text-xl font-bold text-slate-800">
            {task.title}
          </h2>

        </div>

        <span
          className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
        >
          {status.icon}
          {task.status}
        </span>

      </div>

      {/* Description */}

      <p className="mt-4 text-sm leading-6 text-slate-600 line-clamp-3">
        {task.description || "No description provided."}
      </p>

      {/* Badges */}

      <div className="mt-6 flex flex-wrap gap-3">

        <span
          className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${getPriorityStyle()}`}
        >
          <Flag size={13} />
          {task.priority} Priority
        </span>

        <span
          className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${dueDate.className}`}
        >
          <CalendarDays size={13} />
          {dueDate.text}
        </span>

      </div>

      {/* Due Date */}

      <p className="mt-3 text-sm text-slate-500">
        Due:{" "}
        {new Date(task.dueDate).toLocaleDateString()}
      </p>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">

        <div className="flex items-center gap-2 text-xs text-slate-500">

          <AlertCircle size={14} />

          Task #{task.id}

        </div>

        <div className="flex gap-2">

          <button
            onClick={onEdit}
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
          >
            <Pencil size={16} />
            Edit
          </button>

          <button
            onClick={onDelete}
            className="flex items-center gap-2 rounded-xl border border-rose-200 px-4 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-50"
          >
            <Trash2 size={16} />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskCard;
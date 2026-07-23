// import { useEffect, useState } from "react";
// import api from "../services/api";
// import type { Task } from "../types/task";

// import AddTaskForm from "../components/AddTaskForm";
// import EditTaskForm from "../components/EditTaskForm";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import DashboardStats from "../components/DashboardStats";
// import FilterBar from "../components/FilterBar";
// import TaskCard from "../components/TaskCard";
// import { Plus } from "lucide-react";
// import DeleteConfirmModal from "../components/DeleteConfirmModal";
// import DashboardCharts from "../components/DashboardCharts";

// import { toast } from "react-toastify";

// function Dashboard() {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("");
//   const [priorityFilter, setPriorityFilter] = useState("");
//   const [sort, setSort] = useState("");
//   const [editingTask, setEditingTask] = useState<Task | null>(null);
//   const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);
//   const [showAddModal, setShowAddModal] = useState(false);

//   const loadTasks = async () => {
//     try {
//       const res = await api.get("/tasks", {
//         params: {
//           search,
//           status: statusFilter,
//           priority: priorityFilter,
//           sort,
//         },
//       });

//       setTasks(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     loadTasks();
//   }, [search, statusFilter, priorityFilter, sort]);

//   const total = tasks.length;

//   const completed = tasks.filter(
//     (task) => task.status === "Completed"
//   ).length;

//   const pending = tasks.filter(
//     (task) => task.status === "Pending"
//   ).length;

//   return (
//  <div className="bg-slate-100 min-h-screen">

//     <Sidebar
//       onLogout={() => {
//         localStorage.removeItem("token");
//         window.location.href = "/";
//       }}
//     />

//     <main className="ml-64 min-h-screen overflow-y-auto">

//       <div className="p-8 space-y-8">

//       <Sidebar
//         onLogout={() => {
//           localStorage.removeItem("token");
//           window.location.href = "/";
//         }}
//       />

//       <main className="flex-1 p-8">

//         <Navbar />

//         <section id="dashboard">
//         <DashboardStats
//           total={total}
//           pending={pending}
//           completed={completed}
//         />

//         </section>
//         <DashboardCharts
//   total={total}
//   completed={completed}
//   pending={pending}
// />

//         <FilterBar
//           search={search}
//           setSearch={setSearch}
//           statusFilter={statusFilter}
//           setStatusFilter={setStatusFilter}
//           priorityFilter={priorityFilter}
//           setPriorityFilter={setPriorityFilter}
//           sort={sort}
//           setSort={setSort}
//         />

//         <div className="flex items-center justify-between">
//   <div>
//     <h2 className="text-2xl font-bold tracking-tight text-slate-800">
//       Tasks
//     </h2>

//     <p className="text-sm text-slate-500">
//       {tasks.length} task{tasks.length !== 1 ? "s" : ""} found
//     </p>
//   </div>
// </div>

//         {/* <section id="add-task">
//         <AddTaskForm onTaskAdded={loadTasks} />
//         </section> */}
//         <div className="flex justify-end">
//   <button
//     onClick={() => setShowAddModal(true)}
//     className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
//   >
//     <Plus size={18} />
//     New Task
//   </button>
// </div>

// {showAddModal && (
//   <AddTaskForm
//     onTaskAdded={() => {
//       setShowAddModal(false);
//       loadTasks();
//     }}
//     onClose={() => setShowAddModal(false)}
//   />
// )}

//         {editingTask && (
//           <EditTaskForm
//   task={editingTask}
//   onUpdated={() => {
//     setEditingTask(null);
//     loadTasks();
//   }}
//   onClose={() => setEditingTask(null)}
// />

//         )}
//         <DeleteConfirmModal
//   open={deleteTaskId !== null}
//   onClose={() => setDeleteTaskId(null)}
//   onConfirm={async () => {
//     if (deleteTaskId === null) return;

//     try {
//       await api.delete(`/tasks/${deleteTaskId}`);

//       toast.success("Task deleted successfully");

//       loadTasks();
//     } catch (error) {
//       console.error(error);

//       toast.error("Failed to delete task");
//     }

//     setDeleteTaskId(null);
//   }}
// />

//         <section id="tasks">
//         {tasks.length === 0 ? (
//           <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
//             <h2 className="text-2xl font-semibold text-gray-600">
//               📋 No Tasks Found
//             </h2>

//             <p className="text-gray-500 mt-2">
//               Create your first task to get started.
//             </p>
//           </div>
//         ) : (
//           <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
//             {tasks.map((task) => (
//               <TaskCard
//                 key={task.id}
//                 task={task}
//                 onEdit={() => setEditingTask(task)}
                
//                 // onDelete={async () => {
//                 //   if (window.confirm("Delete this task?")) {
//                 //     try {
//                 //       await api.delete(`/tasks/${task.id}`);

//                 //       toast.success("Task deleted successfully");

//                 //       loadTasks();
//                 //     } catch (error) {
//                 //       console.error(error);

//                 //       toast.error("Failed to delete task");
//                 //     }
//                 //   }
//                 // }}
//                 onDelete={() => setDeleteTaskId(task.id)}
//               />
//             ))}
//           </div>
//         )}
//         </section>

//       </main>

//     </div>
//     </main>
//     </div>
//   );
// }

// export default Dashboard;


// import { useEffect, useState } from "react";
// import api from "../services/api";
// import type { Task } from "../types/task";

// import AddTaskForm from "../components/AddTaskForm";
// import EditTaskForm from "../components/EditTaskForm";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import DashboardStats from "../components/DashboardStats";
// import FilterBar from "../components/FilterBar";
// import TaskCard from "../components/TaskCard";
// import { Plus, ClipboardList } from "lucide-react";
// import DeleteConfirmModal from "../components/DeleteConfirmModal";
// import DashboardCharts from "../components/DashboardCharts";
// import { exportTasksToPDF } from "../utils/exportPDF";
// import { exportTasksToCSV } from "../utils/exportCSV";
// import { useNotifications } from "../context/NotificationContext";

// import { toast } from "react-toastify";

// function Dashboard() {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("");
//   const [priorityFilter, setPriorityFilter] = useState("");
//   const [sort, setSort] = useState("");
//   const [editingTask, setEditingTask] = useState<Task | null>(null);
//   const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const { addNotification } = useNotifications();

//   const loadTasks = async () => {
//     try {
//       const res = await api.get("/tasks", {
//         params: {
//           search,
//           status: statusFilter,
//           priority: priorityFilter,
//           sort,
//         },
//       });

//       setTasks(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     loadTasks();
//   }, [search, statusFilter, priorityFilter, sort]);

//   const total = tasks.length;

//   const completed = tasks.filter(
//     (task) => task.status === "Completed"
//   ).length;

//   const pending = tasks.filter(
//     (task) => task.status === "Pending"
//   ).length;

//   return (
//     <div className="bg-slate-100 min-h-screen">
//       <Sidebar
//         onLogout={() => {
//           localStorage.removeItem("token");
//           window.location.href = "/";
//         }}
//       />

//       <main className="ml-64 min-h-screen">
//         <Navbar />
//         <div className="flex justify-end gap-3">

//   <button
//     onClick={() => {
//   exportTasksToPDF(tasks);
//   toast.success("PDF exported successfully");
// }}
//     className="rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700"
//   >
//     Export PDF
//   </button>
//   <button
//   onClick={() => {
//   exportTasksToCSV(tasks);
//   toast.success("CSV exported successfully");
// }}
//   className="rounded-xl bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700 transition"
// >
//   Export CSV
// </button>

// </div>

//         <div className="p-8 space-y-8">
//           <section id="dashboard">
//             <DashboardStats
//               total={total}
//               pending={pending}
//               completed={completed}
//             />
//           </section>

//           <DashboardCharts
//             total={total}
//             completed={completed}
//             pending={pending}
//           />

//           <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5">
//             <FilterBar
//               search={search}
//               setSearch={setSearch}
//               statusFilter={statusFilter}
//               setStatusFilter={setStatusFilter}
//               priorityFilter={priorityFilter}
//               setPriorityFilter={setPriorityFilter}
//               sort={sort}
//               setSort={setSort}
//             />
//           </div>

//           <section id="tasks" className="space-y-5">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-2xl font-bold tracking-tight text-slate-800">
//                   Tasks
//                 </h2>
//                 <p className="text-sm text-slate-500">
//                   {tasks.length} task{tasks.length !== 1 ? "s" : ""} found
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowAddModal(true)}
//                 className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-indigo-700 active:bg-indigo-800"
//               >
//                 <Plus size={16} strokeWidth={2.5} />
//                 New Task
//               </button>
//             </div>

//             {tasks.length === 0 ? (
//               <div className="bg-white rounded-xl border border-dashed border-slate-300 py-16 text-center">
//                 <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
//                   <ClipboardList size={22} />
//                 </div>
//                 <h3 className="text-base font-semibold text-slate-700">
//                   No tasks found
//                 </h3>
//                 <p className="text-sm text-slate-500 mt-1">
//                   Create your first task to get started.
//                 </p>
//               </div>
//             ) : (
//               <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
//                 {tasks.map((task) => (
//                   <TaskCard
//                     key={task.id}
//                     task={task}
//                     onEdit={() => setEditingTask(task)}
//                     onDelete={() => setDeleteTaskId(task.id)}
//                   />
//                 ))}
//               </div>
//             )}
//           </section>
//         </div>
//       </main>

//       {showAddModal && (
//         <AddTaskForm
//           onTaskAdded={() => {
//             setShowAddModal(false);
//             loadTasks();
//           }}
//           onClose={() => setShowAddModal(false)}
//         />
//       )}

//       {editingTask && (
//         <EditTaskForm
//           task={editingTask}
//           onUpdated={() => {
//             setEditingTask(null);
//             loadTasks();
//           }}
//           onClose={() => setEditingTask(null)}
//         />
//       )}

//       <DeleteConfirmModal
//         open={deleteTaskId !== null}
//         onClose={() => setDeleteTaskId(null)}
//         onConfirm={async () => {
//           if (deleteTaskId === null) return;

//           try {
//             const deletedTask = tasks.find(
//   (task) => task.id === deleteTaskId
// );

// await api.delete(`/tasks/${deleteTaskId}`);

// addNotification(
//   `Task "${deletedTask?.title ?? "Task"}" deleted successfully.`,
//   "error"
// );

// toast.success("Task deleted successfully");

// loadTasks();
//           } catch (error) {
//             console.error(error);

//             toast.error("Failed to delete task");
//           }

//           setDeleteTaskId(null);
//         }}
//       />
//     </div>
//   );
// }

// export default Dashboard;

import { useEffect, useState } from "react";
import api from "../services/api";
import type { Task } from "../types/task";

import AddTaskForm from "../components/AddTaskForm";
import EditTaskForm from "../components/EditTaskForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardStats from "../components/DashboardStats";
import FilterBar from "../components/FilterBar";
import TaskCard from "../components/TaskCard";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import DashboardCharts from "../components/DashboardCharts";

import {
  Plus,
  ClipboardList,
  LoaderCircle,
  FileText,
  FileSpreadsheet,
} from "lucide-react";

import { exportTasksToPDF } from "../utils/exportPDF";
import { exportTasksToCSV } from "../utils/exportCSV";

import { useNotifications } from "../context/NotificationContext";
import { toast } from "react-toastify";

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [sort, setSort] = useState("newest");

  const [loading, setLoading] = useState(true);
  const [exportingPDF, setExportingPDF] = useState(false);
  const [exportingCSV, setExportingCSV] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const { addNotification } = useNotifications();

  const loadTasks = async () => {
    try {
      setLoading(true);

      const response = await api.get("/tasks", {
        params: {
          search,
          status: statusFilter,
          priority: priorityFilter,
          sort,
        },
      });

      setTasks(response.data);
    } catch (error) {
      console.error("LOAD TASKS ERROR:", error);

      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [search, statusFilter, priorityFilter, sort]);

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const overdue = tasks.filter((task) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);

    return task.status !== "Completed" && dueDate < today;
  }).length;

  const handleExportPDF = async () => {
    if (tasks.length === 0) {
      toast.info("There are no tasks to export");
      return;
    }

    try {
      setExportingPDF(true);

      await Promise.resolve(exportTasksToPDF(tasks));

      addNotification(
        "PDF report exported successfully.",
        "info"
      );

      toast.success("PDF exported successfully");
    } catch (error) {
      console.error("PDF EXPORT ERROR:", error);

      toast.error("Failed to export PDF");
    } finally {
      setExportingPDF(false);
    }
  };

  const handleExportCSV = async () => {
    if (tasks.length === 0) {
      toast.info("There are no tasks to export");
      return;
    }

    try {
      setExportingCSV(true);

      await Promise.resolve(exportTasksToCSV(tasks));

      addNotification(
        "CSV report exported successfully.",
        "info"
      );

      toast.success("CSV exported successfully");
    } catch (error) {
      console.error("CSV EXPORT ERROR:", error);

      toast.error("Failed to export CSV");
    } finally {
      setExportingCSV(false);
    }
  };

  const handleDeleteTask = async () => {
    if (deleteTaskId === null || deleting) {
      return;
    }

    const deletedTask = tasks.find(
      (task) => task.id === deleteTaskId
    );

    try {
      setDeleting(true);

      await api.delete(`/tasks/${deleteTaskId}`);

      addNotification(
        `Task "${deletedTask?.title ?? "Task"}" deleted successfully.`,
        "error"
      );

      toast.success("Task deleted successfully");

      setDeleteTaskId(null);

      await loadTasks();
    } catch (error) {
      console.error("DELETE TASK ERROR:", error);

      toast.error("Failed to delete task");
    } finally {
      setDeleting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar onLogout={handleLogout} />

      <main className="min-h-screen lg:ml-64">
        <Navbar />

        <div className="space-y-8 p-4 sm:p-6 lg:p-8">
          <section id="dashboard">
            <DashboardStats
              total={total}
              pending={pending}
              inProgress={inProgress}
              completed={completed}
              overdue={overdue}
            />
          </section>

          <DashboardCharts
            total={total}
            pending={pending}
            inProgress={inProgress}
            completed={completed}
            overdue={overdue}
          />

          <div className="flex flex-col justify-end gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleExportPDF}
              disabled={
                exportingPDF ||
                exportingCSV ||
                loading ||
                tasks.length === 0
              }
              className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {exportingPDF ? (
                <LoaderCircle
                  size={18}
                  className="animate-spin"
                />
              ) : (
                <FileText size={18} />
              )}

              {exportingPDF ? "Exporting PDF..." : "Export PDF"}
            </button>

            <button
              type="button"
              onClick={handleExportCSV}
              disabled={
                exportingCSV ||
                exportingPDF ||
                loading ||
                tasks.length === 0
              }
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {exportingCSV ? (
                <LoaderCircle
                  size={18}
                  className="animate-spin"
                />
              ) : (
                <FileSpreadsheet size={18} />
              )}

              {exportingCSV ? "Exporting CSV..." : "Export CSV"}
            </button>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <FilterBar
              search={search}
              setSearch={setSearch}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              priorityFilter={priorityFilter}
              setPriorityFilter={setPriorityFilter}
              sort={sort}
              setSort={setSort}
            />
          </div>

          <section id="tasks" className="space-y-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                  Tasks
                </h2>

                <p className="text-sm text-slate-500">
                  {loading
                    ? "Loading tasks..."
                    : `${tasks.length} task${
                        tasks.length !== 1 ? "s" : ""
                      } found`}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowAddModal(true)}
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Plus size={16} strokeWidth={2.5} />
                New Task
              </button>
            </div>

            {loading ? (
              <div className="rounded-xl border border-slate-200 bg-white py-20 shadow-sm">
                <div className="flex flex-col items-center justify-center">
                  <LoaderCircle
                    size={42}
                    className="animate-spin text-indigo-600"
                  />

                  <p className="mt-4 text-sm font-medium text-slate-600">
                    Loading tasks...
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Please wait while your task list is being loaded.
                  </p>
                </div>
              </div>
            ) : tasks.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                  <ClipboardList size={22} />
                </div>

                <h3 className="text-base font-semibold text-slate-700">
                  No tasks found
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {search || statusFilter || priorityFilter
                    ? "Try changing or clearing your search filters."
                    : "Create your first task to get started."}
                </p>
              </div>
            ) : (
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={() => setEditingTask(task)}
                    onDelete={() => setDeleteTaskId(task.id)}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      {showAddModal && (
        <AddTaskForm
          onTaskAdded={async () => {
            setShowAddModal(false);
            await loadTasks();
          }}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {editingTask && (
        <EditTaskForm
          task={editingTask}
          onUpdated={async () => {
            setEditingTask(null);
            await loadTasks();
          }}
          onClose={() => setEditingTask(null)}
        />
      )}

      <DeleteConfirmModal
        open={deleteTaskId !== null}
        onClose={() => {
          if (!deleting) {
            setDeleteTaskId(null);
          }
        }}
        onConfirm={handleDeleteTask}
      />
    </div>
  );
}

export default Dashboard;
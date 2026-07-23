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
import { Plus, ClipboardList } from "lucide-react";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import DashboardCharts from "../components/DashboardCharts";

import { toast } from "react-toastify";

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [sort, setSort] = useState("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const loadTasks = async () => {
    try {
      const res = await api.get("/tasks", {
        params: {
          search,
          status: statusFilter,
          priority: priorityFilter,
          sort,
        },
      });

      setTasks(res.data);
    } catch (error) {
      console.error(error);
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

  return (
    <div className="bg-slate-100 min-h-screen">
      <Sidebar
        onLogout={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      />

      <main className="ml-64 min-h-screen">
        <Navbar />

        <div className="p-8 space-y-8">
          <section id="dashboard">
            <DashboardStats
              total={total}
              pending={pending}
              completed={completed}
            />
          </section>

          <DashboardCharts
            total={total}
            completed={completed}
            pending={pending}
          />

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5">
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
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                  Tasks
                </h2>
                <p className="text-sm text-slate-500">
                  {tasks.length} task{tasks.length !== 1 ? "s" : ""} found
                </p>
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-indigo-700 active:bg-indigo-800"
              >
                <Plus size={16} strokeWidth={2.5} />
                New Task
              </button>
            </div>

            {tasks.length === 0 ? (
              <div className="bg-white rounded-xl border border-dashed border-slate-300 py-16 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                  <ClipboardList size={22} />
                </div>
                <h3 className="text-base font-semibold text-slate-700">
                  No tasks found
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Create your first task to get started.
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
          onTaskAdded={() => {
            setShowAddModal(false);
            loadTasks();
          }}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {editingTask && (
        <EditTaskForm
          task={editingTask}
          onUpdated={() => {
            setEditingTask(null);
            loadTasks();
          }}
          onClose={() => setEditingTask(null)}
        />
      )}

      <DeleteConfirmModal
        open={deleteTaskId !== null}
        onClose={() => setDeleteTaskId(null)}
        onConfirm={async () => {
          if (deleteTaskId === null) return;

          try {
            await api.delete(`/tasks/${deleteTaskId}`);

            toast.success("Task deleted successfully");

            loadTasks();
          } catch (error) {
            console.error(error);

            toast.error("Failed to delete task");
          }

          setDeleteTaskId(null);
        }}
      />
    </div>
  );
}

export default Dashboard;
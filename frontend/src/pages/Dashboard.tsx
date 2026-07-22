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

import { toast } from "react-toastify";

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [sort, setSort] = useState("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);

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

    <main className="ml-64 min-h-screen overflow-y-auto">

      <div className="p-8 space-y-8">

      <Sidebar
        onLogout={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      />

      <main className="flex-1 p-8">

        <Navbar />

        <section id="dashboard">
        <DashboardStats
          total={total}
          pending={pending}
          completed={completed}
        />
        </section>

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

        <section id="add-task">
        <AddTaskForm onTaskAdded={loadTasks} />
        </section>

        {editingTask && (
          <EditTaskForm
            task={editingTask}
            onUpdated={() => {
              setEditingTask(null);
              loadTasks();
            }}
          />
        )}

        <section id="tasks">
        {tasks.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-600">
              📋 No Tasks Found
            </h2>

            <p className="text-gray-500 mt-2">
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
                onDelete={async () => {
                  if (window.confirm("Delete this task?")) {
                    try {
                      await api.delete(`/tasks/${task.id}`);

                      toast.success("Task deleted successfully");

                      loadTasks();
                    } catch (error) {
                      console.error(error);

                      toast.error("Failed to delete task");
                    }
                  }
                }}
              />
            ))}
          </div>
        )}
        </section>

      </main>

    </div>
    </main>
    </div>
  );
}

export default Dashboard;
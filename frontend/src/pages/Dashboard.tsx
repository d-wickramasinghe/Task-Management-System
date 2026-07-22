import { useEffect, useState } from "react";
import api from "../services/api";
import type { Task } from "../types/task";
import AddTaskForm from "../components/AddTaskForm";
import EditTaskForm from "../components/EditTaskForm";
import Navbar from "../components/Navbar";
import DashboardStats from "../components/DashboardStats";
import FilterBar from "../components/FilterBar";
import TaskCard from "../components/TaskCard";

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
    <div className="min-h-screen bg-gray-100 p-8">
        <Navbar
        onLogout={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
        }}
        />

      <h1>Task Dashboard</h1>

        <DashboardStats
        total={total}
        pending={pending}
        completed={completed}
        />

      <br />

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

      {/* <input
        type="text"
        placeholder="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
>
  <option value="">All Status</option>
  <option value="Pending">Pending</option>
  <option value="In Progress">In Progress</option>
  <option value="Completed">Completed</option>
</select>

<select
  value={priorityFilter}
  onChange={(e) => setPriorityFilter(e.target.value)}
>
  <option value="">All Priority</option>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select>

<select
  value={sort}
  onChange={(e) => setSort(e.target.value)}
>
  <option value="">Newest First</option>
  <option value="dueDate">Due Date (Ascending)</option>
</select> */}

      <br />
      <br />



      <AddTaskForm onTaskAdded={loadTasks} />
      {editingTask && (
    <EditTaskForm
        task={editingTask}
        onUpdated={() => {
        setEditingTask(null);
        loadTasks();
        }}
    />
    )}

      <hr />

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  {tasks.map((task) => (
    <TaskCard
      key={task.id}
      task={task}
      onEdit={() => setEditingTask(task)}
      onDelete={async () => {
        if (window.confirm("Delete this task?")) {
          await api.delete(`/tasks/${task.id}`);
          loadTasks();
        }
      }}
    />
  ))}
</div>
      )}
    </div>
  );
}

export default Dashboard;
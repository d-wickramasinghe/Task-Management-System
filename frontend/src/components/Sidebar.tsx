import {
  LayoutDashboard,
  ListTodo,
  PlusCircle,
  LogOut,
} from "lucide-react";
import { useState } from "react";

interface Props {
  onLogout: () => void;
}

function Sidebar({ onLogout }: Props) {
  const [active, setActive] = useState("dashboard");

  const navigate = (id: string) => {
    setActive(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const itemClass = (id: string) =>
    `w-full flex items-center gap-3 rounded-xl px-4 py-3 transition ${
      active === id
        ? "bg-blue-600 text-white shadow-lg"
        : "hover:bg-slate-800 text-slate-200"
    }`;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-2xl flex flex-col">

      {/* Logo */}
      <div className="border-b border-slate-700 px-6 py-8">
        <h1 className="text-3xl font-bold text-blue-400">
          TaskFlow
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          Task Management System
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 mt-8 space-y-2">

        <button
          onClick={() => navigate("dashboard")}
          className={itemClass("dashboard")}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button
          onClick={() => navigate("tasks")}
          className={itemClass("tasks")}
        >
          <ListTodo size={20} />
          Tasks
        </button>

        <button
          onClick={() => navigate("add-task")}
          className={itemClass("add-task")}
        >
          <PlusCircle size={20} />
          Add Task
        </button>

      </nav>

      {/* Footer */}
      <div className="border-t border-slate-700 p-5">

        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-500 py-3 hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;
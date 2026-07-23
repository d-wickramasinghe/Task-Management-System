import { useState } from "react";
import { Bell, CheckCheck } from "lucide-react";
import { useNotifications } from "../context/NotificationContext";

function NotificationBell() {
  const [open, setOpen] = useState(false);

  const {
    notifications,
    markAllRead,
  } = useNotifications();

  const unreadCount = notifications.filter(
    (n) => !n.read
  ).length;

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="relative rounded-xl border border-slate-200 bg-white p-3 shadow-sm hover:bg-slate-50"
      >
        <Bell size={20} />

        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-96 rounded-2xl border border-slate-200 bg-white shadow-2xl z-50">

          {/* Header */}

          <div className="flex items-center justify-between border-b border-slate-200 p-4">

            <h2 className="font-semibold text-slate-800">
              Notifications
            </h2>

            <button
              onClick={markAllRead}
              className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700"
            >
              <CheckCheck size={16} />
              Mark all read
            </button>

          </div>

          {/* Body */}

          <div className="max-h-96 overflow-y-auto">

            {notifications.length === 0 ? (

              <div className="p-8 text-center text-slate-500">
                No notifications yet.
              </div>

            ) : (

              notifications.map((notification) => (

                <div
                  key={notification.id}
                  className={`border-b border-slate-100 p-4 transition hover:bg-slate-50 ${
                    !notification.read
                      ? "bg-indigo-50"
                      : ""
                  }`}
                >

                  <p className="text-sm font-medium text-slate-700">
                    {notification.message}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {new Date(
                      notification.createdAt
                    ).toLocaleString()}
                  </p>

                </div>

              ))

            )}

          </div>

        </div>
      )}

    </div>
  );
}

export default NotificationBell;
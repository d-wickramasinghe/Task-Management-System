import {
  createContext,
  useContext,
  useState,
} from "react";

import type { ReactNode } from "react";

import type { Notification } from "../types/notification";

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (
    message: string,
    type: Notification["type"]
  ) => void;
  markAllRead: () => void;
}

const NotificationContext =
  createContext<NotificationContextType | null>(null);

export function NotificationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (
    message: string,
    type: Notification["type"]
  ) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
      read: false,
      createdAt: new Date().toISOString(),
    };

    setNotifications((prev) => [
      newNotification,
      ...prev,
    ]);
  };

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({
        ...n,
        read: true,
      }))
    );
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAllRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotifications must be used inside NotificationProvider"
    );
  }

  return context;
}
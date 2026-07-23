export interface Notification {
  id: number;
  message: string;
  type: "success" | "warning" | "error" | "info";
  read: boolean;
  createdAt: string;
}
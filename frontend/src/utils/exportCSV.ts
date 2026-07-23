import type { Task } from "../types/task";

export function exportTasksToCSV(tasks: Task[]) {
  const headers = [
    "Title",
    "Description",
    "Priority",
    "Status",
    "Due Date",
  ];

  const rows = tasks.map((task) => [
    task.title,
    task.description,
    task.priority,
    task.status,
    new Date(task.dueDate).toLocaleDateString(),
  ]);

  const csvContent = [
    headers,
    ...rows,
  ]
    .map((row) =>
      row
        .map((cell) => `"${cell ?? ""}"`)
        .join(",")
    )
    .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "Task_Report.csv";

  link.click();

  window.URL.revokeObjectURL(url);
}
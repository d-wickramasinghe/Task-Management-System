import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { Task } from "../types/task";

export function exportTasksToPDF(tasks: Task[]) {
  const doc = new jsPDF();

  // Header
  doc.setFontSize(22);
  doc.setTextColor(79, 70, 229);
  doc.text("TaskFlow", 14, 18);

  doc.setFontSize(11);
  doc.setTextColor(100);

  doc.text(
    `Generated: ${new Date().toLocaleString()}`,
    14,
    26
  );

  doc.setDrawColor(220);
  doc.line(14, 30, 196, 30);

  // Title
  doc.setFontSize(16);
  doc.setTextColor(30);
  doc.text("Task Report", 14, 40);

  autoTable(doc, {
    startY: 48,

    head: [
      [
        "Title",
        "Priority",
        "Status",
        "Due Date",
      ],
    ],

    body: tasks.map((task) => [
      task.title,
      task.priority,
      task.status,
      new Date(task.dueDate).toLocaleDateString(),
    ]),

    styles: {
      fontSize: 10,
      cellPadding: 4,
    },

    headStyles: {
      fillColor: [79, 70, 229],
      textColor: 255,
      fontStyle: "bold",
    },

    alternateRowStyles: {
      fillColor: [248, 250, 252],
    },

    theme: "striped",
  });

  doc.save("Task_Report.pdf");
}
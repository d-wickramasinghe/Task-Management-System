# Task Management System

A full-stack task management web application built for the Koncepthive Full Stack Web Developer Internship Technical Assessment.

The application allows authenticated users to create, view, update, delete, search, filter, sort, and export tasks through a responsive dashboard.

---

## Live Demo

## Live Demo

Deployment is currently in progress. The application can be run locally by following the setup instructions below.

> Deployment links will be added after deployment.

---

## Features

### Authentication

- Secure user login
- JWT-based authentication
- Protected dashboard and task routes
- Automatic token attachment using Axios
- Logout functionality

### Task Management

- Create new tasks
- View all tasks
- Edit task details
- Delete tasks with confirmation
- Track task status
- Set task priority
- Assign due dates

### Search, Filter and Sort

- Search tasks by title or description
- Filter tasks by status
- Filter tasks by priority
- Sort tasks by:
  - Newest created
  - Oldest created
  - Due date

### Dashboard

- Total task count
- Pending task count
- In-progress task count
- Completed task count
- Overdue task count
- Task status charts
- Task summary visualization

### Exporting

- Export task reports as PDF
- Export task reports as CSV

### User Experience

- Responsive dashboard design
- Loading indicators
- Create and update progress states
- Toast notifications
- In-app notification panel
- Empty-state messages
- Form validation
- Confirmation modal before deleting tasks
- ESC key and backdrop modal closing
- Duplicate submission prevention

---

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router
- React Toastify
- Lucide React
- Recharts
- jsPDF
- Papa Parse / CSV utilities

### Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JSON Web Token
- bcrypt
- CORS
- dotenv

### Development Tools

- Git
- GitHub
- Postman
- Visual Studio Code
- Prisma Studio

---

## Project Structure

```text
task-management-system/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTaskForm.tsx
│   │   │   ├── DashboardCharts.tsx
│   │   │   ├── DashboardStats.tsx
│   │   │   ├── DeleteConfirmModal.tsx
│   │   │   ├── EditTaskForm.tsx
│   │   │   ├── FilterBar.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── TaskCard.tsx
│   │   │
│   │   ├── context/
│   │   │   └── NotificationContext.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   └── Login.tsx
│   │   │
│   │   ├── services/
│   │   │   └── api.ts
│   │   │
│   │   ├── types/
│   │   │   └── task.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── exportCSV.ts
│   │   │   └── exportPDF.ts
│   │   │
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── .env.example
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   └── task.controller.ts
│   │   │
│   │   ├── middleware/
│   │   │   └── auth.middleware.ts
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   └── task.routes.ts
│   │   │
│   │   ├── utils/
│   │   └── server.ts
│   │
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
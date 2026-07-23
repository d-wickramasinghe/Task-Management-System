// import { Bell } from "lucide-react";

// function Navbar() {
//   return (
//     <header className="sticky top-0 z-10 mb-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-8 py-5 shadow-sm">

//       <div>
//         <h1 className="text-3xl font-bold tracking-tight text-slate-800">
//           Dashboard
//         </h1>

//         <p className="mt-1 text-sm text-slate-500">
//           Welcome back! Manage your daily tasks efficiently.
//         </p>
//       </div>

//       <div className="flex items-center gap-4">

//         <button className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">
//           <Bell size={20} className="text-slate-600" />
//         </button>

//         <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
//           A
//         </div>

//       </div>

//     </header>
//   );
// }

// export default Navbar;

import { Bell } from "lucide-react";

function Navbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-10 mb-8 flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Welcome back! Manage your daily tasks efficiently.
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden sm:block text-right">
          <p className="text-xs font-medium text-slate-400">Today</p>
          <p className="text-sm font-semibold text-slate-700">{today}</p>
        </div>

        <div className="h-8 w-px bg-slate-200 hidden sm:block" />

        <button className="relative rounded-lg border border-slate-200 p-2.5 text-slate-500 transition-colors duration-150 hover:bg-slate-50 hover:text-slate-700">
          <Bell size={18} />
          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
          A
        </div>
      </div>
    </header>
  );
}

export default Navbar;
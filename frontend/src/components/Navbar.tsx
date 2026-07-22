// interface Props {
//   onLogout: () => void;
// }

// function Navbar({ onLogout }: Props) {
//   return (
//     <header className="bg-white shadow-md rounded-xl p-5 flex justify-between items-center">
//       <div>
//         <h1 className="text-3xl font-bold text-blue-600">
//           Task Management
//         </h1>

//         <p className="text-gray-500">
//           Manage your daily tasks efficiently
//         </p>
//       </div>

//       <button
//         onClick={onLogout}
//         className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
//       >
//         Logout
//       </button>
//     </header>
//   );
// }

// export default Navbar;

function Navbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-40 bg-white rounded-2xl shadow-md px-8 py-5 flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back! Manage your tasks efficiently.
        </p>
      </div>

      <div className="flex items-center gap-6">

        <div className="text-right">
          <p className="text-sm text-gray-500">
            Today
          </p>

          <p className="font-semibold text-slate-700">
            {today}
          </p>
        </div>

        <button className="text-2xl hover:scale-110 transition">
          🔔
        </button>

        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow">
          A
        </div>

      </div>

    </header>
  );
}

export default Navbar;
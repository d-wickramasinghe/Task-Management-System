interface Props {
  onLogout: () => void;
}

function Navbar({ onLogout }: Props) {
  return (
    <header className="bg-white shadow-md rounded-xl p-5 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-blue-600">
          Task Management
        </h1>

        <p className="text-gray-500">
          Manage your daily tasks efficiently
        </p>
      </div>

      <button
        onClick={onLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
      >
        Logout
      </button>
    </header>
  );
}

export default Navbar;
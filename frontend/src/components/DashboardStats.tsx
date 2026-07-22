interface Props {
  total: number;
  completed: number;
  pending: number;
}

function DashboardStats({
  total,
  completed,
  pending,
}: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-5 mt-8">

      <div className="bg-blue-500 text-white rounded-xl p-6 shadow">
        <h3 className="text-lg">Total Tasks</h3>

        <p className="text-4xl font-bold">
          {total}
        </p>
      </div>

      <div className="bg-yellow-500 text-white rounded-xl p-6 shadow">
        <h3 className="text-lg">
          Pending
        </h3>

        <p className="text-4xl font-bold">
          {pending}
        </p>
      </div>

      <div className="bg-green-500 text-white rounded-xl p-6 shadow">
        <h3 className="text-lg">
          Completed
        </h3>

        <p className="text-4xl font-bold">
          {completed}
        </p>
      </div>

    </div>
  );
}

export default DashboardStats;
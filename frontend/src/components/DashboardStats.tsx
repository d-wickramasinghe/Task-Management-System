import {
  CheckCircle,
  Clock3,
  ClipboardList,
} from "lucide-react";

interface Props {
  total: number;
  pending: number;
  completed: number;
}

function DashboardStats({
  total,
  pending,
  completed,
}: Props) {
  const cards = [
    {
      title: "Total Tasks",
      value: total,
      icon: <ClipboardList size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Pending",
      value: pending,
      icon: <Clock3 size={28} />,
      color: "bg-yellow-500",
    },
    {
      title: "Completed",
      value: completed,
      icon: <CheckCircle size={28} />,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-gray-500">
              {card.title}
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {card.value}
            </h2>
          </div>

          <div
            className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white`}
          >
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;
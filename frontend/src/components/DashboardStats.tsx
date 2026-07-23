import {
  AlertTriangle,
  CheckCircle2,
  CircleDashed,
  ClipboardList,
  Clock3,
} from "lucide-react";

interface Props {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
  overdue: number;
}

function DashboardStats({
  total,
  pending,
  inProgress,
  completed,
  overdue,
}: Props) {
  const cards = [
    {
      title: "Total Tasks",
      value: total,
      icon: ClipboardList,
      iconWrapper: "bg-slate-100",
      iconColor: "text-slate-600",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      iconWrapper: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: "In Progress",
      value: inProgress,
      icon: CircleDashed,
      iconWrapper: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      title: "Completed",
      value: completed,
      icon: CheckCircle2,
      iconWrapper: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Overdue",
      value: overdue,
      icon: AlertTriangle,
      iconWrapper: "bg-rose-50",
      iconColor: "text-rose-600",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {card.title}
                </p>

                <p className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                  {card.value}
                </p>
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${card.iconWrapper}`}
              >
                <Icon
                  size={21}
                  strokeWidth={2}
                  className={card.iconColor}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardStats;
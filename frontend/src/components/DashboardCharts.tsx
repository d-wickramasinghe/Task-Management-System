// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
//   Legend,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
// } from "recharts";
// import { PieChart as PieChartIcon, BarChart3 } from "lucide-react";

// interface Props {
//   total: number;
//   completed: number;
//   pending: number;
// }

// const COLORS = {
//   completed: "#10B981",
//   pending: "#F59E0B",
//   total: "#4F46E5",
// };

// function CustomTooltip({ active, payload, label }: any) {
//   if (!active || !payload || !payload.length) return null;

//   return (
//     <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-lg">
//       {label && (
//         <p className="text-xs font-medium text-slate-500 mb-1">{label}</p>
//       )}
//       {payload.map((entry: any, index: number) => (
//         <div key={index} className="flex items-center gap-2 text-sm">
//           <span
//             className="h-2 w-2 rounded-full"
//             style={{ backgroundColor: entry.color || entry.payload?.fill }}
//           />
//           <span className="text-slate-600">{entry.name}:</span>
//           <span className="font-semibold text-slate-800">{entry.value}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// function DashboardCharts({ total, completed, pending }: Props) {
//   const pieData = [
//     { name: "Completed", value: completed },
//     { name: "Pending", value: pending },
//   ];

//   const barData = [
//     {
//       name: "Tasks",
//       Total: total,
//       Completed: completed,
//       Pending: pending,
//     },
//   ];

//   const hasData = total > 0;

//   return (
//     <div className="grid gap-6 lg:grid-cols-2">
//       {/* Pie Chart */}
//       <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//         <div className="flex items-center gap-2 mb-1">
//           <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600">
//             <PieChartIcon size={15} />
//           </div>
//           <h2 className="text-base font-semibold text-slate-800">
//             Task Status
//           </h2>
//         </div>
//         <p className="text-sm text-slate-500 mb-4 ml-10">
//           Breakdown of completed vs pending tasks
//         </p>

//         <div className="h-64">
//           {hasData ? (
//             <ResponsiveContainer>
//               <PieChart>
//                 <Pie
//                   data={pieData}
//                   dataKey="value"
//                   nameKey="name"
//                   innerRadius={55}
//                   outerRadius={85}
//                   paddingAngle={3}
//                   cornerRadius={4}
//                 >
//                   {pieData.map((entry, index) => (
//                     <Cell
//                       key={entry.name}
//                       fill={
//                         entry.name === "Completed"
//                           ? COLORS.completed
//                           : COLORS.pending
//                       }
//                       stroke="none"
//                     />
//                   ))}
//                 </Pie>
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend
//                   verticalAlign="bottom"
//                   height={32}
//                   iconType="circle"
//                   iconSize={8}
//                   formatter={(value) => (
//                     <span className="text-sm text-slate-600">{value}</span>
//                   )}
//                 />
//               </PieChart>
//             </ResponsiveContainer>
//           ) : (
//             <div className="flex h-full items-center justify-center text-sm text-slate-400">
//               No tasks yet — add one to see your breakdown.
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Bar Chart */}
//       <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//         <div className="flex items-center gap-2 mb-1">
//           <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600">
//             <BarChart3 size={15} />
//           </div>
//           <h2 className="text-base font-semibold text-slate-800">
//             Task Overview
//           </h2>
//         </div>
//         <p className="text-sm text-slate-500 mb-4 ml-10">
//           Total tasks compared by status
//         </p>

//         <div className="h-64">
//           <ResponsiveContainer>
//             <BarChart data={barData} barGap={8}>
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 vertical={false}
//                 stroke="#E2E8F0"
//               />
//               <XAxis
//                 dataKey="name"
//                 axisLine={false}
//                 tickLine={false}
//                 tick={{ fill: "#64748B", fontSize: 13 }}
//               />
//               <YAxis
//                 allowDecimals={false}
//                 axisLine={false}
//                 tickLine={false}
//                 tick={{ fill: "#64748B", fontSize: 13 }}
//               />
//               <Tooltip
//                 content={<CustomTooltip />}
//                 cursor={{ fill: "#F8FAFC" }}
//               />
//               <Legend
//                 verticalAlign="bottom"
//                 height={32}
//                 iconType="circle"
//                 iconSize={8}
//                 formatter={(value) => (
//                   <span className="text-sm text-slate-600">{value}</span>
//                 )}
//               />
//               <Bar
//                 dataKey="Total"
//                 fill={COLORS.total}
//                 radius={[6, 6, 0, 0]}
//                 maxBarSize={48}
//               />
//               <Bar
//                 dataKey="Completed"
//                 fill={COLORS.completed}
//                 radius={[6, 6, 0, 0]}
//                 maxBarSize={48}
//               />
//               <Bar
//                 dataKey="Pending"
//                 fill={COLORS.pending}
//                 radius={[6, 6, 0, 0]}
//                 maxBarSize={48}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardCharts;


import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { PieChart as PieChartIcon, BarChart3 } from "lucide-react";

interface Props {
  total: number;
  completed: number;
  pending: number;
  inProgress: number;
  overdue: number;
}

const COLORS = {
  total: "#4F46E5",
  pending: "#F59E0B",
  inProgress: "#3B82F6",
  completed: "#10B981",
  overdue: "#F43F5E",
};

interface TooltipEntry {
  name: string;
  value: number;
  color?: string;
  payload?: {
    fill?: string;
  };
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipEntry[];
  label?: string;
}

function CustomTooltip({
  active,
  payload,
  label,
}: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-lg">
      {label && (
        <p className="mb-1 text-xs font-medium text-slate-500">
          {label}
        </p>
      )}

      <div className="space-y-1">
        {payload.map((entry, index) => (
          <div
            key={`${entry.name}-${index}`}
            className="flex items-center gap-2 text-sm"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor:
                  entry.color ||
                  entry.payload?.fill ||
                  "#64748B",
              }}
            />

            <span className="text-slate-600">
              {entry.name}:
            </span>

            <span className="font-semibold text-slate-800">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardCharts({
  total,
  completed,
  pending,
  inProgress,
  overdue,
}: Props) {
  const pieData = [
    {
      name: "Pending",
      value: pending,
      color: COLORS.pending,
    },
    {
      name: "In Progress",
      value: inProgress,
      color: COLORS.inProgress,
    },
    {
      name: "Completed",
      value: completed,
      color: COLORS.completed,
    },
    {
      name: "Overdue",
      value: overdue,
      color: COLORS.overdue,
    },
  ];

  const barData = [
    {
      name: "Tasks",
      Total: total,
      Pending: pending,
      "In Progress": inProgress,
      Completed: completed,
      Overdue: overdue,
    },
  ];

  const hasData = total > 0;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Task Status Pie Chart */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <PieChartIcon size={15} />
          </div>

          <h2 className="text-base font-semibold text-slate-800">
            Task Status
          </h2>
        </div>

        <p className="mb-4 ml-10 text-sm text-slate-500">
          Breakdown of tasks by current status
        </p>

        <div className="h-64">
          {hasData ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={52}
                  outerRadius={82}
                  paddingAngle={3}
                  cornerRadius={4}
                >
                  {pieData.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={entry.color}
                      stroke="none"
                    />
                  ))}
                </Pie>

                <Tooltip content={<CustomTooltip />} />

                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => (
                    <span className="text-sm text-slate-600">
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate-400">
              No tasks yet — add one to see your breakdown.
            </div>
          )}
        </div>
      </div>

      {/* Task Overview Bar Chart */}

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <BarChart3 size={15} />
          </div>

          <h2 className="text-base font-semibold text-slate-800">
            Task Overview
          </h2>
        </div>

        <p className="mb-4 ml-10 text-sm text-slate-500">
          Total tasks compared across all task states
        </p>

        <div className="h-64">
          {hasData ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                barGap={6}
                margin={{
                  top: 10,
                  right: 5,
                  left: -20,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E2E8F0"
                />

                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#64748B",
                    fontSize: 13,
                  }}
                />

                <YAxis
                  allowDecimals={false}
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#64748B",
                    fontSize: 13,
                  }}
                />

                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "#F8FAFC" }}
                />

                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => (
                    <span className="text-sm text-slate-600">
                      {value}
                    </span>
                  )}
                />

                <Bar
                  dataKey="Total"
                  fill={COLORS.total}
                  radius={[6, 6, 0, 0]}
                  maxBarSize={42}
                />

                <Bar
                  dataKey="Pending"
                  fill={COLORS.pending}
                  radius={[6, 6, 0, 0]}
                  maxBarSize={42}
                />

                <Bar
                  dataKey="In Progress"
                  fill={COLORS.inProgress}
                  radius={[6, 6, 0, 0]}
                  maxBarSize={42}
                />

                <Bar
                  dataKey="Completed"
                  fill={COLORS.completed}
                  radius={[6, 6, 0, 0]}
                  maxBarSize={42}
                />

                <Bar
                  dataKey="Overdue"
                  fill={COLORS.overdue}
                  radius={[6, 6, 0, 0]}
                  maxBarSize={42}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate-400">
              No task data available for the overview.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardCharts;
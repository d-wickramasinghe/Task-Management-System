// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
// } from "recharts";

// interface Props {
//   total: number;
//   completed: number;
//   pending: number;
// }

// function DashboardCharts({
//   total,
//   completed,
//   pending,
// }: Props) {
//   const pieData = [
//     {
//       name: "Completed",
//       value: completed,
//     },
//     {
//       name: "Pending",
//       value: pending,
//     },
//   ];

//   const barData = [
//     {
//       name: "Tasks",
//       Total: total,
//       Completed: completed,
//       Pending: pending,
//     },
//   ];

//   const COLORS = [
//     "#10B981",
//     "#F59E0B",
//   ];

//   return (
//     <div className="grid gap-6 lg:grid-cols-2">

//       {/* Pie Chart */}

//       <div className="rounded-3xl bg-white p-6 shadow">

//         <h2 className="mb-6 text-xl font-bold text-slate-800">
//           Task Status
//         </h2>

//         <div className="h-72">

//           <ResponsiveContainer>

//             <PieChart>

//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 outerRadius={90}
//                 label
//               >
//                 {pieData.map((_, index) => (
//                   <Cell
//                     key={index}
//                     fill={COLORS[index]}
//                   />
//                 ))}
//               </Pie>

//               <Tooltip />

//             </PieChart>

//           </ResponsiveContainer>

//         </div>

//       </div>

//       {/* Bar Chart */}

//       <div className="rounded-3xl bg-white p-6 shadow">

//         <h2 className="mb-6 text-xl font-bold text-slate-800">
//           Task Overview
//         </h2>

//         <div className="h-72">

//           <ResponsiveContainer>

//             <BarChart data={barData}>

//               <CartesianGrid strokeDasharray="3 3" />

//               <XAxis dataKey="name" />

//               <YAxis />

//               <Tooltip />

//               <Bar
//                 dataKey="Total"
//                 fill="#4F46E5"
//               />

//               <Bar
//                 dataKey="Completed"
//                 fill="#10B981"
//               />

//               <Bar
//                 dataKey="Pending"
//                 fill="#F59E0B"
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
}

const COLORS = {
  completed: "#10B981",
  pending: "#F59E0B",
  total: "#4F46E5",
};

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-lg">
      {label && (
        <p className="text-xs font-medium text-slate-500 mb-1">{label}</p>
      )}
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: entry.color || entry.payload?.fill }}
          />
          <span className="text-slate-600">{entry.name}:</span>
          <span className="font-semibold text-slate-800">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

function DashboardCharts({ total, completed, pending }: Props) {
  const pieData = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
  ];

  const barData = [
    {
      name: "Tasks",
      Total: total,
      Completed: completed,
      Pending: pending,
    },
  ];

  const hasData = total > 0;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Pie Chart */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600">
            <PieChartIcon size={15} />
          </div>
          <h2 className="text-base font-semibold text-slate-800">
            Task Status
          </h2>
        </div>
        <p className="text-sm text-slate-500 mb-4 ml-10">
          Breakdown of completed vs pending tasks
        </p>

        <div className="h-64">
          {hasData ? (
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  cornerRadius={4}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={
                        entry.name === "Completed"
                          ? COLORS.completed
                          : COLORS.pending
                      }
                      stroke="none"
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="bottom"
                  height={32}
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => (
                    <span className="text-sm text-slate-600">{value}</span>
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

      {/* Bar Chart */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600">
            <BarChart3 size={15} />
          </div>
          <h2 className="text-base font-semibold text-slate-800">
            Task Overview
          </h2>
        </div>
        <p className="text-sm text-slate-500 mb-4 ml-10">
          Total tasks compared by status
        </p>

        <div className="h-64">
          <ResponsiveContainer>
            <BarChart data={barData} barGap={8}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E2E8F0"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 13 }}
              />
              <YAxis
                allowDecimals={false}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 13 }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#F8FAFC" }}
              />
              <Legend
                verticalAlign="bottom"
                height={32}
                iconType="circle"
                iconSize={8}
                formatter={(value) => (
                  <span className="text-sm text-slate-600">{value}</span>
                )}
              />
              <Bar
                dataKey="Total"
                fill={COLORS.total}
                radius={[6, 6, 0, 0]}
                maxBarSize={48}
              />
              <Bar
                dataKey="Completed"
                fill={COLORS.completed}
                radius={[6, 6, 0, 0]}
                maxBarSize={48}
              />
              <Bar
                dataKey="Pending"
                fill={COLORS.pending}
                radius={[6, 6, 0, 0]}
                maxBarSize={48}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashboardCharts;
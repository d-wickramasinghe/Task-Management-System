// import { Search } from "lucide-react";

// interface Props {
//   search: string;
//   setSearch: (value: string) => void;
//   statusFilter: string;
//   setStatusFilter: (value: string) => void;
//   priorityFilter: string;
//   setPriorityFilter: (value: string) => void;
//   sort: string;
//   setSort: (value: string) => void;
// }

// function FilterBar({
//   search,
//   setSearch,
//   statusFilter,
//   setStatusFilter,
//   priorityFilter,
//   setPriorityFilter,
//   sort,
//   setSort,
// }: Props) {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
//       <div className="grid gap-4 lg:grid-cols-4">

//         {/* Search */}
//         <div className="relative">
//           <Search
//             size={18}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//           />

//           <input
//             type="text"
//             placeholder="Search tasks..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//           />
//         </div>

//         {/* Status */}
//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           className="rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//         >
//           <option value="">All Status</option>
//           <option value="Pending">Pending</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Completed">Completed</option>
//         </select>

//         {/* Priority */}
//         <select
//           value={priorityFilter}
//           onChange={(e) => setPriorityFilter(e.target.value)}
//           className="rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//         >
//           <option value="">All Priority</option>
//           <option value="High">High</option>
//           <option value="Medium">Medium</option>
//           <option value="Low">Low</option>
//         </select>

//         {/* Sort */}
//         <select
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//           className="rounded-xl border border-slate-300 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
//         >
//         <option value="newest">Newest Created</option>
//         <option value="oldest">Oldest Created</option>
//           <option value="dueDate">Due Date</option>
//         </select>

//       </div>
//     </div>
//   );
// }

// export default FilterBar;

import { Search, SlidersHorizontal } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  priorityFilter: string;
  setPriorityFilter: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
}

function FilterBar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  sort,
  setSort,
}: Props) {
  const hasActiveFilters =
    search !== "" ||
    statusFilter !== "" ||
    priorityFilter !== "" ||
    sort !== "newest";

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("");
    setPriorityFilter("");
    setSort("newest");
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <SlidersHorizontal size={17} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Search and Filters
            </h3>

            <p className="text-xs text-slate-500">
              Find, filter and sort your tasks
            </p>
          </div>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="self-start text-sm font-medium text-indigo-600 transition hover:text-indigo-700 sm:self-auto"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="relative">
          <label
            htmlFor="task-search"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Search
          </label>

          <Search
            size={17}
            className="absolute bottom-3.5 left-3 text-slate-400"
          />

          <input
            id="task-search"
            type="text"
            placeholder="Search by task title"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className={`${inputClasses} pl-10`}
          />
        </div>

        <div>
          <label
            htmlFor="status-filter"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Status
          </label>

          <select
            id="status-filter"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className={inputClasses}
          >
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="priority-filter"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Priority
          </label>

          <select
            id="priority-filter"
            value={priorityFilter}
            onChange={(event) => setPriorityFilter(event.target.value)}
            className={inputClasses}
          >
            <option value="">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="sort-tasks"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Sort By
          </label>

          <select
            id="sort-tasks"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className={inputClasses}
          >
            <option value="newest">Newest Created</option>
            <option value="oldest">Oldest Created</option>
            <option value="dueDate">Due Date</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
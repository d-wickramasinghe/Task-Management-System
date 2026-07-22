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
  return (
    <div className="bg-white shadow rounded-xl p-5 mt-8">

      <div className="grid md:grid-cols-4 gap-4">

        <input
          className="border rounded-lg p-3"
          placeholder="Search..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="border rounded-lg p-3"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option value="">All Status</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <select
          className="border rounded-lg p-3"
          value={priorityFilter}
          onChange={(e) =>
            setPriorityFilter(e.target.value)
          }
        >
          <option value="">All Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          className="border rounded-lg p-3"
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="">
            Newest First
          </option>

          <option value="dueDate">
            Due Date
          </option>
        </select>

      </div>

    </div>
  );
}

export default FilterBar;
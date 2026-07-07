export default function BugInfoCard({ bug }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-6 text-2xl font-semibold text-white">
        Bug Information
      </h2>

      <div className="grid gap-8 md:grid-cols-2">

        <div>

          <p className="mb-2 text-sm text-zinc-500">
            Description
          </p>

          <p className="leading-7 text-zinc-300">
            {bug.description}
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <p className="text-sm text-zinc-500">
              Status
            </p>

            <p className="mt-2 font-semibold text-red-400">
              {bug.status}
            </p>

          </div>

          <div>

            <p className="text-sm text-zinc-500">
              Priority
            </p>

            <p className="mt-2 font-semibold text-orange-400">
              {bug.priority}
            </p>

          </div>

          <div>

            <p className="text-sm text-zinc-500">
              Severity
            </p>

            <p className="mt-2 font-semibold text-pink-400">
              {bug.severity}
            </p>

          </div>

          <div>

            <p className="text-sm text-zinc-500">
              Module
            </p>

            <p className="mt-2 font-semibold text-white">
              {bug.module}
            </p>

          </div>

          <div>

            <p className="text-sm text-zinc-500">
              Assigned To
            </p>

            <p className="mt-2 font-semibold text-white">
              {bug.assignedTo?.name || "-"}
            </p>

          </div>

          <div>

            <p className="text-sm text-zinc-500">
              Due Date
            </p>

            <p className="mt-2 font-semibold text-white">
              {bug.dueDate
                ? new Date(bug.dueDate).toLocaleDateString()
                : "-"}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
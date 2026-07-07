export default function StatsCard({ stats }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-8 text-2xl font-semibold text-white">
        Statistics
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div className="rounded-2xl bg-zinc-950 p-6">
          <p className="text-zinc-500">Total Bugs</p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            {stats.total}
          </h3>
        </div>

        <div className="rounded-2xl bg-zinc-950 p-6">
          <p className="text-zinc-500">Resolved</p>

          <h3 className="mt-3 text-4xl font-bold text-green-400">
            {stats.resolved}
          </h3>
        </div>

        <div className="rounded-2xl bg-zinc-950 p-6">
          <p className="text-zinc-500">Open</p>

          <h3 className="mt-3 text-4xl font-bold text-red-400">
            {stats.open}
          </h3>
        </div>

        <div className="rounded-2xl bg-zinc-950 p-6">
          <p className="text-zinc-500">In Progress</p>

          <h3 className="mt-3 text-4xl font-bold text-yellow-400">
            {stats.progress}
          </h3>
        </div>

      </div>

    </div>
  );
}
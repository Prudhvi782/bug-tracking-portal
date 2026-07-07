import Link from "next/link";
import { Search, Plus } from "lucide-react";

export default function BugToolbar({ searchParams }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">

        <form
          method="GET"
          className="grid flex-1 gap-4 md:grid-cols-5"
        >
          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              name="search"
              defaultValue={searchParams?.search || ""}
              placeholder="Search Bug..."
              className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-900 pl-11 pr-4 text-white"
            />

          </div>

          <select
            name="status"
            defaultValue={searchParams?.status || ""}
            className="h-12 rounded-xl border border-zinc-700 bg-zinc-900 px-4 text-white"
          >
            <option value="">Status</option>
            <option>Open</option>
            <option>Assigned</option>
            <option>In Progress</option>
            <option>Resolved</option>
            <option>Closed</option>
          </select>

          <select
            name="priority"
            defaultValue={searchParams?.priority || ""}
            className="h-12 rounded-xl border border-zinc-700 bg-zinc-900 px-4 text-white"
          >
            <option value="">Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>

          <select
            name="severity"
            defaultValue={searchParams?.severity || ""}
            className="h-12 rounded-xl border border-zinc-700 bg-zinc-900 px-4 text-white"
          >
            <option value="">Severity</option>
            <option>Minor</option>
            <option>Major</option>
            <option>Critical</option>
          </select>

          <button
            type="submit"
            className="rounded-xl bg-blue-600 text-white hover:bg-blue-700"
          >
            Search
          </button>
        </form>

        <Link
          href="/bugs/create"
          className="ml-4 flex h-12 items-center gap-2 rounded-xl bg-emerald-600 px-5 text-white hover:bg-emerald-700"
        >
          <Plus size={18} />
          Report Bug
        </Link>
      </div>
    </div>
  );
}
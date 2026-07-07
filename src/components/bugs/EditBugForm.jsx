import { updateBugAction } from "@/actions/bugs/updateBugAction";
import Link from "next/link";

export default function EditBugForm({ bug, developers }) {
  const updateAction = updateBugAction.bind(null, bug._id);

  return (
    <form
      action={updateAction}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-zinc-300">
            Bug Title
          </label>

          <input
            name="title"
            defaultValue={bug.title}
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-zinc-300">
            Module
          </label>

          <input
            name="module"
            defaultValue={bug.module}
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-zinc-300">
            Priority
          </label>

          <select
            name="priority"
            defaultValue={bug.priority}
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-zinc-300">
            Severity
          </label>

          <select
            name="severity"
            defaultValue={bug.severity}
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white"
          >
            <option>Minor</option>
            <option>Major</option>
            <option>Critical</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-zinc-300">
            Assigned Developer
          </label>

          <select
            name="assignedTo"
            defaultValue={bug.assignedTo?._id}
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white"
          >
            <option value="">Select Developer</option>

            {developers.map((developer) => (
              <option
                key={developer._id}
                value={developer._id}
              >
                {developer.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-zinc-300">
            Status
          </label>

          <select
            name="status"
            defaultValue={bug.status}
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white"
          >
            <option>Open</option>
            <option>Assigned</option>
            <option>In Progress</option>
            <option>Resolved</option>
            <option>Closed</option>
            <option>Rejected</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-zinc-300">
            Due Date
          </label>

          <input
            type="date"
            name="dueDate"
            defaultValue={
              bug.dueDate
                ? new Date(bug.dueDate).toISOString().split("T")[0]
                : ""
            }
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white"
          />
        </div>

      </div>

      <div className="mt-6">
        <label className="mb-2 block text-zinc-300">
          Description
        </label>

        <textarea
          rows={6}
          name="description"
          defaultValue={bug.description}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-white"
        />
      </div>

      <div className="mt-8 flex justify-end gap-4">

        <Link
          href="/bugs"
          className="rounded-xl border border-zinc-700 px-6 py-3 text-white"
        >
          Cancel
        </Link>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Update Bug
        </button>

      </div>
    </form>
  );
} 
import Link from "next/link";
import { updateUserAction } from "@/actions/users/updateUserAction";

export default function EditUserForm({ user }) {
  const action = updateUserAction.bind(null, user._id);

  return (
    <form
      action={action}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-zinc-300">
            Full Name
          </label>

          <input
            name="name"
            defaultValue={user.name}
            required
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-zinc-300">
            Email
          </label>

          <input
            type="email"
            name="email"
            defaultValue={user.email}
            required
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-zinc-300">
            Department
          </label>

          <input
            name="department"
            defaultValue={user.department}
            required
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-zinc-300">
            Role
          </label>

          <select
            name="role"
            defaultValue={user.role}
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white"
          >
            <option value="Developer">Developer</option>
            <option value="Tester">Tester</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-zinc-300">
            Status
          </label>

          <select
            name="status"
            defaultValue={user.status}
            className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 text-white"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

      </div>

      <div className="mt-8 flex justify-end gap-4">

        <Link
          href="/users"
          className="rounded-xl border border-zinc-700 px-6 py-3 text-white"
        >
          Cancel
        </Link>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Update User
        </button>

      </div>

    </form>
  );
}
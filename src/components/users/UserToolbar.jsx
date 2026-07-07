import Link from "next/link";
import { Search, Plus } from "lucide-react";

export default function UserToolbar({ searchParams }) {
  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <form
          method="GET"
          className="grid flex-1 gap-4 md:grid-cols-2"
        >

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              name="search"
              defaultValue={searchParams?.search || ""}
              placeholder="Search user..."
              className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-900 pl-11 pr-4 text-white outline-none focus:border-blue-500"
            />

          </div>

          <select
            name="role"
            defaultValue={searchParams?.role || ""}
            className="h-12 rounded-xl border border-zinc-700 bg-zinc-900 px-4 text-white outline-none focus:border-blue-500"
          >
            <option value="">
              All Roles
            </option>

            <option value="Developer">
              Developer
            </option>

            <option value="Tester">
              Tester
            </option>

            <option value="Admin">
              Admin
            </option>

          </select>

          <button
            type="submit"
            className="rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700 md:col-span-2"
          >
            Search
          </button>

        </form>

        <Link
          href="/users/create"
          className="ml-4 flex h-12 items-center gap-2 rounded-xl bg-emerald-600 px-5 text-white hover:bg-emerald-700"
        >
          <Plus size={18} />
          Add User
        </Link>

      </div>

    </div>
  );
}
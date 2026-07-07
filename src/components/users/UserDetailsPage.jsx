import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getUserByIdAction } from "@/actions/users/getUserByIdAction";

export default async function UserDetailsPage({ id }) {
  const user = await getUserByIdAction(id);

  if (!user) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <h1 className="text-3xl font-bold text-white">
          User Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <Link
        href="/users"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to Users
      </Link>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

        <div className="flex items-center gap-6">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <div>

            <h1 className="text-4xl font-bold text-white">
              {user.name}
            </h1>

            <p className="mt-2 text-zinc-400">
              {user.email}
            </p>

          </div>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-zinc-950 p-6">
            <p className="text-zinc-500">Role</p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              {user.role}
            </h2>
          </div>

          <div className="rounded-2xl bg-zinc-950 p-6">
            <p className="text-zinc-500">Status</p>

            <h2 className="mt-2 text-xl font-semibold text-green-400">
              {user.status}
            </h2>
          </div>

          <div className="rounded-2xl bg-zinc-950 p-6">
            <p className="text-zinc-500">Assigned Bugs</p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              {user.assignedBugs}
            </h2>
          </div>

        </div>

      </div>

    </div>
  );
}
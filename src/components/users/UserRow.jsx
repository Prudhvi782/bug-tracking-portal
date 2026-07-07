import Link from "next/link";
import { Eye, Pencil } from "lucide-react";

import RoleBadge from "./RoleBadge";

export default function UserRow({ user }) {
  return (
    <tr className="border-b border-zinc-800 hover:bg-zinc-900 transition">

      <td className="px-6 py-5 text-white font-semibold">
        {user.name}
      </td>

      <td className="px-6 py-5 text-zinc-400">
        {user.email}
      </td>

      <td className="px-6 py-5">
        <RoleBadge role={user.role} />
      </td>

      <td className="px-6 py-5">

        <div className="flex gap-3">

          <Link
            href={`/users/${user._id}`}
            className="text-blue-400 hover:text-blue-300"
          >
            <Eye size={18} />
          </Link>

          <Link
            href={`/users/${user._id}/edit`}
            className="text-yellow-400 hover:text-yellow-300"
          >
            <Pencil size={18} />
          </Link>

        </div>

      </td>

    </tr>
  );
}
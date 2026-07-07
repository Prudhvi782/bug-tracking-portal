import { Eye, Pencil } from "lucide-react";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";
import SeverityBadge from "./SeverityBadge";
import Link from "next/link";

export default function BugRow({ bug }) {
  return (
    <tr className="border-b border-zinc-800 hover:bg-zinc-800 transition">
      <td className="px-6 py-5 font-semibold text-blue-400">
        {bug.bugId}
      </td>

      <td className="px-6 py-5 font-medium text-white">
        {bug.title}
      </td>

      <td className="px-6 py-5 text-zinc-300">
        {bug.module}
      </td>

      <td className="px-6 py-5">
        <PriorityBadge priority={bug.priority} />
      </td>

      <td className="px-6 py-5">
        <SeverityBadge severity={bug.severity} />
      </td>

      <td className="px-6 py-5">
        <StatusBadge status={bug.status} />
      </td>

      <td className="px-6 py-5 text-zinc-300">
        {bug.assignedTo?.name || "-"}
      </td>

      <td className="px-6 py-5 text-zinc-300">
        {bug.dueDate
          ? new Date(bug.dueDate).toLocaleDateString()
          : "-"}
      </td>

      <td className="px-6 py-5">
        <div className="flex gap-4">
          <Link href={`/bugs/${bug._id}`}>
            <Eye
              size={18}
              className="cursor-pointer text-sky-400 hover:text-sky-300"
            />
          </Link>

          <Link href={`/bugs/${bug._id}/edit`}>
            <Pencil
              size={18}
              className="cursor-pointer text-yellow-400 hover:text-yellow-300"
            />
          </Link>
        </div>
      </td>
    </tr>
  );
}
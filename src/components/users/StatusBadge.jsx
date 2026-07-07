import Badge from "@/components/common/badges/Badge";

export default function StatusBadge({ status }) {
  const colors = {
    Open: "bg-red-500/20 text-red-400",
    Assigned: "bg-blue-500/20 text-blue-400",
    "In Progress": "bg-yellow-500/20 text-yellow-400",
    Resolved: "bg-green-500/20 text-green-400",
    Closed: "bg-zinc-600/20 text-zinc-300",
    Rejected: "bg-rose-500/20 text-rose-400",
  };

  return (
    <Badge
      text={status}
      color={colors[status] || "bg-zinc-700 text-white"}
    />
  );
}
import Badge from "@/components/common/badges/Badge";

export default function PriorityBadge({ priority }) {
  const colors = {
    Low: "bg-green-500/20 text-green-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    High: "bg-orange-500/20 text-orange-400",
    Critical: "bg-red-500/20 text-red-400",
  };

  return (
    <Badge
      text={priority}
      color={colors[priority] || "bg-zinc-700 text-white"}
    />
  );
}
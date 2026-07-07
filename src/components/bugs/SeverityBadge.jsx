import Badge from "@/components/common/badges/Badge";

export default function SeverityBadge({ severity }) {
  const colors = {
    Minor: "bg-green-500/20 text-green-400",
    Major: "bg-orange-500/20 text-orange-400",
    Critical: "bg-red-500/20 text-red-400",
  };

  return (
    <Badge
      text={severity}
      color={colors[severity] || "bg-zinc-700 text-white"}
    />
  );
}
import Badge from "@/components/common/badges/Badge";

export default function RoleBadge({ role }) {
  const colors = {
    Admin: "bg-purple-500/20 text-purple-400",
    Developer: "bg-blue-500/20 text-blue-400",
    Tester: "bg-green-500/20 text-green-400",
  };

  return (
    <Badge
      text={role}
      color={colors[role] || "bg-zinc-700 text-white"}
    />
  );
}
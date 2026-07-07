export default function StatusBadge({ status }) {
  const styles = {
    Open: "bg-red-500/20 text-red-400",
    Assigned: "bg-blue-500/20 text-blue-400",
    "In Progress": "bg-yellow-500/20 text-yellow-400",
    Resolved: "bg-emerald-500/20 text-emerald-400",
    Closed: "bg-zinc-600/20 text-zinc-300",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-zinc-700 text-white"
      }`}
    >
      {status}
    </span>
  );
}
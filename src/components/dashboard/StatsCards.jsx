import {
  Bug,
  CircleAlert,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";

import StatCard from "./StatCard";

export default function StatsCards({ stats }) {
  const cards = [
    {
      title: "Total Bugs",
      value: stats.totalBugs,
      icon: Bug,
      color: "bg-blue-600",
    },
    {
      title: "Open Bugs",
      value: stats.open,
      icon: CircleAlert,
      color: "bg-yellow-500",
    },
    {
      title: "Resolved",
      value: stats.resolved,
      icon: CheckCircle2,
      color: "bg-emerald-600",
    },
    {
      title: "Critical",
      value: stats.critical,
      icon: ShieldAlert,
      color: "bg-rose-600",
    },
  ];

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((item) => (
        <StatCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
}
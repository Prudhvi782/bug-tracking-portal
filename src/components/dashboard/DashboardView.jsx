import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import RecentActivity from "./RecentActivity";

import { getDashboardStatsAction } from "@/actions/dashboard/getDashboardStatsAction";

export default async function DashboardView() {
  const stats = await getDashboardStatsAction();

  return (
    <section className="space-y-6">
      <DashboardHeader />

      <StatsCards stats={stats} />

      <RecentActivity activities={stats.recentActivity} />
    </section>
  );
}
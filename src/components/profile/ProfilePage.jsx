import { getProfileAction } from "@/actions/profile/getProfileAction";
import { getProfileStatsAction } from "@/actions/profile/getProfileStatsAction";

import ProfileCard from "./ProfileCard";
import StatsCard from "./StatsCard";
import ActivityCard from "./ActivityCard";

export default async function ProfilePage() {
  const user = await getProfileAction();

  console.log("PROFILE USER:", user);

  if (!user) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">
          User is NULL
        </h1>
      </div>
    );
  }

  const stats = await getProfileStatsAction();

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-5xl font-bold text-white">
          My Profile
        </h1>

        <p className="mt-2 text-zinc-400">
          View your profile information and recent activity.
        </p>

      </div>

      <ProfileCard user={user} />

      <div className="grid gap-6 lg:grid-cols-2">

        <StatsCard stats={stats} />

        <ActivityCard user={user} />

      </div>

    </div>
  );
}
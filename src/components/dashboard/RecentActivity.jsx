import { Card, CardContent } from "@/components/ui/card";

export default function RecentActivity({ activities }) {
  return (
    <Card className="mt-8 rounded-2xl border-zinc-800 bg-zinc-900">
      <CardContent className="p-6">

        <h2 className="mb-6 text-xl font-semibold text-white">
          Recent Activity
        </h2>

        {activities.length === 0 ? (
          <p className="text-zinc-500">
            No recent activity found.
          </p>
        ) : (
          <div className="space-y-5">

            {activities.map((activity) => (

              <div
                key={activity._id}
                className="flex items-start gap-4 rounded-xl bg-zinc-950 p-4"
              >

                <div className="mt-2 h-3 w-3 rounded-full bg-blue-500" />

                <div>

                  <p className="font-medium text-white">
                    {activity.action}
                  </p>

                  <p className="mt-1 text-sm text-zinc-400">
                    {activity.performedBy?.name}
                  </p>

                  <p className="text-xs text-zinc-500">
                    {new Date(activity.createdAt).toLocaleString()}
                  </p>

                </div>

              </div>

            ))}

          </div>
        )}

      </CardContent>
    </Card>
  );
}
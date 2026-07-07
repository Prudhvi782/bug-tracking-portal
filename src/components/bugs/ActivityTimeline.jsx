import { getActivityLogsAction } from "@/actions/activity/getActivityLogsAction";

export default async function ActivityTimeline({ bugId }) {
  const logs = await getActivityLogsAction(bugId);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="mb-8 text-2xl font-semibold text-white">
        Activity Timeline
      </h2>

      {logs.length === 0 ? (
        <p className="text-zinc-500">
          No activity found.
        </p>
      ) : (
        <div className="space-y-6">
          {logs.map((log) => (
            <div
              key={log._id}
              className="flex items-start gap-4"
            >
              <div className="mt-2 h-3 w-3 rounded-full bg-blue-500" />

              <div>
                <p className="font-medium text-white">
                  {log.action}
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  By {log.performedBy?.name}
                </p>

                <p className="text-xs text-zinc-500">
                  {new Date(log.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
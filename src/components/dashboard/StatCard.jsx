import { Card, CardContent } from "@/components/ui/card";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
}) {
  return (
    <Card className="rounded-2xl border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-zinc-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h2>
        </div>

        <div className={`${color} rounded-2xl p-3`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
      </CardContent>
    </Card>
  );
}
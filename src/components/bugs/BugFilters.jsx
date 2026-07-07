import { Input } from "@/components/ui/input";

export default function BugFilters() {
  return (
    <div className="grid gap-4 lg:grid-cols-5">

      <Input placeholder="Search Bug ID / Title" />

      <select className="rounded-md border border-zinc-700 bg-zinc-900 px-3 text-white">
        <option>Status</option>
      </select>

      <select className="rounded-md border border-zinc-700 bg-zinc-900 px-3 text-white">
        <option>Priority</option>
      </select>

      <select className="rounded-md border border-zinc-700 bg-zinc-900 px-3 text-white">
        <option>Severity</option>
      </select>

      <select className="rounded-md border border-zinc-700 bg-zinc-900 px-3 text-white">
        <option>Developer</option>
      </select>

    </div>
  );
}
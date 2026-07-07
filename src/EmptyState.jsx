export default function EmptyState({
  title,
}) {
  return (
    <div className="flex h-56 items-center justify-center rounded-2xl border border-dashed border-zinc-700">
      <p className="text-zinc-500">
        {title}
      </p>
    </div>
  );
}
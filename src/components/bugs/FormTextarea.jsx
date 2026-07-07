export default function FormTextarea({
  label,
  name,
  defaultValue = "",
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-zinc-300">
        {label}
      </label>

      <textarea
        name={name}
        rows={6}
        defaultValue={defaultValue}
        placeholder="Describe the bug..."
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
      />
    </div>
  );
}
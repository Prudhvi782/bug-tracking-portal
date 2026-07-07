export default function FormSelect({
  label,
  options,
  name,
  defaultValue = "",
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-zinc-300">
        {label}
      </label>

      <select
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
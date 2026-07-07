export default function FormInput({
  label,
  placeholder,
  type = "text",
  name,
  defaultValue = "",
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-zinc-300">
        {label}
      </label>

      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
      />
    </div>
  );
}
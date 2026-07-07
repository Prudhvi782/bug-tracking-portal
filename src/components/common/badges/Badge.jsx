export default function Badge({
  text,
  color,
}) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${color}`}
    >
      {text}
    </span>
  );
}
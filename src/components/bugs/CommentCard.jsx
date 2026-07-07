export default function CommentCard({
  name,
  message,
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

      <h3 className="font-semibold text-white">
        {name}
      </h3>

      <p className="mt-2 text-zinc-400">
        {message}
      </p>

    </div>
  );
}
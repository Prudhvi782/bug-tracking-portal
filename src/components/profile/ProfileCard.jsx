export default function ProfileCard({ user }) {

  console.log("PROFILE CARD USER:", user);

  if (!user) {
    return (
      <div className="rounded-3xl border border-red-500 p-8 text-red-500">
        User is NULL
      </div>
    );
  }
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <div className="flex flex-col gap-6 md:flex-row md:items-center">

        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-5xl font-bold text-white">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1">

          <h2 className="text-3xl font-bold text-white">
            {user.name}
          </h2>

          <p className="mt-2 text-zinc-400">
            {user.email}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-blue-400">
              {user.role}
            </span>

            <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
              {user.department || "No Department"}
            </span>

          </div>

        </div>

        <button className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Edit Profile
        </button>

      </div>

    </div>
  );
}
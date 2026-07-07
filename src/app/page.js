import Link from "next/link";
import { Bug, ShieldCheck, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-600">
          <Bug size={48} />
        </div>

        <h1 className="text-6xl font-bold">
          Bug Tracking Portal
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
          A modern issue tracking system built with Next.js, MongoDB,
          Server Actions and JWT Authentication.
        </p>

        <div className="mt-12 flex gap-5">

          <Link
            href="/login"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold transition hover:bg-zinc-900"
          >
            Register
          </Link>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <Bug
              className="mb-5 text-blue-500"
              size={40}
            />

            <h2 className="mb-3 text-2xl font-semibold">
              Bug Management
            </h2>

            <p className="text-zinc-400">
              Create, assign, edit and monitor bugs from a modern dashboard.
            </p>

          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <Users
              className="mb-5 text-emerald-500"
              size={40}
            />

            <h2 className="mb-3 text-2xl font-semibold">
              Team Collaboration
            </h2>

            <p className="text-zinc-400">
              Developers, testers and admins work together efficiently.
            </p>

          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

            <ShieldCheck
              className="mb-5 text-yellow-500"
              size={40}
            />

            <h2 className="mb-3 text-2xl font-semibold">
              Secure Authentication
            </h2>

            <p className="text-zinc-400">
              JWT Authentication, Middleware Protection and Role Based Access.
            </p>

          </div>

        </div>

        <Link
          href="/login"
          className="mt-16 flex items-center gap-3 text-blue-400 hover:text-blue-300"
        >
          Start Managing Bugs
          <ArrowRight size={20} />
        </Link>

      </section>

    </main>
  );
}
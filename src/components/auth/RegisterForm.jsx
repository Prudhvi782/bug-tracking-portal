"use client";

import Link from "next/link";

import { registerAction } from "@/actions/auth/registerAction";

import AuthCard from "./AuthCard";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  return (
    <AuthCard>

      <form action={registerAction} className="space-y-6">

        <div>

          <h2 className="text-4xl font-bold text-white">
            Create Account 🚀
          </h2>

          <p className="mt-2 text-zinc-400">
            Register to Bug Tracking Portal.
          </p>

        </div>

        <div className="grid gap-5">

          <div>

            <Label className="text-zinc-300">
              Name
            </Label>

            <Input
              name="name"
              placeholder="John Doe"
              className="mt-2 h-12 rounded-xl border-zinc-700 bg-zinc-950 text-white"
              required
            />

          </div>

          <div>

            <Label className="text-zinc-300">
              Email
            </Label>

            <Input
              name="email"
              type="email"
              placeholder="john@gmail.com"
              className="mt-2 h-12 rounded-xl border-zinc-700 bg-zinc-950 text-white"
              required
            />

          </div>

          <div>

            <Label className="text-zinc-300">
              Password
            </Label>

            <Input
              name="password"
              type="password"
              placeholder="********"
              className="mt-2 h-12 rounded-xl border-zinc-700 bg-zinc-950 text-white"
              required
            />

          </div>

          <div>

            <Label className="text-zinc-300">
              Confirm Password
            </Label>

            <Input
              type="password"
              placeholder="********"
              className="mt-2 h-12 rounded-xl border-zinc-700 bg-zinc-950 text-white"
            />

          </div>

          <div>

            <Label className="text-zinc-300">
              Role
            </Label>

            <select
              name="role"
              className="mt-2 h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 text-white"
            >
              <option value="Tester">Tester</option>
              <option value="Developer">Developer</option>
              <option value="Admin">Admin</option>
            </select>

          </div>

          <div>

            <Label className="text-zinc-300">
              Department
            </Label>

            <Input
              name="department"
              placeholder="Frontend"
              className="mt-2 h-12 rounded-xl border-zinc-700 bg-zinc-950 text-white"
              required
            />

          </div>

        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-blue-600 hover:bg-blue-700"
        >
          Create Account
        </Button>

        <p className="text-center text-zinc-400">

          Already have an account?

          <Link
            href="/login"
            className="ml-2 text-blue-500 hover:text-blue-400"
          >
            Login
          </Link>

        </p>

      </form>

    </AuthCard>
  );
}
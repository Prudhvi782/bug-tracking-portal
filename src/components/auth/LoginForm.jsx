"use client";

import Link from "next/link";

import { loginAction } from "@/actions/auth/loginAction";

import AuthCard from "./AuthCard";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  return (
    <AuthCard>
      <form action={loginAction} className="space-y-8">

        <div>
          <h2 className="text-4xl font-bold text-white">
            Welcome Back 👋
          </h2>

          <p className="mt-2 text-zinc-400">
            Login to continue.
          </p>
        </div>

        <div className="space-y-6">

          <div>
            <Label className="text-zinc-300">
              Email
            </Label>

            <Input
              name="email"
              type="email"
              placeholder="john@gmail.com"
              className="mt-2 h-12 rounded-xl border-zinc-700 bg-zinc-950 text-white placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-blue-500"
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
              className="mt-2 h-12 rounded-xl border-zinc-700 bg-zinc-950 text-white placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-blue-500"
              required
            />
          </div>

        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-blue-600 text-lg font-semibold hover:bg-blue-700"
        >
          Login
        </Button>

        <p className="text-center text-sm text-zinc-400">
          Don't have an account?

          <Link
            href="/register"
            className="ml-2 font-semibold text-blue-500 hover:text-blue-400"
          >
            Register
          </Link>
        </p>

      </form>
    </AuthCard>
  );
}
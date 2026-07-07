"use client";

import { Card } from "@/components/ui/card";

export default function AuthCard({ children }) {
  return (
    <Card className="w-full max-w-lg rounded-3xl border border-zinc-800 bg-zinc-900/90 p-10 shadow-2xl backdrop-blur-xl">
      {children}
    </Card>
  );
}
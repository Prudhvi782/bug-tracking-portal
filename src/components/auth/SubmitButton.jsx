"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function SubmitButton({
  children,
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="h-11 w-full rounded-xl"
    >
      {pending ? "Please wait..." : children}
    </Button>
  );
}
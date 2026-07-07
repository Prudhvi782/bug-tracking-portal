export default function AuthLayout({
  children,
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-6">
      {children}
    </div>
  );
}
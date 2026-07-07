import AuthHeader from "./AuthHeader";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-black">
      <AuthHeader />

      <section className="flex items-center justify-center px-6 py-10">
        <LoginForm />
      </section>
    </main>
  );
}
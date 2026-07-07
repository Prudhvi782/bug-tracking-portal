import AuthHeader from "./AuthHeader";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-black">

      <AuthHeader />

      <section className="flex items-center justify-center px-6 py-10">

        <RegisterForm />

      </section>

    </main>
  );
}
import BugPage from "@/components/bugs/BugPage";

export default async function Page({ searchParams }) {
  const params = await searchParams;

  return <BugPage searchParams={params} />;
}
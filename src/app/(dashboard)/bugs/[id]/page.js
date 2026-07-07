import BugDetailsPage from "@/components/bugs/BugDetailsPage";

export default async function Page({ params }) {
  const { id } = await params;

  return <BugDetailsPage id={id} />;
}
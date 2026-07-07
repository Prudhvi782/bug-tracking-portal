import EditBugPage from "@/components/bugs/EditBugPage";

export default async function Page({ params }) {
  const { id } = await params;

  return <EditBugPage id={id} />;
}
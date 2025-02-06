import Header from "../../components/header";
import TableInfo from "./table";
import { redirect } from "next/navigation";
import { getSessionData } from "../api/getServerSession";

export default async function Dashboard() {
  const session = await getSessionData(); 

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="w-full">
      <Header title="PayPal Robot" subtitle="Automatización del proceso Administrativo de PayPal" />
      <TableInfo session={session} />
    </div>
  );
}

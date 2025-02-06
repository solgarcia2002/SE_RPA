import Header from "../../components/header";
import TableInfo from "./table";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";


export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="w-full">
      <Header title="PayPal Robot" subtitle="Automatización del proceso Administrativo de PayPal" />
      <TableInfo session={session} />
    </div>
  );
}

import Header from "../../components/header";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import dynamic from 'next/dynamic';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const TableInfo= dynamic(() => import('./table'), { ssr: false });
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

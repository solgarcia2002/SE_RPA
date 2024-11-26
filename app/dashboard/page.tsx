
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import Header from "@/components/header";
import TableInfo from "./table";

export default async function Dashboard(){
  const session = await getServerSession(authOptions);
  return(
    <div className="w-full">
      <Header title="Dashboard" subtitle="Customer Support" />
      <TableInfo />
    </div>
  )
}
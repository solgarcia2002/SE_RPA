
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { signOut } from "next-auth/react";
import Button from "@/components/button";
import Header from "@/components/header";

export default async function Dashboard(){
  const session = await getServerSession(authOptions);
  console.log(session)
  return(
    <div className="w-full">
      <Header title="Dashboard" subtitle="Customer Support" />
      
    </div>
  )
}
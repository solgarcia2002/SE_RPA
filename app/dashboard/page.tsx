
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { signOut } from "next-auth/react";
import Button from "@/components/button";

export default async function Dashboard(){
  const session = await getServerSession(authOptions);
  console.log(session)
  return(
    <div>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <Button >salir</Button>
    </div>
  )
}
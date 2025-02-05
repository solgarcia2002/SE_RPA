import { getServerSession } from "next-auth";

export async function getSessionData() {
  return await getServerSession();
}

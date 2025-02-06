import { getToken } from "next-auth/jwt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return res.status(401).json({ authenticated: false });
  }

  return res.status(200).json({ authenticated: true });
}

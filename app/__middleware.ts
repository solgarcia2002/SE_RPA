import { NextResponse } from "next/server";
import type { NextRequest } from "next/server"; // Usa NextRequest
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const url = req.nextUrl.clone();

  // Si el token no existe y la ruta no es /login, redirigir a /login
  if (!token && url.pathname !== "/login") {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Si el token existe y el usuario está en /login, redirigir a /dashboard
  if (token && url.pathname === "/login") {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  // Permitir el acceso a otras rutas
  return NextResponse.next();
}

// Configuración del matcher para proteger todas las rutas excepto /login
export const config = {
  matcher: ["/((?!login).*)"], // Proteger todas las rutas excepto /login
};

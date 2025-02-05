import type { Metadata } from "next";
import { roboto } from "./fonts/fonts";
import Providers from "./providers";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./globals.css";
import { getServerSession } from "next-auth";
import Navbar from "@/components/navbar";



export const metadata: Metadata = {
  title: "RPA | Servientrega",
  description: "RPA | Servientrega",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Providers>
          <div className="flex">
            {session && <Navbar />}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

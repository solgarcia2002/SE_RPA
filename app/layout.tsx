import type { Metadata } from "next";
import { roboto } from "./fonts/fonts";
import Providers from "./providers";
import "./globals.css";



export const metadata: Metadata = {
  title: "RPA | Servientrega",
  description: "RPA | Servientrega",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

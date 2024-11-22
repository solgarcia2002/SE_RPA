"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkNavbarTypes = {
  icon: React.ReactNode;
  link: string;
  name: string;
};

export default function LinkNavbar({ icon, link, name }: LinkNavbarTypes) {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <Link className={`flex items-center p-5 rounded transition-colors ${
      isActive ? "bg-lighter text-darkGreen font-bold" : "hover:bg-gray-200"
    }`} href={link}>
      <span className="w-9">{icon}</span>
      {name}
    </Link>
  );
}

import Image from "next/image";
import LinkNavbar from "./linkNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"

const links = [
  {
    id: 1,
    name: "PayPal RPA",
    link: "/dashboard",
    icon: <FontAwesomeIcon icon={faLayerGroup} />,
  }
];

export default function Navbar() {
  return (
    <div className="w-[25%] flex flex-col px-9 py-3">
      <Image
        src="/logo-servientrega.jpg"
        alt="servientrega"
        width={630}
        height={320}
      />
      {links.map((link) => (
        <LinkNavbar
          key={link.id}
          icon={link.icon}
          link={link.link}
          name={link.name}
        />
      ))}
    </div>
  );
}

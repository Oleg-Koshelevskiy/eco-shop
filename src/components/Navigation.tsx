import { links } from "@/utils";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="hidden sm:flex sm:gap-4">
      {links.map((item) => (
        <Link
          className="text-lg font-semibold text-lime-600 hover:text-lime-500 hover:scale-105 transition-all duration-200"
          key={item.id}
          href={item.link}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;

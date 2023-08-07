"use client";

import { links } from "@/utils";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const MobileNavigation = () => {
  const [hidden, sethidden] = useState(true);

  return (
    <div className="sm:hidden relative w-28 h-10">
      {hidden && (
        <Bars3Icon
          className="absolute inset-x-8 top-0 h-10 w-10 text-lime-600"
          onClick={() => sethidden(false)}
        />
      )}
      {!hidden && (
        <nav className="absolute flex-col backdrop-blur-sm inset-x-0 top-0 bg-lime-500/20 p-2 rounded">
          {links.map((item) => (
            <Link
              className=" text-lg text-lime-700 hover:text-lime-600 block text-center"
              key={item.id}
              href={item.link}
              onClick={() => sethidden(true)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default MobileNavigation;

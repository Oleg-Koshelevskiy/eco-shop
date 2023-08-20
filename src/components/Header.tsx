import Image from "next/image";
import Navigation from "./Navigation";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import Cart from "./Cart";
import Login from "./Login";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center sm:gap-3 my-2 px-2">
      <Link href="/" className="flex gap-2 items-center hover:cursor-pointer">
        <Image
          src="/images/eco-logo.png"
          alt="Ecoshop logo"
          width={60}
          height={60}
        />
        <div className="text-3xl font-bold text-lime-600">Shop</div>
      </Link>
      <Navigation />
      <MobileNavigation />
      <div className="text-xl font-bold text-lime-600 flex align-middle gap-2 sm:gap-4 basis-4/12 sm:basis-auto">
        <Cart />
        <Link
          href="/login"
          className="hover:cursor-pointer hover:text-lime-500 leading-8 sm:leading-10"
        >
          <Login />
        </Link>
      </div>
    </header>
  );
};

export default Header;

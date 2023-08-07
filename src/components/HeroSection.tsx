import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className=" flex flex-wrap px-6 pt-4 lg:px-8 xl:mt-[64px]">
      <div className="mx-auto w-1/2 py-8 px-4 sm:py-12 lg:py-28 basis-full lg:basis-1/2">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-lime-900/10 hover:ring-lime-900/20">
            Discover our new arrivals.{" "}
            <Link href="/products" className="font-semibold text-lime-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="main_header">
            Only fresh products directly from farms
          </h1>
          <p className="mt-6 md:text-lg leading-8 text-gray-600">
            A wide selection of organic fruits and vegetables, which are grown
            without harmful fertilizers and pesticides. All our products are
            fresh, juicy and fragrant, because we deliver them directly from the
            farm to your home. Order from us and enjoy the natural taste and
            benefit for your health! 🍎🥕🍇
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/products" className="main_btn">
              Our products
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="basis-full lg:basis-1/2 flex items-center">
        <Image
          src="/images/slides/village.jpg"
          alt="village landscape"
          width={1000}
          height={561}
        />
      </div>
    </section>
  );
};

export default HeroSection;

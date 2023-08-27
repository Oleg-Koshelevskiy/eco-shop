import { blurDataUrl } from "@/utils";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="secondary_header">About Us</h1>
        <p className="mt-4 text-lg text-center text-gray-600">
          We are a team of enthusiasts who believe that ecological living is not
          only a fashion, but also a necessity.
        </p>
        <div className="mt-8 flex flex-col items-center md:flex-row md:justify-between">
          <div className="md:w-1/2 md:mr-8 relative md:h-[480px] lg:h-[768px]">
            <Image
              src="/images/slides/fruits.jpg"
              alt="Eco products"
              className="rounded-lg shadow object-cover"
              fill
              sizes="(max-width: 768px) 80vw, 40vw"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              quality={60}
            />
          </div>
          <div className="md:w-1/2 md:ml-8 mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold text-green-600">
              Our mission
            </h2>
            <p className="mt-4 text-gray-700">
              Our mission is to help people make their lives more ecological and
              healthy with the help of our products and services. We offer you a
              wide range of eco-products for various areas of life: nutrition,
              hygiene, self-care, household, travel and others. All our products
              are made from natural, organic or recycled materials that do not
              harm the environment and your health.
            </p>
            <p className="mt-4 text-gray-700">
              On our website you can find interesting articles, webinars,
              podcasts, quizzes and other materials that talk about
              environmental problems, solutions and initiatives. You can also
              join our community of eco-activists who share their experiences,
              ideas and practices of eco-living. We believe that together we can
              make the world a better place to live.
            </p>
            <h2 className="mt-8 text-3xl font-semibold text-green-600">
              Our history
            </h2>
            <p className="mt-4 text-gray-700">
              Our store was founded in 2020 by two friends who dreamed of
              creating a platform to promote eco-life in Ukraine. They started
              with a small online store that offered only a few types of
              eco-products, but over time they expanded their range and
              audience. Today, our store is one of the largest and most popular
              in Ukraine, which serves thousands of customers throughout the
              country. We also partner with many eco-brands, organizations and
              influencers who help us spread our message.
            </p>
            <h2 className="mt-8 text-3xl font-semibold text-green-600">
              Our team
            </h2>
            <p className="mt-4 text-gray-700">
              Our team is a group of professionals who care about the future of
              our planet. We work with love and passion to provide you with the
              best service, quality and value. We also learn and grow with you
              by listening to your needs, wishes and feedback. We thank you for
              your support and trust.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex flex-col items-center">
                <Image
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="Anna"
                  className="rounded-full shadow"
                  width={128}
                  height={128}
                />
                <h3 className="mt-4 text-xl font-medium text-gray-800">Anna</h3>
                <p className="mt-2 text-sm text-gray-600">Founder and CEO</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                  alt="Ivan"
                  className="rounded-full shadow"
                  width={128}
                  height={128}
                />
                <h3 className="mt-4 text-xl font-medium text-gray-800">Ivan</h3>
                <p className="mt-2 text-sm text-gray-600">Founder and CTO</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="Olena"
                  className="rounded-full shadow"
                  width={128}
                  height={128}
                />
                <h3 className="mt-4 text-xl font-medium text-gray-800">
                  Olena
                </h3>
                <p className="mt-2 text-sm text-gray-600">Sales manager</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="https://randomuser.me/api/portraits/men/56.jpg"
                  alt="Petro"
                  className="rounded-full shadow"
                  width={128}
                  height={128}
                />
                <h3 className="mt-4 text-xl font-medium text-gray-800">
                  Petro
                </h3>
                <p className="mt-2 text-sm text-gray-600">Marketing manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import Image from "next/image";

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <h2 className="secondary_header">What our customers say about us</h2>
        <p className="mt-6 md:text-lg leading-8 text-center text-gray-600">
          We are happy to have helped thousands of people make their lives
          greener and healthier with our products and services.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Олена Петренко"
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-medium text-green-600">
                  Olena Petrenko
                </h3>
                <p className="text-sm text-gray-500">Teacher</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 italic">
                "I am very satisfied with my order. The products are of high
                quality, tasty and useful. Delivery is fast and reliable. The
                service is friendly and polite. I recommend this store to anyone
                who wants to live eco."
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Ігор Ковальчук"
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-medium text-green-600">
                  Ihor Kovalchuk
                </h3>
                <p className="text-sm text-gray-500">Student</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 italic">
                "I have been ordering products from this store for several
                months now and I have no plans to stop. I love that they have a
                large selection of organic products for different needs and
                tastes. The prices are affordable and the quality is high."
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Image
                src="https://randomuser.me/api/portraits/women/67.jpg"
                alt="Марина Савченко"
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-medium text-green-600">
                  Marina Savchenko
                </h3>
                <p className="text-sm text-gray-500">Blogger</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 italic">
                “I am very impressed with this store. They don't just sell great
                products, but also care about the environment and social
                responsibility. I got a free eco bag with mine by order I am
                very glad to support such a good project.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

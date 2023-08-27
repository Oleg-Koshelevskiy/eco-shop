import Image from "next/image";

const Shipment = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="secondary_header">Shipment</h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        We offer you several delivery options for your convenience and savings.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center border rounded-lg shadow p-4">
          <Image
            src="/images/shipment/nova-poshta.jpg"
            alt="Nova Poshta"
            width={96}
            height={96}
            className="rounded-md"
          />
          <h2 className="mt-4 text-2xl font-medium text-gray-800">
            Nova Poshta
          </h2>
          <p className="mt-4 text-gray-700">
            Delivery to the branch or address in 1-3 days. The price depends on
            the weight and size of the parcel. You can calculate the cost on the
            Nova Poshta website.
          </p>
          <a href="https://novaposhta.ua/" className="main_btn mt-4">
            Learn more
          </a>
        </div>
        <div className="flex flex-col items-center border rounded-lg shadow p-4">
          <Image
            src="/images/shipment/ukrposhta.png"
            alt="Ukrposhta"
            width={96}
            height={96}
            className="rounded-md"
          />
          <h2 className="mt-4 text-2xl font-medium text-gray-800">Ukrposhta</h2>
          <p className="mt-4 text-gray-700">
            Delivery to the branch or address in 3-7 days. The price depends on
            the weight and size of the parcel. You can calculate the cost on the
            Ukrposhta website.
          </p>
          <a href="https://ukrposhta.ua/" className="main_btn mt-4">
            Learn more
          </a>
        </div>
        <div className="flex flex-col items-center border rounded-lg shadow p-4">
          <Image
            src="/images/shipment/mist.png"
            alt="Meest Express"
            width={96}
            height={96}
            className="rounded-md"
          />
          <h2 className="mt-4 text-2xl font-medium text-gray-800">
            Meest Express
          </h2>
          <p className="mt-4 text-gray-700">
            Delivery to the branch or address in 1-2 days. The price depends on
            the weight and size of the parcel. You can calculate the cost on the
            Meest Express website.
          </p>
          <a href="https://meest-express.com.ua/" className="main_btn mt-4">
            Learn more
          </a>
        </div>
      </div>
      <p className="mt-8 text-lg text-center text-gray-600">
        If you have any questions or suggestions regarding delivery, please
        contact us by phone +380123456789 or by e-mail info@ecoshop.com.ua. We
        are always happy to help you.
      </p>
    </div>
  );
};

export default Shipment;

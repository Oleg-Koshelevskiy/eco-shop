import Image from "next/image";

const Shipment = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="secondary_header">Доставка</h1>
      <p className="mt-4 text-lg text-center text-gray-600">
        Ми пропонуємо вам кілька варіантів доставки для вашої зручності та
        економії.
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
            Нова Пошта
          </h2>
          <p className="mt-4 text-gray-700">
            Доставка до відділення або адреси за 1-3 дні. Вартість залежить від
            ваги та розміру посилки. Ви можете розрахувати вартість на сайті
            Нової Пошти.
          </p>
          <a href="https://novaposhta.ua/" className="main_btn mt-4">
            Перейти на сайт
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
          <h2 className="mt-4 text-2xl font-medium text-gray-800">Укрпошта</h2>
          <p className="mt-4 text-gray-700">
            Доставка до відділення або адреси за 3-7 днів. Вартість залежить від
            ваги та розміру посилки. Ви можете розрахувати вартість на сайті
            Укрпошти.
          </p>
          <a href="https://ukrposhta.ua/" className="main_btn mt-4">
            Перейти на сайт
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
            Міст Експрес
          </h2>
          <p className="mt-4 text-gray-700">
            Доставка до відділення або адреси за 1-2 дні. Вартість залежить від
            ваги та розміру посилки. Ви можете розрахувати вартість на сайті
            Міст Експрес.
          </p>
          <a href="https://meest-express.com.ua/" className="main_btn mt-4">
            Перейти на сайт
          </a>
        </div>
      </div>
      <p className="mt-8 text-lg text-center text-gray-600">
        Якщо у вас є питання або пропозиції щодо доставки, будь ласка,
        зв'яжіться з нами за телефоном +380123456789 або електронною поштою
        info@ecoshop.com.ua. Ми завжди раді вам допомогти.
      </p>
    </div>
  );
};

export default Shipment;

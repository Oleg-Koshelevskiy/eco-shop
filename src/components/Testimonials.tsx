import Image from "next/image";

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <h2 className="secondary_header">Що наші клієнти говорять про нас</h2>
        <p className="mt-6 md:text-lg leading-8 text-center text-gray-600">
          Ми раді, що допомогли тисячам людей зробити своє життя більш
          екологічним та здоровим за допомогою наших продуктів і сервісів.
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
                  Олена Петренко
                </h3>
                <p className="text-sm text-gray-500">Вчителька</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 italic">
                "Я дуже задоволена своїм замовленням. Продукти якісні, смачні і
                корисні. Доставка швидка і надійна. Обслуговування привітне і
                ввічливе. Я рекомендую цей магазин усім, хто хоче жити еко."
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
                  Ігор Ковальчук
                </h3>
                <p className="text-sm text-gray-500">Студент</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 italic">
                "Я замовляю продукти з цього магазину вже декілька місяців і не
                планую зупинятися. Я люблю, що вони мають великий вибір
                еко-продуктів для різних потреб і смаків. Ціни доступні, а
                якість висока."
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
                  Марина Савченко
                </h3>
                <p className="text-sm text-gray-500">Блогерка</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 italic">
                “Я дуже вражена цим магазином. Вони не тільки продають чудові
                продукти, але й дбають про навколишнє середовище і соціальну
                відповідальність. Я отримала безкоштовну еко-сумку з моїм
                замовленням. Я дуже рада, що підтримую такий гарний проект.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

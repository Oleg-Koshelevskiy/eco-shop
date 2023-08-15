import { blurDataUrl } from "@/utils";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="secondary_header">Про нас</h1>
        <p className="mt-4 text-lg text-center text-gray-600">
          Ми - команда ентузіастів, які вірять, що екологічне життя - це не
          тільки мода, але й необхідність.
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
              Наша місія
            </h2>
            <p className="mt-4 text-gray-700">
              Наша місія - це допомогти людям зробити своє життя більш
              екологічним та здоровим за допомогою наших продуктів і сервісів.
              Ми пропонуємо вам широкий асортимент еко-продуктів для різних сфер
              життя: харчування, гігієни, догляду за собою, побуту, подорожей та
              інших. Всі наші продукти виготовлені з натуральних, органічних або
              перероблених матеріалів, які не шкодять навколишньому середовищу і
              вашому здоров'ю.
            </p>
            <p className="mt-4 text-gray-700">
              На нашому сайті ви можете знайти цікаві статті, вебінари,
              подкасти, квізи та інші матеріали, які розповідають про екологічні
              проблеми, рішення та ініціативи. Ви також можете приєднатися до
              нашої спільноти еко-активістів, які діляться своїм досвідом,
              ідеями та практиками еко-життя. Ми вважаємо, що разом ми можемо
              зробити світ кращим місцем для життя.
            </p>
            <h2 className="mt-8 text-3xl font-semibold text-green-600">
              Наша історія
            </h2>
            <p className="mt-4 text-gray-700">
              Наш магазин був заснований у 2020 році двома друзями, які мріяли
              про створення платформи для популяризації еко-життя в Україні.
              Вони почали з невеликого онлайн-магазину, який пропонував лише
              кілька видів еко-продуктів, але з часом розширили свій асортимент
              та аудиторію. Сьогодні наш магазин - це один з найбільших та
              найпопулярніших в Україні, який обслуговує тисячі клієнтів по всій
              країні. Ми також співпрацюємо з багатьма еко-брендами,
              організаціями та інфлюенсерами, які допомагають нам поширювати
              наше послання.
            </p>
            <h2 className="mt-8 text-3xl font-semibold text-green-600">
              Наша команда
            </h2>
            <p className="mt-4 text-gray-700">
              Наша команда - це група професіоналів, яким не байдуже майбутнє
              нашої планети. Ми працюємо з любов'ю та захопленням, щоб
              забезпечити вам найкращий сервіс, якість та ціну. Ми також
              навчаємося та розвиваємося разом з вами, слухаючи ваші потреби,
              побажання та відгуки. Ми вдячні вам за вашу підтримку та довіру.
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
                <h3 className="mt-4 text-xl font-medium text-gray-800">Анна</h3>
                <p className="mt-2 text-sm text-gray-600">Засновниця та CEO</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                  alt="Ivan"
                  className="rounded-full shadow"
                  width={128}
                  height={128}
                />
                <h3 className="mt-4 text-xl font-medium text-gray-800">Іван</h3>
                <p className="mt-2 text-sm text-gray-600">Засновник та CTO</p>
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
                  Олена
                </h3>
                <p className="mt-2 text-sm text-gray-600">Менеджер з продажу</p>
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
                  Петро
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Менеджер з маркетингу
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

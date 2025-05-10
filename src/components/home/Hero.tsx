import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Декоративный фон с линиями */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/90"></div>
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Левая колонка - Финальный курс */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Предэкзаменационный курс
            </h3>
            <p className="text-gray-700 mb-4">
              Для тех, кто хочет повторить 100% материала ЕГЭ/ОГЭ и проработать
              все типы заданий
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <span className="text-gray-400 mr-2">—</span>
                <div>
                  <p className="font-medium text-gray-800">
                    Финальный курс перед экзаменом
                  </p>
                  <p className="text-sm text-gray-600">
                    Последняя возможность повысить свой результат, набрать
                    высокие баллы и поступить на бюджет
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-gray-400 mr-2">—</span>
                <div>
                  <p className="font-medium text-gray-800">
                    Минимум воды, максимум практики
                  </p>
                  <p className="text-sm text-gray-600">
                    Только нужная теория и практика, чтобы закрыть пробелы и
                    разобраться в сложных темах
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button className="bg-black text-white hover:bg-gray-800">
                Выбрать курс
              </Button>
              <div className="text-right">
                <p className="text-sm text-gray-500">от 582 ₽ в рассрочку</p>
                <p className="text-xs text-gray-400">от 3 790 ₽ за весь курс</p>
              </div>
            </div>
          </div>

          {/* Правая колонка - Основной курс */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Основной курс 2025/2026
            </h3>
            <p className="text-gray-700 mb-4">
              Для учеников, которые хотят выгодно записаться на подготовку в
              следующем учебном году
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <span className="text-gray-400 mr-2">—</span>
                <div>
                  <p className="font-medium text-gray-800">
                    Выгодная стоимость
                  </p>
                  <p className="text-sm text-gray-600">
                    Успей занять место на курсе по сниженной цене
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-gray-400 mr-2">—</span>
                <div>
                  <p className="font-medium text-gray-800">
                    Уроки в формате вебинаров
                  </p>
                  <p className="text-sm text-gray-600">
                    Занятия делятся на теоретические и практические. Будет
                    возможность задать вопросы в чат во время урока!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button className="bg-black text-white hover:bg-gray-800">
                Выбрать курс
              </Button>
              <div className="text-right">
                <p className="text-sm text-gray-500">от 3 790 ₽/мес.</p>
                <p className="text-xs text-gray-400">
                  от 28 000 ₽ за весь курс
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Заголовок секции направлений */}
        <h2 className="text-3xl font-bold text-center mt-16 mb-12">
          Направления подготовки
        </h2>

        {/* Карточки направлений */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* ЕГЭ 11 класс */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6">
              <img
                src="https://via.placeholder.com/120/ff4455/ffffff?text=11"
                alt="ЕГЭ 11 класс"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">ЕГЭ 11 класс</h3>
            <Button
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
            >
              Выбрать предмет
            </Button>
          </div>

          {/* ЕГЭ 10 класс */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6">
              <img
                src="https://via.placeholder.com/120/44cc88/ffffff?text=10"
                alt="ЕГЭ 10 класс"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">ЕГЭ 10 класс</h3>
            <Button
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
            >
              Выбрать предмет
            </Button>
          </div>

          {/* ОГЭ 9 класс */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6">
              <img
                src="https://via.placeholder.com/120/44aaff/ffffff?text=9"
                alt="ОГЭ 9 класс"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">ОГЭ 9 класс</h3>
            <Button
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
            >
              Выбрать предмет
            </Button>
          </div>
        </div>

        {/* Вторая строка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 5-8 классы */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6">
              <img
                src="https://via.placeholder.com/120/5577ff/ffffff?text=5-8"
                alt="5-8 классы"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">5-8 классы</h3>
            <Button
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
            >
              Выбрать предмет
            </Button>
          </div>

          {/* Олимпиады */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6">
              <img
                src="https://via.placeholder.com/120/ffcc44/ffffff?text=O"
                alt="Олимпиады"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Олимпиады</h3>
            <Button
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
            >
              Выбрать предмет
            </Button>
          </div>

          {/* Репетиторы */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6">
              <img
                src="https://via.placeholder.com/120/ff8844/ffffff?text=P"
                alt="Репетиторы"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Репетиторы</h3>
            <Button
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
            >
              Выбрать предмет
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

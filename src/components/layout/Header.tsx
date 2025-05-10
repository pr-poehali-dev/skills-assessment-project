
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 py-4">
      <div className="container mx-auto px-4">
        {/* Верхняя часть с рекламными блоками */}
        <div className="flex flex-wrap items-center justify-between mb-6">
          {/* Левый блок */}
          <div className="bg-blue-50 text-blue-800 rounded-md px-3 py-1 text-sm flex items-center">
            <span>Финальный курс повторения всего материала ЕГЭ/ОГЭ</span>
          </div>

          {/* Средний блок только для десктопа */}
          <div className="hidden md:block">
            <img
              src="https://i.ibb.co/CQt116S/predbannik-logo.png"
              alt="Предбанник"
              className="h-10"
            />
          </div>

          {/* Правый блок */}
          <div className="bg-blue-50 text-blue-800 rounded-md px-3 py-1 text-sm flex items-center">
            <span className="mr-1">Первые занятия уже 11 мая</span>
            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 ml-2 text-xs py-1 h-auto"
            >
              Выбрать курс
            </Button>
          </div>
        </div>

        {/* Основное меню */}
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center">
            <img
              src="https://i.ibb.co/D8nkqbZ/umskul-logo.png"
              alt="УМСКУЛ"
              className="h-10"
            />
          </Link>

          {/* Главное меню - только для десктопа */}
          <nav className="hidden md:flex space-x-6 items-center">
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-gray-600 font-medium">
                Курсы <Icon name="ChevronDown" className="ml-1 h-4 w-4" />
              </button>
            </div>
            <Link
              to="/ege"
              className="text-gray-800 hover:text-gray-600 font-medium"
            >
              ЕГЭ
            </Link>
            <Link
              to="/oge"
              className="text-gray-800 hover:text-gray-600 font-medium"
            >
              ОГЭ
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-gray-600 font-medium">
                Другие направления{" "}
                <Icon name="ChevronDown" className="ml-1 h-4 w-4" />
              </button>
            </div>
            <Link
              to="/about"
              className="text-gray-800 hover:text-gray-600 font-medium"
            >
              О нас
            </Link>
          </nav>

          {/* Правая часть - телефон, вход и корзина */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+74951321392"
              className="text-gray-800 hover:text-gray-600 hidden md:block"
            >
              +7 (495) 132-13-92
            </a>
            <Button
              variant="outline"
              className="hidden md:flex border-gray-300"
            >
              Войти
            </Button>
            <button className="text-gray-800 p-2 relative">
              <Icon name="ShoppingCart" className="h-5 w-5" />
            </button>

            {/* Кнопка мобильного меню */}
            <button
              className="text-gray-800 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/courses"
                className="text-gray-800 hover:text-gray-600 font-medium py-2"
              >
                Курсы
              </Link>
              <Link
                to="/ege"
                className="text-gray-800 hover:text-gray-600 font-medium py-2"
              >
                ЕГЭ
              </Link>
              <Link
                to="/oge"
                className="text-gray-800 hover:text-gray-600 font-medium py-2"
              >
                ОГЭ
              </Link>
              <Link
                to="/other"
                className="text-gray-800 hover:text-gray-600 font-medium py-2"
              >
                Другие направления
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-gray-600 font-medium py-2"
              >
                О нас
              </Link>
              <a
                href="tel:+74951321392"
                className="text-gray-800 hover:text-gray-600 py-2"
              >
                +7 (495) 132-13-92
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Войти
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

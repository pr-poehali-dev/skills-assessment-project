
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">ЕГЭ Мастер</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8 text-white/90">
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <Link to="/subjects" className="hover:text-white transition-colors">Предметы</Link>
          <Link to="/about" className="hover:text-white transition-colors">О нас</Link>
          <Link to="/reviews" className="hover:text-white transition-colors">Отзывы</Link>
          <Link to="/blog" className="hover:text-white transition-colors">Блог</Link>
          <Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-800 hidden md:flex">
            <Icon name="Phone" className="mr-2 h-4 w-4" /> Записаться
          </Button>
          
          <button className="md:hidden text-white" aria-label="Меню">
            <Icon name="Menu" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

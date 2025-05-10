
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ЕГЭ Мастер</h3>
            <p className="text-sm mb-4">
              Профессиональная подготовка к ЕГЭ и ОГЭ с опытными преподавателями. 
              Гарантированный результат и индивидуальный подход к каждому ученику.
            </p>
            <div className="flex space-x-4">
              <a href="https://vk.com" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="MessageSquare" className="h-5 w-5" />
              </a>
              <a href="https://t.me" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Send" className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Предметы</h3>
            <ul className="space-y-2">
              <li><Link to="/subjects/math" className="hover:text-white transition-colors">Математика</Link></li>
              <li><Link to="/subjects/russian" className="hover:text-white transition-colors">Русский язык</Link></li>
              <li><Link to="/subjects/physics" className="hover:text-white transition-colors">Физика</Link></li>
              <li><Link to="/subjects/chemistry" className="hover:text-white transition-colors">Химия</Link></li>
              <li><Link to="/subjects/biology" className="hover:text-white transition-colors">Биология</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/teachers" className="hover:text-white transition-colors">Преподаватели</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Частые вопросы</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Блог</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Отзывы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 mr-2 mt-0.5 text-indigo-400" />
                <span>г. Москва, ул. Академика Королева, д. 12</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 mr-2 text-indigo-400" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="mailto:info@egemaster.ru" className="hover:text-white transition-colors">info@egemaster.ru</a>
              </li>
              <li className="flex items-center">
                <Icon name="Clock" className="h-5 w-5 mr-2 text-indigo-400" />
                <span>Пн-Пт: 10:00-20:00, Сб: 10:00-17:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 ЕГЭ Мастер. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

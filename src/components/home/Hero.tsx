
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute top-40 right-40 w-20 h-20 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Подготовка к ЕГЭ с гарантией высокого результата
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Индивидуальные и групповые занятия с опытными преподавателями. 
              90% наших учеников поступают в ведущие вузы России.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-100">
                Записаться на пробное занятие
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900">
                <Icon name="Play" className="mr-2 h-4 w-4" /> Смотреть видео
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 ml-0 md:ml-10">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">98%</div>
                  <p className="text-indigo-200">Успешная сдача ЕГЭ</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">15+</div>
                  <p className="text-indigo-200">Лет опыта</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">32</div>
                  <p className="text-indigo-200">Преподавателя</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">1200+</div>
                  <p className="text-indigo-200">Учеников ежегодно</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

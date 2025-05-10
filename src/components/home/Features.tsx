
import React from 'react';
import Icon from '@/components/ui/icon';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: 'Users',
    title: 'Индивидуальный подход',
    description: 'Разрабатываем персональную программу обучения под сильные и слабые стороны ученика'
  },
  {
    icon: 'CheckCircle',
    title: 'Преподаватели-эксперты',
    description: 'Наши репетиторы — действующие эксперты ЕГЭ и преподаватели ведущих вузов'
  },
  {
    icon: 'LineChart',
    title: 'Регулярный мониторинг',
    description: 'Отслеживаем прогресс ученика через систему пробных экзаменов и домашних заданий'
  },
  {
    icon: 'Clock',
    title: 'Гибкий график',
    description: 'Занятия в удобное время, включая выходные дни и вечернее время'
  },
  {
    icon: 'BookOpen',
    title: 'Авторские материалы',
    description: 'Эксклюзивные методические материалы для эффективной подготовки к ЕГЭ'
  },
  {
    icon: 'Video',
    title: 'Онлайн и офлайн формат',
    description: 'Выбирайте удобный формат обучения — в учебном центре или дистанционно'
  }
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему нас выбирают</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Наши преимущества, которые помогают ученикам достигать высоких результатов на экзаменах и поступать в желаемые вузы
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-indigo-100 text-indigo-700 p-3 rounded-full inline-block mb-4">
                <Icon name={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

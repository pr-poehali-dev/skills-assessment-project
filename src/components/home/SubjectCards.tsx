
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface Subject {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
}

const subjects: Subject[] = [
  {
    id: 'math',
    title: 'Математика',
    icon: 'Calculator',
    description: 'Профильный и базовый уровни. Индивидуальная программа под ваши цели.',
    color: 'bg-blue-500'
  },
  {
    id: 'russian',
    title: 'Русский язык',
    icon: 'BookOpen',
    description: 'Грамотность, сочинение, работа с текстом. От 80+ баллов.',
    color: 'bg-red-500'
  },
  {
    id: 'physics',
    title: 'Физика',
    icon: 'Atom',
    description: 'Теория и практика. Разбор сложных задач из части 2.',
    color: 'bg-purple-500'
  },
  {
    id: 'chemistry',
    title: 'Химия',
    icon: 'Flask',
    description: 'Органическая и неорганическая химия. Реакции, задачи, формулы.',
    color: 'bg-green-500'
  },
  {
    id: 'biology',
    title: 'Биология',
    icon: 'Microscope',
    description: 'Анатомия, ботаника, зоология, генетика. Работа с заданиями ЕГЭ.',
    color: 'bg-yellow-500'
  },
  {
    id: 'social',
    title: 'Обществознание',
    icon: 'Users',
    description: 'Все разделы курса. Эссе, аргументация, работа с документами.',
    color: 'bg-orange-500'
  },
];

const SubjectCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Предметы подготовки</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Выберите предметы, по которым вам требуется подготовка. 
            Наши преподаватели — эксперты ЕГЭ с многолетним опытом работы.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card key={subject.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className={`${subject.color} text-white rounded-full p-3 inline-block mb-4`}>
                  <Icon name={subject.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{subject.title}</h3>
                <p className="text-gray-600 mb-6">{subject.description}</p>
                <div className="flex justify-between items-center">
                  <Link to={`/subjects/${subject.id}`}>
                    <Button variant="outline" className="text-indigo-700 border-indigo-200 hover:bg-indigo-50">
                      Подробнее
                    </Button>
                  </Link>
                  <span className="text-gray-500 text-sm">от 1 200 ₽/час</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button size="lg" className="bg-indigo-700 hover:bg-indigo-800">
            Смотреть все предметы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubjectCards;

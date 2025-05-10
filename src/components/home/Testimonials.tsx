
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Testimonial {
  id: number;
  name: string;
  university: string;
  image: string;
  text: string;
  subjects: string[];
  score: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Анна Смирнова',
    university: 'МГУ им. Ломоносова',
    image: 'https://i.pravatar.cc/150?img=32',
    text: 'Благодаря занятиям с репетиторами ЕГЭ Мастер я смогла поступить на бюджет в МГУ! Особенно помогли занятия по математике и русскому языку, где разбирались все нюансы экзамена.',
    subjects: ['Математика', 'Русский язык'],
    score: 96
  },
  {
    id: 2,
    name: 'Максим Петров',
    university: 'МГТУ им. Баумана',
    image: 'https://i.pravatar.cc/150?img=59',
    text: 'После года подготовки с репетитором по физике я сдал ЕГЭ на 98 баллов! Преподаватель дал структурированные знания и научил решать самые сложные задачи части 2.',
    subjects: ['Физика', 'Математика'],
    score: 98
  },
  {
    id: 3,
    name: 'Екатерина Иванова',
    university: 'СПбГУ',
    image: 'https://i.pravatar.cc/150?img=5',
    text: 'Занималась с преподавателем по обществознанию и истории. Очень понравился формат занятий и дополнительные материалы. В итоге оба экзамена сданы выше 90 баллов!',
    subjects: ['Обществознание', 'История'],
    score: 93
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших учеников</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Более 5000 учеников успешно поступили в лучшие вузы страны после подготовки с нашими преподавателями
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Avatar className="h-14 w-14 mr-4 border-2 border-indigo-100">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-indigo-600">{testimonial.university}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1 mb-2 text-yellow-400">
                  <Icon name="Star" className="h-5 w-5" />
                  <Icon name="Star" className="h-5 w-5" />
                  <Icon name="Star" className="h-5 w-5" />
                  <Icon name="Star" className="h-5 w-5" />
                  <Icon name="Star" className="h-5 w-5" />
                </div>
                
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Предметы: {testimonial.subjects.join(', ')}</span>
                    <div className="flex items-center bg-indigo-600 text-white px-2 py-1 rounded text-sm">
                      <Icon name="Award" className="h-4 w-4 mr-1" />
                      {testimonial.score} баллов
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/reviews" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors inline-flex items-center">
            Смотреть все отзывы <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

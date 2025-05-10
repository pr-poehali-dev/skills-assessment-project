
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    agreement: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreement: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.subject || !formData.agreement) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      // Сброс формы
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        agreement: false
      });
      
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Запишитесь на бесплатное пробное занятие</h2>
              <p className="text-lg text-gray-600 mb-6">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут, 
                чтобы подобрать подходящего репетитора и удобное время для занятия.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4 mt-1">
                    <Icon name="CalendarCheck" className="h-5 w-5 text-indigo-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Удобное расписание</h3>
                    <p className="text-gray-600">Занятия в любой день недели с 9:00 до 21:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4 mt-1">
                    <Icon name="Map" className="h-5 w-5 text-indigo-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Удобное расположение</h3>
                    <p className="text-gray-600">Учебные центры в разных районах города</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4 mt-1">
                    <Icon name="ThumbsUp" className="h-5 w-5 text-indigo-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Гарантия результата</h3>
                    <p className="text-gray-600">Повышение уровня знаний уже после первого месяца занятий</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-lg border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Запись на занятие</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Введите ваше имя" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="+7 (___) ___-__-__" 
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="example@mail.ru" 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Предмет *</Label>
                      <Select value={formData.subject} onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите предмет" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="math">Математика</SelectItem>
                          <SelectItem value="russian">Русский язык</SelectItem>
                          <SelectItem value="physics">Физика</SelectItem>
                          <SelectItem value="chemistry">Химия</SelectItem>
                          <SelectItem value="biology">Биология</SelectItem>
                          <SelectItem value="social">Обществознание</SelectItem>
                          <SelectItem value="history">История</SelectItem>
                          <SelectItem value="english">Английский язык</SelectItem>
                          <SelectItem value="informatics">Информатика</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Дополнительная информация (предпочтительное время занятий, цели обучения и т.д.)" 
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="agreement" 
                        checked={formData.agreement}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor="agreement"
                        className="text-sm text-gray-600 leading-tight cursor-pointer"
                      >
                        Я согласен с <a href="/privacy" className="text-indigo-600 hover:underline">политикой конфиденциальности</a> и даю согласие на обработку персональных данных *
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      Записаться на пробное занятие
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Toaster } from "@/components/ui/toaster";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import SurveySection from './SurveySection';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';

// Типы для данных опроса
export type SurveyData = {
  cms: string[];
  programmingLanguage: string[];
  hasJsInterface: string;
  usesCSS: string;
  hasDatabase: string;
};

const SurveyForm: React.FC = () => {
  // Инициализация состояния опроса
  const [surveyData, setSurveyData] = useState<SurveyData>({
    cms: [],
    programmingLanguage: [],
    hasJsInterface: '',
    usesCSS: '',
    hasDatabase: '',
  });

  // Опции для CMS
  const cmsOptions = [
    { id: 'wordpress', label: 'Wordpress' },
    { id: 'drupal', label: 'Drupal' },
    { id: 'opencart', label: 'Opencart' },
    { id: 'html', label: 'HTML' },
    { id: 'tilda', label: 'Tilda' },
    { id: 'joomla', label: 'Joomla' },
    { id: 'ucoz', label: 'Ucoz' },
    { id: 'bitrix', label: 'Битрикс' },
    { id: 'modx', label: 'MODX' },
    { id: 'custom', label: 'Самописная' },
  ];

  // Опции для языков программирования
  const programmingLanguageOptions = [
    { id: 'c_cpp', label: 'C, C++' },
    { id: 'go', label: 'Go' },
    { id: 'php', label: 'PHP' },
    { id: 'ruby', label: 'Ruby' },
    { id: 'csharp', label: 'C#' },
    { id: 'java', label: 'Java' },
    { id: 'python', label: 'Python' },
    { id: 'swift', label: 'Swift' },
  ];

  // Обработчики изменений для различных типов вопросов
  const handleCheckboxChange = (name: keyof SurveyData, value: string, checked: boolean) => {
    setSurveyData(prev => {
      const currentValues = [...(prev[name] as string[])];
      
      if (checked) {
        return { ...prev, [name]: [...currentValues, value] };
      } else {
        return { ...prev, [name]: currentValues.filter(v => v !== value) };
      }
    });
  };

  const handleRadioChange = (name: keyof SurveyData, value: string) => {
    setSurveyData(prev => ({ ...prev, [name]: value }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверка на заполненность всех полей
    const isFormValid = 
      surveyData.cms.length > 0 &&
      surveyData.programmingLanguage.length > 0 &&
      surveyData.hasJsInterface !== '' &&
      surveyData.usesCSS !== '' &&
      surveyData.hasDatabase !== '';
    
    if (isFormValid) {
      console.log('Данные формы:', surveyData);
      toast({
        title: "Форма отправлена",
        description: "Спасибо за заполнение опроса!",
      });
    } else {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">Технический опрос</h1>
      
      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <SurveySection title="CMS">
              <CheckboxGroup 
                name="cms"
                options={cmsOptions}
                selectedValues={surveyData.cms}
                onChange={(value, checked) => handleCheckboxChange('cms', value, checked)}
              />
            </SurveySection>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <SurveySection title="Язык разработки">
              <CheckboxGroup 
                name="programmingLanguage"
                options={programmingLanguageOptions}
                selectedValues={surveyData.programmingLanguage}
                onChange={(value, checked) => handleCheckboxChange('programmingLanguage', value, checked)}
              />
            </SurveySection>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <SurveySection title="Интерфейс на JavaScript">
              <RadioGroup 
                name="hasJsInterface"
                options={[
                  { id: 'yes', label: 'Да' },
                  { id: 'no', label: 'Нет' },
                ]}
                selectedValue={surveyData.hasJsInterface}
                onChange={(value) => handleRadioChange('hasJsInterface', value)}
              />
            </SurveySection>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <SurveySection title="Используется CSS">
              <RadioGroup 
                name="usesCSS"
                options={[
                  { id: 'yes', label: 'Да' },
                  { id: 'no', label: 'Нет' },
                ]}
                selectedValue={surveyData.usesCSS}
                onChange={(value) => handleRadioChange('usesCSS', value)}
              />
            </SurveySection>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <SurveySection title="База данных">
              <RadioGroup 
                name="hasDatabase"
                options={[
                  { id: 'yes', label: 'Предусмотрена' },
                  { id: 'no', label: 'Не предусмотрена' },
                ]}
                selectedValue={surveyData.hasDatabase}
                onChange={(value) => handleRadioChange('hasDatabase', value)}
              />
            </SurveySection>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-6">
          <Button type="submit" size="lg">
            Отправить
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default SurveyForm;

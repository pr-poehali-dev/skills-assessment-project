
import React from 'react';
import { RadioGroup as UIRadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export interface Option {
  id: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ 
  name, 
  options, 
  selectedValue, 
  onChange 
}) => {
  return (
    <UIRadioGroup
      value={selectedValue}
      onValueChange={onChange}
      className="space-y-3"
    >
      {options.map((option) => (
        <div key={option.id} className="flex items-center space-x-2">
          <RadioGroupItem 
            value={option.id} 
            id={`${name}-${option.id}`} 
            className="data-[state=checked]:bg-blue-500"
          />
          <Label 
            htmlFor={`${name}-${option.id}`}
            className="text-base cursor-pointer"
          >
            {option.label}
          </Label>
        </div>
      ))}
    </UIRadioGroup>
  );
};

export default RadioGroup;

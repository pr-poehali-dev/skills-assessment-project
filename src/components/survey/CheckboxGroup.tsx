
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

export interface Option {
  id: string;
  label: string;
}

interface CheckboxGroupProps {
  name: string;
  options: Option[];
  selectedValues: string[];
  onChange: (value: string, checked: boolean) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ 
  name, 
  options, 
  selectedValues, 
  onChange 
}) => {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customOption, setCustomOption] = useState('');

  const handleAddCustomOption = () => {
    if (customOption.trim()) {
      onChange(customOption, true);
      setCustomOption('');
      setShowCustomInput(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
      {options.map((option) => (
        <div key={option.id} className="flex items-center space-x-2">
          <Checkbox 
            id={`${name}-${option.id}`}
            checked={selectedValues.includes(option.id)}
            onCheckedChange={(checked) => {
              onChange(option.id, checked as boolean);
            }}
          />
          <Label 
            htmlFor={`${name}-${option.id}`}
            className="text-base cursor-pointer"
          >
            {option.label}
          </Label>
        </div>
      ))}

      {showCustomInput ? (
        <div className="flex items-center space-x-2 col-span-2 mt-2">
          <Input
            value={customOption}
            onChange={(e) => setCustomOption(e.target.value)}
            placeholder="Введите свой вариант"
            className="flex-grow"
          />
          <Button
            type="button"
            onClick={handleAddCustomOption}
            size="sm"
          >
            Добавить
          </Button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowCustomInput(true)}
          className="text-blue-500 hover:text-blue-700 transition-colors flex items-center space-x-1 col-span-2 mt-2 text-left"
        >
          <Plus size={16} />
          <span>Добавить свой вариант</span>
        </button>
      )}
    </div>
  );
};

export default CheckboxGroup;

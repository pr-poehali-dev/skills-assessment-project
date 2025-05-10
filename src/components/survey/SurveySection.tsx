
import React from 'react';
import { Separator } from "@/components/ui/separator";

interface SurveySectionProps {
  title: string;
  children: React.ReactNode;
}

const SurveySection: React.FC<SurveySectionProps> = ({ title, children }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <Separator className="my-2" />
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default SurveySection;

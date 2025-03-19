
import React from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Calendar, Clock, Users } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  startDate: string;
  studentsCount: number;
  price: string;
  className?: string;
  isPremium?: boolean;
}

const CourseCard = ({
  title,
  description,
  imageUrl,
  duration,
  startDate,
  studentsCount,
  price,
  className,
  isPremium = false,
}: CourseCardProps) => {
  return (
    <div 
      className={cn(
        'relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl bg-white group',
        isPremium ? 'border-2 border-selectiveYellow' : 'border border-gray-100',
        className
      )}
    >
      {isPremium && (
        <div className="absolute top-5 right-5 z-10 bg-selectiveYellow text-resolutionBlue text-xs font-bold px-3 py-1 rounded-full">
          PREMIUM
        </div>
      )}
      
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-resolutionBlue">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-4 mb-5">
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-1 text-celestialBlue" />
            {duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={16} className="mr-1 text-celestialBlue" />
            {startDate}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users size={16} className="mr-1 text-celestialBlue" />
            {studentsCount} students
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-resolutionBlue">{price}</span>
          <Button variant={isPremium ? "secondary" : "primary"} size="sm">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

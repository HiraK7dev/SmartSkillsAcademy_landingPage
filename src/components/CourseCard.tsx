
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
  category?: string;
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
  category,
}: CourseCardProps) => {
  // Get gradient based on category or premium status
  const getGradient = () => {
    if (category === 'web') {
      return 'from-blue-500 to-blue-700';
    } else if (category === 'mobile') {
      return 'from-orange-500 to-orange-700';
    } else if (category === 'design') {
      return 'from-purple-500 to-purple-700';
    } else {
      return isPremium ? 'from-celestialBlue to-resolutionBlue' : 'from-selectiveYellow to-rust';
    }
  };

  return (
    <div 
      className={cn(
        'relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-xl bg-white group border border-gray-100',
        className
      )}
    >
      {/* Decorative top border with gradient */}
      <div className={`h-2 w-full bg-gradient-to-r ${getGradient()}`}></div>
      
      {isPremium && (
        <div className="absolute top-5 right-5 z-10 bg-gradient-to-r from-selectiveYellow to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          PREMIUM
        </div>
      )}
      
      <div className="h-52 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute top-0 right-0 opacity-5 w-40 h-40 -mt-10 -mr-10 bg-selectiveYellow rounded-full"></div>
        
        <h3 className="text-xl font-bold mb-2 text-resolutionBlue relative z-10">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2 relative z-10">{description}</p>
        
        <div className="flex flex-wrap gap-4 mb-5 relative z-10">
          <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
            <Clock size={16} className="mr-1 text-celestialBlue" />
            {duration}
          </div>
          <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
            <Calendar size={16} className="mr-1 text-celestialBlue" />
            {startDate}
          </div>
          <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
            <Users size={16} className="mr-1 text-celestialBlue" />
            {studentsCount} students
          </div>
        </div>
        
        <div className="flex items-center justify-between relative z-10">
          <span className="text-2xl font-bold bg-gradient-to-r from-resolutionBlue to-celestialBlue bg-clip-text text-transparent">{price}</span>
          <Button 
            variant={isPremium ? "secondary" : "primary"} 
            size="sm"
            className={`transition-all duration-300 hover:shadow-lg ${
              isPremium 
                ? 'bg-gradient-to-r from-celestialBlue to-resolutionBlue' 
                : 'bg-gradient-to-r from-orange-500 to-selectiveYellow'
            }`}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

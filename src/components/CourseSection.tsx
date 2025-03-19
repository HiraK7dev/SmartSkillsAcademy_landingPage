
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [visibleCourses, setVisibleCourses] = useState(6);

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master both frontend and backend development with React, Node.js, and MongoDB.",
      imageUrl: "https://placehold.co/600x400/1598F2/FFFFFF?text=Web+Development",
      category: "web",
      duration: "12 weeks",
      startDate: "Jan 15, 2024",
      studentsCount: 1243,
      price: "$999",
      isPremium: true
    },
    {
      id: 2,
      title: "iOS App Development",
      description: "Build native iOS applications using Swift and the latest Apple frameworks.",
      imageUrl: "https://placehold.co/600x400/FEB727/FFFFFF?text=iOS+Development",
      category: "mobile",
      duration: "10 weeks",
      startDate: "Feb 1, 2024",
      studentsCount: 856,
      price: "$899",
      isPremium: false
    },
    {
      id: 3,
      title: "Android App Development",
      description: "Create native Android apps using Kotlin and modern architecture patterns.",
      imageUrl: "https://placehold.co/600x400/56A6E1/FFFFFF?text=Android+Development",
      category: "mobile",
      duration: "10 weeks",
      startDate: "Jan 22, 2024",
      studentsCount: 927,
      price: "$899",
      isPremium: false
    },
    {
      id: 4,
      title: "React Frontend Mastery",
      description: "Deep dive into React, Redux, and modern frontend development practices.",
      imageUrl: "https://placehold.co/600x400/B04903/FFFFFF?text=React+Development",
      category: "web",
      duration: "8 weeks",
      startDate: "Feb 5, 2024",
      studentsCount: 1567,
      price: "$699",
      isPremium: false
    },
    {
      id: 5,
      title: "Cross-Platform App Development",
      description: "Build once, deploy everywhere with React Native and Flutter.",
      imageUrl: "https://placehold.co/600x400/13247E/FFFFFF?text=Cross+Platform",
      category: "mobile",
      duration: "9 weeks",
      startDate: "Jan 29, 2024",
      studentsCount: 1102,
      price: "$799",
      isPremium: true
    },
    {
      id: 6,
      title: "Backend Development with Node.js",
      description: "Create scalable backend systems with Node.js, Express, and various databases.",
      imageUrl: "https://placehold.co/600x400/1598F2/FFFFFF?text=Backend+Development",
      category: "web",
      duration: "8 weeks",
      startDate: "Feb 12, 2024",
      studentsCount: 875,
      price: "$749",
      isPremium: false
    },
    {
      id: 7,
      title: "Advanced JavaScript",
      description: "Deep dive into advanced JavaScript concepts, patterns, and modern ES6+ features.",
      imageUrl: "https://placehold.co/600x400/FEB727/FFFFFF?text=JavaScript",
      category: "web",
      duration: "6 weeks",
      startDate: "Feb 19, 2024",
      studentsCount: 1320,
      price: "$599",
      isPremium: false
    },
    {
      id: 8,
      title: "UI/UX for Developers",
      description: "Learn design principles and prototyping specifically for developers.",
      imageUrl: "https://placehold.co/600x400/56A6E1/FFFFFF?text=UI/UX+Design",
      category: "design",
      duration: "5 weeks",
      startDate: "Mar 4, 2024",
      studentsCount: 723,
      price: "$499",
      isPremium: false
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  const showMoreCourses = () => {
    setVisibleCourses(prev => Math.min(prev + 3, filteredCourses.length));
  };

  // Reset visible courses when changing tabs
  useEffect(() => {
    setVisibleCourses(6);
  }, [activeTab]);

  return (
    <section id="courses" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-celestialBlue/10 text-celestialBlue rounded-full text-sm font-medium mb-5">
            Our Course Catalog
          </span>
          <h2 className="section-heading">
            Discover Our <span className="text-gradient-blue">Premium Courses</span>
          </h2>
          <p className="section-subheading">
            Comprehensive, hands-on courses designed to take you from beginner to industry-ready professional.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'all' ? 'bg-white shadow-sm text-resolutionBlue' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Courses
            </button>
            <button
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'web' ? 'bg-white shadow-sm text-resolutionBlue' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('web')}
            >
              Web Development
            </button>
            <button
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'mobile' ? 'bg-white shadow-sm text-resolutionBlue' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('mobile')}
            >
              Mobile Development
            </button>
            <button
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'design' ? 'bg-white shadow-sm text-resolutionBlue' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('design')}
            >
              UI/UX Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.slice(0, visibleCourses).map((course, index) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              duration={course.duration}
              startDate={course.startDate}
              studentsCount={course.studentsCount}
              price={course.price}
              isPremium={course.isPremium}
            />
          ))}
        </div>

        {visibleCourses < filteredCourses.length && (
          <div className="text-center mt-12">
            <Button variant="outline" onClick={showMoreCourses} className="mx-auto">
              Load More Courses <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;

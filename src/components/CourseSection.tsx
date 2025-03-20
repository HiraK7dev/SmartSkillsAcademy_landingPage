
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
      description: "Master frontend and backend technologies to build complete web applications from scratch.",
      imageUrl: "https://placehold.co/600x400/1598F2/FFFFFF?text=Full+Stack",
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
      description: "Learn Swift and iOS frameworks to build professional, App Store-ready applications.",
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
      description: "Master Kotlin and Android Studio to create native Android applications with modern architecture.",
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
      title: "Frontend Development with React",
      description: "Become proficient in React, Redux, and modern frontend development practices and tools.",
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
      description: "Use React Native and Flutter to build mobile apps that work on both iOS and Android.",
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
      description: "Build scalable server-side applications with Node.js, Express, and various databases.",
      imageUrl: "https://placehold.co/600x400/1598F2/FFFFFF?text=Backend+Node.js",
      category: "web",
      duration: "8 weeks",
      startDate: "Feb 12, 2024",
      studentsCount: 875,
      price: "$749",
      isPremium: false
    },
    {
      id: 7,
      title: "UI/UX Design Fundamentals",
      description: "Learn essential design principles, user research methods, and prototyping techniques.",
      imageUrl: "https://placehold.co/600x400/FEB727/FFFFFF?text=UI/UX+Design",
      category: "design",
      duration: "6 weeks",
      startDate: "Feb 19, 2024",
      studentsCount: 1320,
      price: "$599",
      isPremium: false
    },
    {
      id: 8,
      title: "Advanced JavaScript Programming",
      description: "Deep dive into advanced JavaScript concepts, patterns, and modern ES6+ features.",
      imageUrl: "https://placehold.co/600x400/56A6E1/FFFFFF?text=JavaScript",
      category: "web",
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
            Industry-relevant courses designed by experts to help you master the skills employers are looking for.
          </p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto">
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
              category={course.category}
            />
          ))}
        </div>

        {visibleCourses < filteredCourses.length && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              onClick={showMoreCourses} 
              className="mx-auto hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-selectiveYellow/10"
            >
              Load More Courses <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;

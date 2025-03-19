
import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const InstructorSection = () => {
  const instructors = [
    {
      name: "Sarah Johnson",
      role: "Lead Web Developer",
      bio: "Former Google engineer with 8+ years of experience in web development and architecture.",
      image: "https://placehold.co/400x400/1598F2/FFFFFF?text=Sarah+J",
      specialties: ["React", "Node.js", "Cloud Architecture"],
      twitter: "#",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Michael Chen",
      role: "Mobile Development Lead",
      bio: "10+ years developing native and cross-platform mobile applications for Fortune 500 companies.",
      image: "https://placehold.co/400x400/13247E/FFFFFF?text=Michael+C",
      specialties: ["iOS", "Android", "React Native"],
      twitter: "#",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Jessica Rodriguez",
      role: "UI/UX Design Lead",
      bio: "Award-winning designer who has worked with startups and enterprise clients across various industries.",
      image: "https://placehold.co/400x400/FEB727/FFFFFF?text=Jessica+R",
      specialties: ["UI Design", "UX Research", "Design Systems"],
      twitter: "#",
      linkedin: "#",
      github: "#"
    },
    {
      name: "David Wilson",
      role: "Backend Development Lead",
      bio: "System architect specialized in building scalable backend solutions and cloud infrastructure.",
      image: "https://placehold.co/400x400/B04903/FFFFFF?text=David+W",
      specialties: ["Cloud Services", "Databases", "DevOps"],
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <section id="instructors" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          {/* <span className="inline-block px-4 py-1.5 bg-celestialBlue/10 text-celestialBlue rounded-full text-sm font-medium mb-5">
            Meet Our Team
          </span> */}
          <h2 className="section-heading">
            Learn From <span className="text-gradient-blue">Experts</span>
          </h2>
          <p className="section-subheading">
            Our instructors bring years of real-world experience to provide you with practical, industry-relevant education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <AnimatedCard key={index} delay={index * 150} className="h-full flex flex-col">
              <div className="relative mb-6 mx-auto">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center flex-grow">
                <h3 className="text-xl font-bold text-resolutionBlue mb-1">{instructor.name}</h3>
                <p className="text-celestialBlue font-medium mb-3">{instructor.role}</p>
                <p className="text-gray-600 mb-4 text-sm">{instructor.bio}</p>
                
                <div className="mb-5">
                  <p className="text-xs text-gray-500 mb-2">SPECIALTIES</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {instructor.specialties.map((specialty, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href={instructor.twitter} 
                  className="text-gray-400 hover:text-celestialBlue transition-colors"
                  aria-label={`${instructor.name}'s Twitter`}
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href={instructor.linkedin} 
                  className="text-gray-400 hover:text-celestialBlue transition-colors"
                  aria-label={`${instructor.name}'s LinkedIn`}
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={instructor.github} 
                  className="text-gray-400 hover:text-celestialBlue transition-colors"
                  aria-label={`${instructor.name}'s GitHub`}
                >
                  <Github size={18} />
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;

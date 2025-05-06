import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  college: string;
  branch: string;
  location: string;
  period: string;
  description: string[];
  CGPA?: number;
  Percentage?: number;
}

const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology',
    college: 'Vignans Institute of Information Technology',
    branch: 'Artificial Intelligence and Data Science',
    location: 'Visakhapatnam, India',
    period: 'Sept 2022 - Apr 2025',
    CGPA: 7.80,
    description: ['Pursuing B.Tech in AI and Data Science']
  },
  {
    id: 2,
    degree: 'Diploma',
    college: 'Sankethika Polytechnic College',
    branch: 'Computer Science Engineering',
    location: 'Visakhapatnam, India',
    period: 'Jun 2019 - Mar 2022',
    Percentage: 76,
    description: ['Completed Diploma in Computer Science Engineering']
  },
  {
    id: 3,
    degree: 'Secondary School',
    college: 'Ravindra bharathi School',
    branch: 'General Education',
    location: 'Visakhapatnam, India',
    period: 'Jun 2018 - Mar 2019',
    CGPA: 9.8,
    description: ['Completed secondary education with distinction']
  }
];

const EducationCard: React.FC<{ education: Education; index: number }> = ({ education, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && cardRef.current) {
            cardRef.current.classList.add('animate-slideIn');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`opacity-0 transition-all duration-700 ${
        isEven ? 'translate-x-8' : '-translate-x-8'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-bold mb-1">{education.degree}</h3>
        <h4 className="text-blue-600 dark:text-teal-400 font-medium mb-1">{education.college}</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-3">{education.branch}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{education.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{education.location}</span>
          </div>
        </div>
        
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          {education.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey has provided me with a strong foundation in technology and problem-solving.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          {/* Education cards */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={edu.id} className="relative flex items-center justify-center">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-teal-500 z-10"></div>
                
                {/* Card - alternating sides */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto'}`}>
                  <EducationCard education={edu} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
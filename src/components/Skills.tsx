import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
  color: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend', color: '#61DAFB' },
  { name: 'TypeScript', level: 85, category: 'frontend', color: '#3178C6' },
  { name: 'JavaScript', level: 95, category: 'frontend', color: '#F7DF1E' },
  { name: 'HTML/CSS', level: 90, category: 'frontend', color: '#E34F26' },
  { name: 'TailwindCSS', level: 85, category: 'frontend', color: '#06B6D4' },
  
  // Backend
  { name: 'Node.js', level: 80, category: 'backend', color: '#339933' },
  { name: 'Express', level: 75, category: 'backend', color: '#000000' },
  { name: 'MongoDB', level: 70, category: 'backend', color: '#47A248' },
  { name: 'PostgreSQL', level: 65, category: 'backend', color: '#336791' },
  { name: 'GraphQL', level: 60, category: 'backend', color: '#E10098' },
  
  // Tools
  { name: 'Git', level: 85, category: 'tools', color: '#F05032' },
  { name: 'Docker', level: 70, category: 'tools', color: '#2496ED' },
  { name: 'AWS', level: 65, category: 'tools', color: '#FF9900' },
  { name: 'Jest', level: 75, category: 'tools', color: '#C21325' },
  { name: 'Figma', level: 80, category: 'tools', color: '#F24E1E' },
];

const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && barRef.current) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = `${skill.level}%`;
                barRef.current.style.opacity = '1';
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [delay, skill.level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-1000 ease-out opacity-0 w-0"
          style={{ backgroundColor: skill.color }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career. Here's an overview of my technical capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-6 text-teal-600 dark:text-teal-400">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-amber-600 dark:text-amber-400">Tools & Technologies</h3>
            {toolsSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce platform built with React, Node.js, and MongoDB. Features include product filtering, user authentication, cart functionality, and secure payments.',
    image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/username/ecommerce'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app with drag-and-drop interface for managing tasks. Includes features like task categorization, due dates, priority levels, and team collaboration.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['TypeScript', 'React', 'Firebase', 'TailwindCSS'],
    liveUrl: 'https://example.com/taskapp',
    githubUrl: 'https://github.com/username/taskapp'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'An interactive weather application providing real-time weather data, forecasts, and historical weather patterns with visualizations.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'React', 'Chart.js', 'API'],
    liveUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/username/weather'
  }
];

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = selectedTag 
    ? projects.filter(project => project.tags.includes(selectedTag)) 
    : projects;

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's a selection of projects I've worked on. Each one presented unique challenges and opportunities to learn and grow.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              selectedTag === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover transform transition-transform duration-500 ${
                    hoveredProject === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                      aria-label="View live site"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
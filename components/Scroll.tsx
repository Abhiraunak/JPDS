"use client"
import React, { useRef, useEffect, useState } from 'react';


interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const HorizontalProjectScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Corporate Website Redesign",
      description: "Modern redesign for financial services company",
      imageUrl: "/corporate-redesign.jpg"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Complete shopping solution with custom features",
      imageUrl: "/ecommerce-platform.jpg"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure banking application for iOS and Android",
      imageUrl: "/mobile-banking.jpg"
    },
    {
      id: 4,
      title: "Travel Booking System",
      description: "All-in-one travel reservation platform",
      imageUrl: "/travel-booking.jpg"
    },
    {
      id: 5,
      title: "Healthcare Dashboard",
      description: "Patient management system with analytics",
      imageUrl: "/healthcare-dashboard.jpg"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "Workout and nutrition tracking platform",
      imageUrl: "/fitness-app.jpg"
    }
  ];

  // Handle scroll to center active item
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = 320; // Width of each card + gap
      const scrollLeft = activeIndex * cardWidth - (container.clientWidth / 2 - cardWidth / 2);
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveIndex(prev => Math.min(prev + 1, projects.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex(prev => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [projects.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project Showcase
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Scroll horizontally to explore our latest projects. Each card features a smooth zoom effect when it enters the viewport.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          {/* Navigation controls */}
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setActiveIndex(prev => Math.max(prev - 1, 0))}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
              disabled={activeIndex === 0}
            >
              Previous
            </button>
            <button 
              onClick={() => setActiveIndex(prev => Math.min(prev + 1, projects.length - 1))}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
              disabled={activeIndex === projects.length - 1}
            >
              Next
            </button>
          </div>
          
          {/* Scrollable container */}
          <div 
            ref={containerRef}
            className="w-full overflow-x-auto scrollbar-hide py-8 px-4"
          >
            <div className="flex gap-8 w-max mx-auto">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  isActive={activeIndex === index}
                  onSelect={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Pagination indicators */}
          <div className="flex gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-indigo-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Mobile swipe instructions */}
        <div className="mt-12 text-center md:hidden">
          <div className="inline-flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            <span className="text-gray-700">Swipe to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onSelect: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) observer.observe(cardRef.current);
    
    return () => {
      if (cardRef.current) observer.disconnect();
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      onClick={onSelect}
      className={`
        w-80 flex-shrink-0 cursor-pointer transition-all duration-300
        ${isActive ? 'scale-105' : 'scale-95 hover:scale-100'}
      `}
    >
      <div className={`
        bg-white rounded-xl shadow-lg overflow-hidden
        border-2 ${isActive ? 'border-indigo-500' : 'border-white'}
        transition-all duration-300
      `}>
        <div className="relative h-56 overflow-hidden">
          <div className={`
            w-full h-full transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]
            transform-gpu will-change-transform
            ${isVisible 
              ? 'scale-100 opacity-100' 
              : 'scale-110 opacity-90'
            }
          `}>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
          </div>
        </div>
        
        <div className="p-6">
          <h2 className={`mt-2 text-xl font-semibold tracking-widest uppercase transition-colors ${
            isActive ? 'text-indigo-600' : 'text-gray-800'
          }`}>
            {project.title}
          </h2>
          <p className="mt-2 text-gray-600">
            {project.description}
          </p>
          
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">Project ID: {project.id}</span>
            <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm hover:bg-indigo-200 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProjectScroll;
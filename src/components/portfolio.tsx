'use client';

import { useState } from 'react';

interface PortfolioProps {
  className?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export default function Portfolio({ className = '' }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: '사용자 친화적인 온라인 쇼핑몰 플랫폼 개발. 반응형 디자인과 직관적인 UX를 통해 매출 30% 증가 달성.',
      category: 'Web Development',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://example.com',
      github: 'https://github.com/example',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: '팀 협업을 위한 프로젝트 관리 도구. 실시간 업데이트와 간편한 인터페이스로 생산성 향상.',
      category: 'Web Application',
      image: '📋',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      link: 'https://example.com',
      github: 'https://github.com/example',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: '개인 포트폴리오 웹사이트. 모던한 디자인과 최적화된 성능으로 방문자 경험 향상.',
      category: 'Portfolio',
      image: '💼',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://example.com',
      github: 'https://github.com/example',
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: '비즈니스 데이터 시각화 대시보드. 실시간 모니터링과 인사이트 제공으로 의사결정 지원.',
      category: 'Data Visualization',
      image: '📊',
      technologies: ['React', 'D3.js', 'Express', 'MySQL'],
      link: 'https://example.com',
      github: 'https://github.com/example',
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
    <section
      id="portfolio"
      className={`py-12 sm:py-16 lg:py-20 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto px-2">
            창의적이고 혁신적인 프로젝트들을 통해 문제를 해결하고 가치를 창출합니다
          </p>
        </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-4 sm:p-6">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">{project.image}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-600 font-medium mb-3">
                    {project.category}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openModal(project)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 to-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base"
                  >
                    상세 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 상세 모달 */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="text-6xl text-center mb-6">
                {selectedProject.image}
              </div>
              
              <p className="text-blue-600 font-medium mb-4">
                {selectedProject.category}
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">사용 기술</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    라이브 데모
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

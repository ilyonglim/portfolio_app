'use client';

interface SkillsProps {
  className?: string;
}

interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    level: number;
    icon: string;
  }>;
}

export default function Skills({ className = '' }: SkillsProps) {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'Next.js', level: 88, icon: '▲' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Express', level: 75, icon: '🚀' },
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'PostgreSQL', level: 65, icon: '🐘' },
      ],
    },
    {
      title: 'Planning & Design',
      skills: [
        { name: 'Figma', level: 95, icon: '🎨' },
        { name: 'Adobe XD', level: 90, icon: '🎯' },
        { name: 'Sketch', level: 85, icon: '✏️' },
        { name: 'Principle', level: 80, icon: '⚡' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 88, icon: '📝' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'AWS', level: 65, icon: '☁️' },
        { name: 'Analytics', level: 85, icon: '📊' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-12 sm:py-16 lg:py-20 bg-gray-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto px-2">
            다양한 기술 스택과 도구를 활용하여 최적의 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-base sm:text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-700 text-sm sm:text-base">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 추가 스킬 태그 */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              'Agile/Scrum',
              'Project Management',
              'User Research',
              'A/B Testing',
              'SEO/SEM',
              'Content Strategy',
              'Brand Strategy',
              'Team Leadership',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-sm sm:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

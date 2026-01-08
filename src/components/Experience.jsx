import { useState } from 'react'

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0) // Default to latest experience (first one)

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Norsys Afrique',
      location: 'Agadir, Morocco',
      period: '07/2025 - 08/2025',
      description: [
        'Developed an internal web app for secure document management',
        'Collaborated with Agile/Scrum team and participated in continuous delivery through GitLab',
        'Implemented backend services and frontend features',
        'Contributed to code reviews and best practices',
      ],
      technologies: ['Scrum', 'Spring Boot', 'React.js', 'TypeScript', 'PostgreSQL', 'Flyway', 'Ollama', 'Docker'],
      type: 'internship',
    },
    {
      title: 'Data Analyst Intern',
      company: 'Agence Nationale de la Rénovation Urbaine',
      location: 'Rabat, Morocco',
      period: '07/2024 - 09/2024',
      description: [
        'Analyzed large Excel datasets, detecting anomalies and automating checks with Python',
        'Developed a desktop app to automate analysis and generate reports',
        'Implemented data validation and quality assurance processes',
        'Created visualizations for geospatial data analysis',
      ],
      technologies: ['Excel', 'Python', 'Tkinter', 'Pandas', 'GeoPandas', 'GIS'],
      type: 'internship',
    },
    {
      title: 'Software Developer Intern',
      company: 'Technocolabs Softwares',
      location: 'Indore, India (Remote)',
      period: '07/2024 - 09/2024',
      description: [
        'Introduction to code through the development of an e-learning platform',
        'Collaborated with an international team in an agile environment',
        'Implemented frontend features and state management',
        'Participated in sprint planning and code reviews',
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux.js'],
      type: 'internship',
    },
  ]

  const getTypeColor = () => {
    return 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-300 dark:border-pink-700'
  }

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Professional Experience
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Vertical Roadmap */}
              <div className="relative flex-shrink-0 w-8 flex justify-center">
                {/* Vertical Line */}
                <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-300 dark:from-pink-600 dark:via-pink-500 dark:to-pink-600"></div>
                
                {/* Points */}
                <div className="relative flex flex-col justify-between py-4" style={{ minHeight: `${experiences.length * 120}px` }}>
                  {experiences.map((exp, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      className={`relative z-10 flex items-center justify-center mb-16 last:mb-0 group transition-all duration-300 ${
                        selectedIndex === index ? 'scale-110' : 'hover:scale-105'
                      }`}
                      aria-label={`View ${exp.title} experience`}
                    >
                      {/* Point - centered on the line */}
                      <div
                        className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                          selectedIndex === index
                            ? 'bg-accent border-white dark:border-gray-800 shadow-lg shadow-pink-500/50 scale-125'
                            : 'bg-white dark:bg-gray-800 border-pink-400 dark:border-pink-500 group-hover:border-accent group-hover:bg-pink-200 dark:group-hover:bg-pink-900/50'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience Details */}
              <div className="flex-1 min-h-[400px]">
                <div 
                  key={selectedIndex}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 md:p-8 border-2 border-accent/30 h-full transition-all duration-500 ease-in-out animate-fade-in"
                >
                  {(() => {
                    const exp = experiences[selectedIndex]
                    return (
                      <>
                        {/* Badge and Period */}
                        <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor()}`}>
                            {exp.type === 'internship' ? 'Internship' : exp.type === 'part-time' ? 'Part-time' : 'Volunteer'}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {exp.period}
                          </span>
                        </div>

                        {/* Title and Company */}
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-6 flex-wrap">
                          <p className="text-lg font-semibold text-accent">
                            {exp.company}
                          </p>
                          <span className="text-gray-400">•</span>
                          <p className="text-gray-600 dark:text-gray-400">
                            {exp.location}
                          </p>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2 mb-6">
                          {exp.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                              <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-300 dark:border-gray-600">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md font-medium border border-gray-200 dark:border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience


import React from 'react'
import projects from '../data/projectsData'
import ProjectDetail from './ProjectDetail'

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null)
  const [activeFilter, setActiveFilter] = React.useState('All')

  const filters = [
    'All',
    'Full Stack',
    'Mobile',
    'Cloud & DevOps',
    'DevSecOps',
    'AI/ML',
  ]

  const matchesFilter = (project) => {
    if (activeFilter === 'All') return true

    const normalized = project.categories.map((category) => category.toLowerCase())

    if (activeFilter === 'Full Stack') {
      return normalized.some((category) => category.includes('full stack'))
    }

    if (activeFilter === 'Mobile') {
      return normalized.some((category) => category.includes('mobile'))
    }

    if (activeFilter === 'Cloud & DevOps') {
      return normalized.some((category) => category.includes('cloud') || category.includes('devops'))
    }

    if (activeFilter === 'DevSecOps') {
      return normalized.some((category) => category.includes('devsecops'))
    }

    if (activeFilter === 'AI/ML') {
      return normalized.some((category) => category.includes('ai') || category.includes('ml'))
    }

    return true
  }

  const filteredProjects = projects.filter(matchesFilter)

  return (
    <section id="projects" className="section-padding theme-page">
      <div className="container-max">
        <div className="mb-6 text-left">
          <div className="section-label">Projects</div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-3 py-2 text-xs font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-[#f5cfe0] text-[#111111]'
                  : 'bg-[#1a1a1a] text-white border border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.slug}
              className="theme-card rounded-xl p-6 flex flex-col no-border transition-none transform-none"
            >
              {project.categories && project.categories.length > 0 && (
                <div className="mb-3 flex flex-wrap items-center gap-1 text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#111111] dark:text-white/80">
                  {project.categories.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      {categoryIndex > 0 && <span className="mx-1">•</span>}
                      <span className="font-['Inter','-apple-system','BlinkMacSystemFont','sans-serif']">
                        {category}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              )}

              <h3 className="skills-panel-title text-2xl mb-4 text-[#111111] dark:text-white">
                <button onClick={() => setSelectedProject(project)} className="hover:underline text-left">
                  {project.name}
                </button>
              </h3>
              <p className="text-[#2f2f2f] dark:text-white mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-chip font-medium text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto justify-center">
                {project.github && project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="project-action-btn"
                  aria-label="View details"
                  title="View details"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.86 7.036 5 12 5s8.577 2.86 9.964 6.678a1.012 1.012 0 010 .644C20.577 16.14 16.964 19 12 19s-8.577-2.86-9.964-6.678z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  )
}

export default Projects


import React from 'react'
import projects from '../data/projectsData'
import ProjectDetail from './ProjectDetail'

const Projects = () => {
  // Pagination state
  const projectsPerPage = 6
  const [page, setPage] = React.useState(1)
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const [selectedProject, setSelectedProject] = React.useState(null)

  const startIndex = (page - 1) * projectsPerPage
  const pagedProjects = projects.slice(startIndex, startIndex + projectsPerPage)

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pagedProjects.map((project, index) => (
            <div
              key={project.slug}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                <button onClick={() => setSelectedProject(project)} className="hover:underline text-left">
                  {project.name}
                </button>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-accent text-sm rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-gray-800 dark:bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-500 transition-colors duration-200"
                >
                  GitHub
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 text-center px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center space-x-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700 dark:text-gray-300">
              Page {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects


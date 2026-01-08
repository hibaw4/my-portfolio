import React, { useState, useEffect } from 'react'

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') setActiveIndex((i) => Math.max(0, i - 1))
      if (e.key === 'ArrowRight') setActiveIndex((i) => Math.min(project.screenshots.length - 1, i + 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, project.screenshots.length])
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative max-w-4xl w-full mx-4 bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-auto max-h-[90vh]">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{project.name}</h1>
              {project.timeframe && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{project.timeframe}</p>
              )}
            </div>
            <button onClick={onClose} className="text-gray-700 dark:text-gray-300">✕</button>
          </div>

          <p className="mt-4 text-gray-700 dark:text-gray-300">{project.description}</p>

          {project.details && (
            <div className="mt-4">
              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
                {project.details.map((d, i) => (
                  <li key={i} className="mb-1">{d}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4">
            {project.screenshots && project.screenshots.length > 0 ? (
              <div className="mt-2 relative">
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-20">
                  <button
                    onClick={() => {
                      const el = document.getElementById(`screenshots-${project.slug}`)
                      if (el) el.scrollBy({ left: -300, behavior: 'smooth' })
                    }}
                    aria-label="Scroll left"
                    className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform ring-1 ring-gray-200 dark:ring-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>

                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-20">
                  <button
                    onClick={() => {
                      const el = document.getElementById(`screenshots-${project.slug}`)
                      if (el) el.scrollBy({ left: 300, behavior: 'smooth' })
                    }}
                    aria-label="Scroll right"
                    className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform ring-1 ring-gray-200 dark:ring-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div
                  id={`screenshots-${project.slug}`}
                  className="mt-2 flex gap-3 overflow-x-auto py-2 px-2 scrollbar-hide"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {project.screenshots.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      onClick={() => { setActiveIndex(i); setLightboxOpen(true) }}
                      className="flex-shrink-0 w-64 h-40 object-cover rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform"
                    />
                  ))}
                </div>

                {lightboxOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/70" onClick={() => setLightboxOpen(false)} />
                    <div className="relative z-50 max-w-[90%] max-h-[90%] flex items-center">
                      <button
                        onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                        className="absolute left-[-2.5rem] md:left-[-3rem] p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <img src={project.screenshots[activeIndex]} alt={`Large ${project.name} screenshot ${activeIndex + 1}`} className="max-w-full max-h-[80vh] rounded-md shadow-lg object-contain" />

                      <button
                        onClick={() => setActiveIndex((i) => Math.min(project.screenshots.length - 1, i + 1))}
                        className="absolute right-[-2.5rem] md:right-[-3rem] p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <button onClick={() => setLightboxOpen(false)} className="absolute top-[-2.5rem] right-0 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                        ✕
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-2 text-gray-600 dark:text-gray-400">No screenshots added yet.</div>
            )}
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-white dark:bg-gray-800 text-accent text-sm rounded-md font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded-md">
                GitHub
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent text-white rounded-md">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail

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
    <div className="fixed inset-0 z-50 flex items-center justify-center project-detail-overlay">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="project-modal relative max-w-4xl w-full mx-4 rounded-2xl overflow-hidden max-h-[90vh]">
        <div className="p-6 bg-[#111111] text-white">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="project-detail-title text-2xl md:text-3xl">{project.name}</h1>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {project.timeframe && (
                <p className="text-xs uppercase tracking-[0.18em] text-[#d7d7d7] whitespace-nowrap">
                  {project.timeframe}
                </p>
              )}
              <button onClick={onClose} className="text-[#f5cfe0] hover:text-white text-2xl leading-none">✕</button>
            </div>
          </div>

          {project.categories && project.categories.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.categories.map((category, index) => (
                <span
                  key={index}
                  className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full border border-white/10 bg-[#1a1a1a] text-white"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-[#2f2f2f] dark:text-[#d1d5db] leading-7">{project.description}</p>

              {project.details && (
                <ul className="mt-5 space-y-2 text-sm text-[#2f2f2f] dark:text-[#d1d5db]">
                  {project.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-[#f5cfe0]">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="pt-1">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#d9d9d9]">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, i) => (
                  <span key={i} className="project-tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            {project.screenshots && project.screenshots.length > 0 ? (
              <div className="mt-2">
                <div
                  id={`screenshots-${project.slug}`}
                  className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
                  style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
                >
                  {project.screenshots.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      onClick={() => { setActiveIndex(i); setLightboxOpen(true) }}
                      className="project-gallery-item flex-shrink-0 w-64 h-40 object-cover rounded-xl cursor-pointer border border-white/10"
                      style={{ scrollSnapAlign: 'start' }}
                    />
                  ))}
                </div>

                {lightboxOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/70" onClick={() => setLightboxOpen(false)} />
                    <div className="relative z-50 max-w-[90%] max-h-[90%] flex items-center">
                      <button
                        onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                        className="absolute left-[-2.5rem] md:left-[-3rem] p-2 rounded-full bg-[#1a1a1a] border border-white/10 text-[#f5cfe0]"
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <img src={project.screenshots[activeIndex]} alt={`Large ${project.name} screenshot ${activeIndex + 1}`} className="max-w-full max-h-[80vh] rounded-xl shadow-lg object-contain border border-white/10" />

                      <button
                        onClick={() => setActiveIndex((i) => Math.min(project.screenshots.length - 1, i + 1))}
                        className="absolute right-[-2.5rem] md:right-[-3rem] p-2 rounded-full bg-[#1a1a1a] border border-white/10 text-[#f5cfe0]"
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <button onClick={() => setLightboxOpen(false)} className="absolute top-[-2.5rem] right-0 p-2 rounded-full bg-[#1a1a1a] border border-white/10 text-[#f5cfe0]">
                        ✕
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>

          <div className="mt-6 flex justify-end">
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#f5cfe0] hover:text-white transition-colors"
              >
                View project on GitHub
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9c0-1.1.3-1.7-1.2-2.5 3.8-.4 7.8-1.8 7.8-8.1A6.2 6.2 0 0020 3.5 5.9 5.9 0 0019.8 2s-1.6-.5-5.1 1.9a17.1 17.1 0 00-9 0C5.3 1.5 3.7 2 3.7 2A5.9 5.9 0 003.5 3.5 6.2 6.2 0 003.5 12c0 6.3 4 7.7 7.8 8.1-.8.7-1.5 1.9-1.5 3.8V22" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail

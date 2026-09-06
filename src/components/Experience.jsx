import { useState } from 'react'

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0) // Default to latest experience (first one)

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Technocolabs Software',
      location: 'Indore, India (Remote)',
      date: 'July – Sept. 2024',
      description: [
        'Contributed to the development of features for a web-based e-learning and training management platform.',
        'Implemented interactive frontend features and state management, gaining hands-on experience in building web interfaces.',
        'Collaborated remotely with an international development team, participating in meetings and discussions.',
        'Discovered Git-based version control, collaborative development, and professional software engineering practices.',
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux'],
      type: 'internship',
    },
    {
      title: 'Data Analyst Intern',
      company: 'National Agency for Urban Renovation (ANRUR)',
      location: 'Rabat, Morocco (On-site)',
      date: 'July – Sept. 2024',
      description: [
        'Designed and developed a desktop application to automate quality control and analysis of complex Excel domain deliverables, reducing manual verification efforts.',
        'Implemented automated detection of structural, logical, and cross-file anomalies across large datasets using Python.',
        'Built data validation and quality assurance mechanisms to identify inconsistencies and improve the reliability of analytical deliverables.',
        'Automated the generation of PDF and Excel reports, facilitating auditing, error correction, and follow-up.',
      ],
      technologies: ['Python', 'Pandas', 'GeoPandas', 'Tkinter', 'GIS', 'Excel'],
      type: 'internship',
    },
    {
      title: 'Software Engineer Intern',
      company: 'Norsys Afrique',
      location: 'Agadir, Morocco (Hybrid)',
      date: 'July – August 2025',
      description: [
        'Developed a document management web application supporting users, projects, and role-based access control (RBAC).',
        'Designed and implemented backend services using Spring Boot, PostgreSQL, and Flyway, alongside frontend features with React.js.',
        'Integrated Ollama to automate document description generation, introducing AI-assisted functionality into the application.',
        'Deployed a containerized FTP server with Docker to support secure document storage and management.',
        'Contributed to code reviews, technical discussions, and continuous development within an Agile/Scrum team.',
      ],
      technologies: ['Spring Boot', 'React.js', 'PostgreSQL', 'Flyway', 'Docker', 'Ollama'],
      type: 'internship',
    },
    {
      title: 'Software Engineer Intern',
      company: 'Inforisk (End-of-Studies Internship)',
      location: 'Casablanca, Morocco (Hybrid)',
      date: 'Feb. – August 2026',
      description: [
        'Developed a configurable scoring solution for assessing the solvability of individuals and businesses, supporting profile analysis and business decision-making.',
        'Designed and developed a fully configurable scoring engine based on 40 business attributes, designed for integration across multiple system modules.',
        'Implemented individual score calculation processes according to business and system requirements.',
        'Developed a microservice for score calculation, enabling other system components to retrieve and integrate scoring results into solvency reports based on the requested report.',
        'Developed frontend interfaces for creating, configuring, and managing scoring models, including business attributes and scoring rules.',
        'Contributed to a flexible and reusable scoring architecture designed to adapt to evolving business rules and reporting requirements.',
      ],
      technologies: ['Spring Boot', 'Angular', 'Python', 'FastAPI', 'PostgreSQL', 'GitLab'],
      type: 'internship',
    },
  ]

  return (
    <section id="experience" className="section-padding theme-page">
      <div className="container-max">
          <div className="mb-6 text-left">
            <div className="section-label">Professional Experience</div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl p-6 md:p-10 relative overflow-hidden bg-[var(--page-bg)]">
            {/* central vertical line */}
            <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-1 transform -translate-x-1/2 bg-gradient-to-b from-[#f5cfe0] via-[#f0bfd7] to-[#f5cfe0]"></div>

            <div className="space-y-12">
              {/** Render experiences newest at top: reverse the array so index 0 is newest */}
              {experiences.slice().reverse().map((exp, idx) => {
                const isLeft = idx % 2 === 0
                const key = `exp-${idx}`

                // new data shape: title, company, location, date, description, technologies
                const title = exp.title || ''
                const company = exp.company || ''
                const period = exp.date || ''
                const location = exp.location || ''

                return (
                  <div key={key} className="flex items-start md:items-center md:gap-6">
                    {/* left column (card on left when isLeft) */}
                    <div className={`w-full md:w-1/2 md:flex md:justify-end ${isLeft ? '' : 'md:opacity-80'}`}>
                      <div className={`${isLeft ? 'md:mr-8' : 'hidden md:block'}`}>
                          {isLeft && (
                          <article
                            onClick={() => setSelectedIndex(idx)}
                            className={`theme-panel rounded-xl p-6 relative cursor-pointer` + (selectedIndex === idx ? ' transform scale-100' : '')}
                            style={{
                              width: 'calc(80% + var(--roadmap-width-offset))',
                              marginRight: 'calc(var(--roadmap-margin) * -1)',
                              backgroundColor: 'var(--card-bg-strong)',
                              border: 'none',
                              paddingTop: '3rem',
                            }}
                          >
                            <div className="mb-3">
                              <h4 className="skills-panel-title text-xl">{title}</h4>
                              {company && <div className="section-title text-base font-semibold text-[#e7a9c3] font-['Inter','-apple-system','BlinkMacSystemFont','sans-serif']">{company}</div>}
                              <div className="text-sm italic text-[rgba(229, 231, 235, 0.56)] mt-2">{location}</div>
                            </div>
                            <div className="experience-period">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                              <span>{period}</span>
                            </div>
                            <ul className="space-y-2 mb-3">
                              {(exp.description || []).map((it, i) => (
                                <li key={i} className="flex items-start gap-3 text-[#111111] dark:text-white">
                                  <span className="text-[#e7a9c3] mt-1.5">▸</span>
                                  <span>{it}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {Array.isArray(exp.technologies) && exp.technologies.map((t, ti) => (
                                <span key={ti} className="project-tech-tag">{t}</span>
                              ))}
                              {!Array.isArray(exp.technologies) && exp.techLine && <span className="project-tech-tag">{exp.techLine}</span>}
                            </div>
                          </article>
                        )}
                      </div>
                    </div>

                    {/* center point */}
                    <div className="w-12 flex justify-center relative z-20">
                      <button
                        onClick={() => setSelectedIndex(idx)}
                        className={`relative z-10 flex items-center justify-center mb-0 group transition-all duration-300 ${selectedIndex === idx ? 'scale-110' : 'hover:scale-105'}`}
                        aria-label={`View experience`}
                      >
                        <div className={`w-6 h-6 rounded-full transition-all duration-300 ${selectedIndex === idx ? 'point-selected' : 'point-default'}`} />
                      </button>
                    </div>

                    {/* right column (card on right when !isLeft) */}
                    <div className={`w-full md:w-1/2 ${!isLeft ? '' : 'md:opacity-80'}`}>
                      <div className={`${!isLeft ? 'md:ml-8' : 'hidden md:block'}`}>
                          {!isLeft && (
                          <article
                            onClick={() => setSelectedIndex(idx)}
                            className={`theme-panel rounded-xl p-6 relative cursor-pointer` + (selectedIndex === idx ? ' transform scale-100' : '')}
                            style={{
                              width: 'calc(80% + var(--roadmap-width-offset))',
                              marginLeft: 'calc(var(--roadmap-margin) * -1)',
                              backgroundColor: 'var(--card-bg-strong)',
                              border: 'none',
                              paddingTop: '3rem',
                            }}
                          >
                            <div className="mb-3">
                              <h4 className="skills-panel-title text-xl">{title}</h4>
                              {company && <div className="section-title text-base font-semibold text-[#e7a9c3] font-['Inter','-apple-system','BlinkMacSystemFont','sans-serif']">{company}</div>}
                              <div className="text-sm italic text-[rgba(229, 231, 235, 0.56)] mt-2">{location}</div>
                            </div>
                            <div className="experience-period">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                              <span>{period}</span>
                            </div>
                            <ul className="space-y-2 mb-3">
                              {(exp.description || []).map((it, i) => (
                                <li key={i} className="flex items-start gap-3 text-[#111111] dark:text-white">
                                  <span className="text-[#e7a9c3] mt-1.5">▸</span>
                                  <span>{it}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {Array.isArray(exp.technologies) && exp.technologies.map((t, ti) => (
                                <span key={ti} className="project-tech-tag">{t}</span>
                              ))}
                              {!Array.isArray(exp.technologies) && exp.techLine && <span className="project-tech-tag">{exp.techLine}</span>}
                            </div>
                          </article>
                        )}
                      </div>
                    </div>

                    {/* Mobile card: always show below the point */}
                    <div className="md:hidden w-full mt-4">
                      <article className="theme-panel rounded-xl p-4" style={{backgroundColor: 'var(--card-bg-strong)', border: 'none', paddingTop: '1.25rem'}}>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="skills-panel-title text-base">{title}</h4>
                            {company && <div className="section-title text-sm text-[#e7a9c3] font-['Inter','-apple-system','BlinkMacSystemFont','sans-serif']">{company}</div>}
                          </div>
                          <div className="text-sm text-[#2f2f2f] dark:text-white">{period}</div>
                        </div>
                        <p className="text-sm italic text-[rgba(229, 231, 235, 0.56)] mb-2">{location}</p>
                        <ul className="space-y-2 mb-2">
                          {(exp.description || []).map((it, i) => (
                            <li key={i} className="flex items-start gap-3 text-[#111111] dark:text-white">
                              <span className="text-[#e7a9c3] mt-1.5">▸</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(exp.technologies) && exp.technologies.map((t, ti) => (
                            <span key={ti} className="project-tech-tag">{t}</span>
                          ))}
                          {!Array.isArray(exp.technologies) && exp.techLine && <span className="project-tech-tag">{exp.techLine}</span>}
                        </div>
                      </article>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience


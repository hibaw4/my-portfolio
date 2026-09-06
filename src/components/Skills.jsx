import {
  FiCode,
  FiTool,
  FiCloud,
  FiDatabase,
} from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FiCode,
      skills: ['Java', 'Python', 'JavaScript'],
    },
    {
      title: 'Software Development',
      icon: FiTool,
      skills: ['Spring Boot', 'FastAPI', 'Node.js', 'REST APIs', 'React.js', 'Angular'],
    },
    {
      title: 'Cloud & DevOps',
      icon: FiCloud,
      skills: ['OCI', 'AWS', 'Docker', 'CI/CD'],
    },
    {
      title: 'Databases & Tools',
      icon: FiDatabase,
      skills: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'PL/SQL', 'Git', 'Linux', 'Bash', 'Postman', 'Figma'],
    },
  ]

  return (
    <section
      id="skills"
      className="section-padding theme-page"
    >
      <div className="container-max">
          <div className="mb-6 text-left">
            <div className="section-label">Technical skills</div>
            {/* <h2 className="section-title text-4xl font-bold text-[#111111] dark:text-white mb-6">
              Technical Skills
            </h2> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon

            return (
              <div
                key={index}
                className="theme-card p-8 rounded-xl shadow-md no-border"
              >
                <div className="mb-4 flex items-center gap-3">
                  {/* <Icon className="w-8 h-8 text-[#f5cfe0]" /> */}
                  <h3 className="skills-panel-title text-2xl text-[#111111] dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="w-auto">
                      <div className="skill-chip font-medium">
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

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
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C'],
    },
    {
      title: 'Software Development',
      icon: FiTool,
      skills: ['Spring Boot', 'JEE', 'Node.js', 'REST APIs', 'React', 'Angular'],
    },
    {
      title: 'Cloud & DevOps',
      icon: FiCloud,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Git', 'Linux'],
    },
    {
      title: 'Databases & Tools',
      icon: FiDatabase,
      skills: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'PL/SQL', 'Redis', 'Postman'],
    },
  ]

  return (
    <section
      id="skills"
      className="section-padding bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Icon className="w-8 h-8 text-accent" />
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
  key={i}
  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium 
             hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white 
             transition-all duration-300 cursor-default"
>
  {skill}
</span>

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

const Education = () => {
  const education = [
    {
      date: '2023 — 2026',
      title: "MEng in Software Engineering",
      school: 'ENSIAS — National School of Computer Science and Systems Analysis, Rabat',
      description:
        'Software engineering program combining strong theoretical foundations with hands-on software development. Coursework includes algorithms and data structures, object-oriented programming, software architecture, software engineering, databases, networks, application development, Linux systems, DevOps, DevSecOps, Agile methodologies, and project management.',
    },
    {
      date: '2021 — 2023',
      title: 'CNC (National Commun Contest), PCSI — PSI (Physics and Engineering Sciences)',
      school: 'CPGE Alqalam — Preparatory Classes for the Grandes Écoles, Agadir',
      description:
        'Two years of intensive preparation in mathematics, physics, chemistry, and computer science for the national engineering school entrance exams (CNC). Developed strong analytical thinking, mathematical rigor, scientific reasoning, discipline, time management, and problem-solving skills.\nRanked 136/1,141 in the national exam (Top 12%).',
    },
  ]

  const certifications = [
    {
      title: 'Meta Front-End Developer',
      issuer: 'Meta',
    },
    {
      title: 'Artificial Intelligence Analyst',
      issuer: 'IBM',
    },
  ]

  const languages = [
    {
      language: 'Arabic',
      proficiency: 'Native',
    },
    {
      language: 'French',
      proficiency: 'Fluent',
    },
    {
      language: 'English',
      proficiency: 'Fluent',
    }
  ]

  return (
    <section id="education" className="section-padding theme-page">
      <div className="container-max">
        <div className="mb-6 text-left">
            <div className="section-label">Education</div>
            {/* <h2 className="section-title text-4xl font-bold text-[#111111] dark:text-white mb-6">
              Example
            </h2> */}
          </div>

        {/* Education */}
        <div>
          {education.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10 py-10 border-b border-black/10 dark:border-white/10"
            >
              {/* Date */}
              <div className="font-mono text-sm tracking-wide text-[#6b7280] dark:text-[#9ca3af]">
                {item.date}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-mono text-2xl font-semibold text-[#111111] dark:text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-lg text-[#111111] dark:text-[#f3d8e4] mb-4 font-['Inter','-apple-system','BlinkMacSystemFont','sans-serif']">
                  {item.school}
                </p>

                <p className="text-base leading-relaxed text-[#6b7280] dark:text-[#9ca3af] max-w-3xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10 py-10 border-b border-black/10 dark:border-white/10">

          {/* Label */}
          <div className="font-mono text-sm tracking-wide text-[#6b7280] dark:text-[#9ca3af]">
            CERTIFICATIONS
          </div>

          {/* Certifications */}
          <div>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-black/10 dark:border-white/10 last:border-b-0"
              >
                <span className="text-base text-[#111111] dark:text-white">
                  {cert.title}
                </span>

                <span className="text-sm text-[#6b7280] dark:text-[#9ca3af]">
                  {cert.issuer}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-10 py-10">

          {/* Label */}
          <div className="font-mono text-sm tracking-wide text-[#6b7280] dark:text-[#9ca3af]">
            LANGUAGES
          </div>

          <div>
            {languages.map((lang, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-black/10 dark:border-white/10 last:border-b-0"
              >
                <span className="text-base text-[#111111] dark:text-white">
                  {lang.language}
                </span>

                <span className="text-sm text-[#6b7280] dark:text-[#9ca3af]">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education
const Education = () => {
  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Education
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Engineer's Degree in Software Engineering
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              ENSIAS - Ecole Nationale Supérieure d'Informatique et d'Analyse des Systèmes, Rabat
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">2023 - 2026</span>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Clubs: Forum GENI ENSIAS (sponsoring and prospection cell), IEEE ENSIAS Student Branch (technical and training cell)
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Morocco's pioneering institution for computer science, recognized for its academic excellence and commitment to cutting-edge technologies. Currently pursuing a software engineering degree with a strong balance between theoretical foundations and hands-on practice.
              Core coursework includes algorithms and data structures, object-oriented programming, software architecture, software engineering best practices, databases, networks, application development, Linux systems, DevOps and DevSecOps, Agile methodologies, project management. The program emphasizes software development practices, teamwork, and real-world projects, building solid expertise in system design, secure development, and scalable applications.
            </p>
          </div>


          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Preparatory Classes (CPGE), Physics and Engineering Sciences (PCSI-PSI)
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              CPGE Alqalam, Agadir
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">2021 - 2023</span>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              National ranking: 136/924 (Top ~15%)
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Two intensive years of rigorous academic training in mathematics, physics, chemistry, and computer science, designed to prepare students for highly competitive national engineering school entrance exams (CNC). The curriculum covered linear algebra, calculus, probability, mechanics, electromagnetism, thermodynamics, algorithms, and data structures, alongside philosophy in French and Arabic–French translation. This demanding program fostered strong analytical thinking, mathematical rigor, scientific reasoning, discipline, time management, and resilience under pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education


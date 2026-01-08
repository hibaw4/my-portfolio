const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 section-padding pt-32"
    >
      <div className="container-max text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
  Hi, I'm{' '}
  <span className="bg-gradient-to-r from-black to-pink-500 text-transparent bg-clip-text dark:from-white dark:to-pink-500">
    Hiba El Ouerkhaoui
  </span>
</h1>


          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Software Engineering Student
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Crafting Reliable & Scalable Software
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-accent border-2 border-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


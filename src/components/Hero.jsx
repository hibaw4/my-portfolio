const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32 theme-page">
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="animate-fade-in text-left">
            <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-black/5 bg-[#e8e8e8] px-5 py-3 text-sm font-medium text-[#111111] shadow-sm dark:border-white/10 dark:bg-[#1d1d1d] dark:text-white">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#4ade80]" />
                <span className="tracking-wide">Open to opportunities</span>
              </p>

              <h1 className="brand-script text-3xl font-bold leading-loose text-[#111111] dark:text-white sm:text-4xl lg:text-5xl">
                Building Across the Stack, Thinking Beyond It
              </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 section-text">
              I’m a Software Engineer interested in full-stack development, with a focus on backend engineering. I enjoy building reliable applications and understanding how systems work beneath the surface. I’m also actively expanding my knowledge in Cloud and DevOps, with a focus on scalable architectures, automation, and modern engineering practices.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-start">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#f5cfe0] text-[#111111] rounded-lg font-medium hover:bg-[#f0bfd7] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l4-4m-4 4l-4-4M4 20h16" />
                </svg>
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3 rounded-lg font-medium hover:bg-[#f5cfe0] hover:text-[#111111] transition-all duration-300 transform hover:scale-105"
                style={{background: '#4a4a4a5c', color: 'var(--text-default)'}}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="animate-fade-in flex justify-center lg:justify-end">
            <div className="flex h-[320px] w-full max-w-[320px] items-center justify-center rounded-[2rem] theme-card p-8 text-[var(--text-default)]">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#f5cfe0] text-2xl font-bold text-[#111111]">
                  H
                </div>
                <p className="text-lg font-medium">Photo Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


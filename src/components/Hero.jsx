import { useState } from 'react'

const Hero = () => {
  const [showResumeOptions, setShowResumeOptions] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stars = [
    { left: '8%', top: '18%', size: '2px', delay: '0s', duration: '4s' },
    { left: '18%', top: '72%', size: '1px', delay: '1s', duration: '5s' },
    { left: '28%', top: '35%', size: '2px', delay: '2s', duration: '4.5s' },
    { left: '38%', top: '82%', size: '1px', delay: '0.5s', duration: '5.5s' },
    { left: '48%', top: '15%', size: '1px', delay: '1.5s', duration: '4s' },
    { left: '58%', top: '65%', size: '2px', delay: '2.5s', duration: '5s' },
    { left: '68%', top: '28%', size: '1px', delay: '0.8s', duration: '4.5s' },
    { left: '76%', top: '78%', size: '2px', delay: '1.8s', duration: '5.5s' },
    { left: '84%', top: '42%', size: '1px', delay: '2.8s', duration: '4s' },
    { left: '92%', top: '20%', size: '2px', delay: '0.3s', duration: '5s' },
    { left: '12%', top: '48%', size: '1px', delay: '2.2s', duration: '4.5s' },
    { left: '32%', top: '60%', size: '2px', delay: '1.2s', duration: '5s' },
    { left: '72%', top: '55%', size: '1px', delay: '0.7s', duration: '4s' },
    { left: '88%', top: '68%', size: '1px', delay: '2s', duration: '5.5s' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 theme-page overflow-hidden"
    >
      {/* Animated stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-white animate-star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="container-max relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="animate-fade-in text-left max-w-4xl">
            {/* Open to opportunities */}
            <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-black/5 bg-[#e8e8e8] px-5 py-3 text-sm font-medium text-[#111111] shadow-sm dark:border-white/10 dark:bg-[#1d1d1d] dark:text-white">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-60"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4ade80]"></span>
              </span>

              <span className="tracking-wide">
                Open to opportunities
              </span>
            </p>

            {/* Title */}
            <h1 className="brand-script text-3xl font-bold leading-loose text-[#111111] dark:text-white sm:text-4xl lg:text-5xl">
              Building Across the Stack, Thinking Beyond It
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 section-text">
              I’m a Software Engineer passionate about full-stack development,
              with a particular focus on backend engineering and understanding how systems work beneath the surface.
              I enjoy building things, exploring how different pieces of technology come together,
              and continuously deepening my knowledge across the field: from building applications
              to understanding the underlying architecture and technologies. I’m currently looking for
              an opportunity where I can learn and contribute to meaningful projects.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-start">
              {/* Resume button + language options */}
              <div className="relative">
                <button
                  onClick={() => setShowResumeOptions(!showResumeOptions)}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#f5cfe0] text-[#111111] rounded-lg font-medium hover:bg-[#f0bfd7] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v12m0 0l4-4m-4 4l-4-4M4 20h16"
                    />
                  </svg>

                  Download Resume
                </button>

                {/* Resume language options */}
                {showResumeOptions && (
                  <div className="absolute left-0 top-full mt-3 text-sm animate-fade-in whitespace-nowrap">
                    <p className="text-[#6b7280] dark:text-[#9ca3af] mb-2">
                      Choose the resume language:
                    </p>

                    <div className="flex items-center gap-3">
                      <a
                        href="/cv_hibaelouerkhaoui_eng.pdf"
                        download
                        className="text-[#111111] dark:text-white hover:text-[#e7a9c3] dark:hover:text-[#e7a9c3] transition-colors duration-200 underline underline-offset-4"
                      >
                        English
                      </a>

                      <span className="text-[#9ca3af]">·</span>

                      <a
                        href="/cv_hibaelouerkhaoui_fr.pdf"
                        download
                        className="text-[#111111] dark:text-white hover:text-[#e7a9c3] dark:hover:text-[#e7a9c3] transition-colors duration-200 underline underline-offset-4"
                      >
                        French
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact button */}
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3 rounded-lg font-medium hover:bg-[#f5cfe0] hover:text-[#111111] transition-all duration-300 transform hover:scale-105"
                style={{
                  background: '#4a4a4a5c',
                  color: 'var(--text-default)',
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
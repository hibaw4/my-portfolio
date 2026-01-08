const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            <p>
              I’m Hiba, a final-year Software Engineering student at ENSIAS, driven by a passion for building scalable, high-quality software and digitalizing systems.
              I have hands-on experience in software development, with a strong focus on performance and data reliability.
            </p>
            <p>
              Currently, I’m strengthening my skills in Cloud and DevOps, exploring how modern infrastructures and automated pipelines
              improve deployment and system resilience. Organized, detail-oriented, and adaptable, I enjoy solving complex problems
              and continuously learning new technologies to deliver meaningful and well-crafted solutions.
            </p>
            {/* <p>
              I'm a passionate software engineering student with a strong interest in building 
              reliable and scalable software solutions. My journey in technology has led me to 
              focus on problem-solving and continuous learning, always seeking to understand the 
              underlying principles that make great software.
            </p>
            <p>
              I'm particularly drawn to backend development, cloud computing, and DevOps practices. 
              I enjoy working on systems that are both efficient and maintainable, and I'm always 
              eager to explore new technologies and methodologies that can improve how we build 
              and deploy software.
            </p>
            <p>
              With a growth mindset and a commitment to best practices, I'm excited about the 
              opportunities to contribute to meaningful projects and continue developing my skills 
              in the ever-evolving field of software engineering.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


import Image from "next/image";
import Navbar from "@/Components/navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="main-container">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="hero-heading">
            Hi, I'm a Web Developer
          </h1>
          <p className="hero-paragraph">
            I'm an intermediate web developer with strong expertise in HTML, CSS, and TypeScript.
            I specialize in building responsive and user-friendly web applications, and I’m always
            looking for new challenges to enhance my skills.
          </p>
          <button className="hero-button">
            View My Projects
          </button>
        </div>

        {/* Skills Section */}
        <section className="skills-section">
          <h2 className="skills-heading">My Skills</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill 1 */}
            <div className="skill-card">
              <h3 className="skill-title">HTML & CSS</h3>
              <p className="skill-description">
                Expert in building responsive layouts and maintaining accessibility.
              </p>
            </div>
            {/* Skill 2 */}
            <div className="skill-card">
              <h3 className="skill-title">TypeScript</h3>
              <p className="skill-description">
                Proficient with TypeScript for building scalable and reliable web apps.
              </p>
            </div>
            {/* Skill 3 */}
            <div className="skill-card">
              <h3 className="skill-title">JavaScript</h3>
              <p className="skill-description">
                Solid understanding of JavaScript for building interactive user interfaces.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <h2 className="cta-heading">Let’s Build Something Together</h2>
          <p className="cta-paragraph">
            Whether you have a project or just want to connect, feel free to reach out.
          </p>
          <button className="cta-button">
  <a href="/Contact">Contact Me</a>
</button>
        </section>
      </div>
    </main>
  );
}

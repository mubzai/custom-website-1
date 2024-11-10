import React from 'react';
import Navbar from '@/Components/navbar';


const About = () => {
  return (
    <div className="bg-gradient-custom min-h-screen text-custom-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-custom py-16">
        <div className="container-custom text-center">
          <h1 className="section-title">About Me</h1>
          <p className="section-content">
            I'm a passionate and creative web developer with a focus on creating clean, responsive, and engaging web experiences.
            My journey started with HTML and CSS, and I've since honed my skills in TypeScript and modern web development frameworks.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-custom">
        <div className="container-custom">
          <h2 className="section-title">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Skill 1 */}
            <div className="card">
              <h3 className="card-title">HTML & CSS</h3>
              <p className="card-text">
                Expert in building responsive layouts and maintaining accessibility.
              </p>
            </div>
            {/* Skill 2 */}
            <div className="card">
              <h3 className="card-title">TypeScript</h3>
              <p className="card-text">
                Proficient with TypeScript for building scalable and reliable web apps.
              </p>
            </div>
            {/* Skill 3 */}
            <div className="card">
              <h3 className="card-title">JavaScript</h3>
              <p className="card-text">
                Solid understanding of JavaScript for building interactive user interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gradient-custom">
        <div className="container-custom">
          <h2 className="section-title">Experience & Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Experience 1 */}
            <div className="card">
              <h3 className="card-title">Frontend Developer</h3>
              <p className="card-text">Worked on building clean, responsive, and interactive UIs.</p>
            </div>
            {/* Experience 2 */}
            <div className="card">
              <h3 className="card-title">Personal Projects</h3>
              <p className="card-text">
                Built multiple web applications showcasing skills in modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-custom">
        <div className="container-custom text-center">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-content">
            If you're looking for a dedicated web developer who is always eager to learn and create, let's get in touch.
          </p>
          <a href="/Contact" className="cta-button mt-8">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;

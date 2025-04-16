import FlyingCircl from "../composant/circle";

function About() {
  return (
    <>
      <div className="about-container">
        <FlyingCircl />
        <div>
          <h1>
            About Me<span>👋</span>
          </h1>
          <p>
            Hello! I’m Slimane Boudjelida, a 20-year-old Frontend Web Developer
            with a passion for building beautiful, interactive, and user-focused
            digital experiences. I bring energy, creativity, and a constant
            desire to learn and improve into every project I work on.
          </p>
          <h1>
            What I Do<span>💻</span>
          </h1>
          <p>
            As a frontend developer, I turn ideas and designs into responsive,
            high-performing, and visually engaging web interfaces using modern
            technologies and best practices.
          </p>
          <h2>🛠️ Core Skills & Technologies</h2>
          <ul>
            <li>Languages: HTML5, CSS3, JavaScript (ES6+)</li>
            <li>Frameworks & Libraries: React.js, Tailwind CSS</li>
            <li>Tools & Platforms: Git & GitHub, Vite, Figma, VS Code</li>
          </ul>
          <h1>
            My Mission <span>🚀</span>
          </h1>
          <p>
            My goal is to build web experiences that look great, feel intuitive,
            and perform smoothly. I’m always learning and aim to blend clean
            design with clean code in everything I create.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

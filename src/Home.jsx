/* Home.jsx */
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Navbar from "./Navbar"; // reusable navbar
import "./Home.css"; // custom CSS file

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="container">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#0f2027" } },
          particles: {
            number: { value: 70, density: { enable: true, area: 800 } },
            color: { value: ["#002F6C", "#F58220"] },
            shape: { type: "circle" },
            opacity: { value: 0.7 },
            size: { value: { min: 2, max: 5 } },
            move: { enable: true, speed: 1.5, outModes: { default: "out" } },
            links: { enable: true, color: "#002F6C", distance: 150, opacity: 0.3, width: 1 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 200, line_linked: { opacity: 0.5 } },
              push: { quantity: 3 },
            },
          },
          retina_detect: true,
        }}
        className="particles"
      />

      {/* Reusable Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          Innovate | <span className="orange">Code</span> | Engineer
        </motion.h2>
        <p className="hero-text">
          Empowering learners with the skills to master Data Structures,
          Web Development, and the combination of both — building
          problem-solving ability and real-world coding expertise.
        </p>
        <div className="hero-buttons">
          <button
            className="btn btn-orange"
            onClick={() => window.location.href = "/Course"}
          >
            Get Started
          </button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h3 className="section-title">Our Services</h3>
        <div className="service-grid">
          {[
            {
              title: "Data Structures & Algorithms (DSA)",
              desc: "Master problem-solving and logic-building with in-depth training in arrays, linked lists, trees, graphs, dynamic programming, and more. Prepare for coding interviews with real practice problems.",
            },
            {
              title: "Web Development",
              desc: "Learn full-stack web development with HTML, CSS, JavaScript, React, Node.js, and databases. Build responsive websites and real-world projects to showcase your skills.",
            },
            {
              title: "DSA + Web Development",
              desc: "A combined program designed to make you industry-ready. Strengthen your coding fundamentals with DSA while also gaining practical skills in front-end and back-end web development.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="service-card"
            >
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()} f(Y) SOLUTIONS. All rights reserved.</p>
        <div className="social-links">
          <div
            className="linkedin-link"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/fofy-solutions/posts/?feedView=all",
                "_blank"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0a66c2" width="28px" height="28px">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13 10.268h-3v-4.5c0-1.081-.02-2.471-1.507-2.471-1.509 0-1.74 1.178-1.74 2.396v4.575h-3v-9h2.882v1.23h.041c.402-.763 1.381-1.566 2.84-1.566 3.036 0 3.595 1.998 3.595 4.592v5.744z"/>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}

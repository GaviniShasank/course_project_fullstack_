import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Code, Database, Layers } from "lucide-react";

function Course() {
  const navigate = useNavigate();

  const courses = [
    {
      title: "DSA",
      desc: "Master Data Structures and Algorithms with hands-on problems.",
      icon: <Code size={48} color="#f58220" />,
    },
    {
      title: "Web Development",
      desc: "Learn frontend, backend, and full-stack web technologies.",
      icon: <Layers size={48} color="#f58220" />,
    },
    {
      title: "DSA + Web Dev",
      desc: "Combine problem-solving with real-world project building.",
      icon: <Database size={48} color="#f58220" />,
    },
  ];

  return (
    <div style={{ background: "#0f2027", minHeight: "100vh", fontFamily: "Arial, sans-serif", color: "#fff" }}>
      <Navbar />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "60vh",
          background: "linear-gradient(135deg, #0f2027, #002F6C)",
          padding: "0 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "15px" }}>🚀 Explore Our Courses</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", lineHeight: "1.6" }}>
          Learn the skills top tech companies value from DSA to Full-Stack Web Development. Build real projects and level up your problem-solving expertise.
        </p>
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px",
          padding: "80px 20px",
          background: "#fff",
          color: "#0f2027",
        }}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              flex: "0 1 280px",
              background: "#f4f4f9",
              borderRadius: "20px",
              padding: "30px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              borderTop: "6px solid #f58220",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
            }}
          >
            <div style={{ marginBottom: "20px" }}>{course.icon}</div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "15px" }}>{course.title}</h2>
            <p style={{ fontSize: "1rem", marginBottom: "25px" }}>{course.desc}</p>
            <button
              style={{
                backgroundColor: "#f58220",
                color: "#fff",
                border: "none",
                padding: "12px 25px",
                borderRadius: "10px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#d9731f")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f58220")}
              onClick={() => navigate("/signup")}
            >
              View
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Course;

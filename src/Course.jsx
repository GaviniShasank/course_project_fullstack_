import React from "react";
import movingImage from "./assets/moving.gif";

function Course() {
  const bannerWrapper = {
    width: "100%",
    height: "70vh",
    position: "relative",
    overflow: "hidden",
  };

  const bannerImg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const overlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
  };

  const bannerText = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "3rem",
    fontWeight: "bold",
    textShadow: "2px 2px 10px rgba(0,0,0,0.9)",
    textAlign: "center",
    letterSpacing: "2px",
  };

  const pageStyle = {
    background: "linear-gradient(135deg, #f4f4f9, #e0e7ff)",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  };

  const boxesSectionStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginTop: "-60px",
    flexWrap: "wrap",
    padding: "50px 20px",
  };

  const boxStyle = {
    background: "white",
    borderRadius: "20px",
    boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
    padding: "30px",
    width: "300px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    borderTop: "6px solid #4f46e5",
  };

  const boxTitle = {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#4f46e5",
  };

  const boxText = {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "20px",
  };

  const buyButton = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#4f46e5",
    color: "white",
    borderRadius: "10px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };

  // Courses data
  const courses = [
    {
      title: "DSA",
      desc: "Master Data Structures and Algorithms with hands-on problems.",
    },
    {
      title: "Web Development",
      desc: "Learn frontend, backend, and full-stack web technologies.",
    },
    {
      title: "Web Development + DSA",
      desc: "Get the ultimate combo: strengthen problem-solving with DSA and build real-world projects with Web Development.",
    },
  ];

  return (
    <div style={pageStyle}>
      {/* Banner Section */}
      <div style={bannerWrapper}>
        <img src={movingImage} alt="banner gif" style={bannerImg} />
        <div style={overlay}></div>
        <div style={bannerText}>🚀 Explore Our Courses</div>
      </div>

      {/* Boxes Section */}
      <div style={boxesSectionStyle}>
        {courses.map((course, index) => (
          <div
            key={index}
            style={boxStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow =
                "0px 12px 25px rgba(0,0,0,0.25)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0px 6px 20px rgba(0,0,0,0.15)";
            }}
          >
            <h2 style={boxTitle}>{course.title}</h2>
            <p style={boxText}>{course.desc}</p>
            <div
              style={buyButton}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#3730a3")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#4f46e5")
              }
            >
              Buy Course
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;

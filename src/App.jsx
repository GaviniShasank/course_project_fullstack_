import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./Signup.jsx";
import Signin from "./Signin.jsx";
import Appbar from "./Appbar.jsx";
import Course from "./Course.jsx";
import Home from "./Home.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import headerImage from "./assets/header.jpg";

function Layout() {
  const location = useLocation();

  // Hide Appbar on Home ("/") and Course ("/course")
  const hideAppbar = ["/", "/course"].includes(location.pathname.toLowerCase());

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        backgroundColor: "#eeeeee",
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Conditionally render Appbar */}
      {!hideAppbar && <Appbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;

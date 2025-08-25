import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Signup from "./Signup.jsx";
import Signin from "./Signin.jsx";
import Appbar from "./Appbar.jsx";
import Course from "./Course.jsx";
import Home from "./Home.jsx";
import ResetPassword from "./Reset.jsx";
import ForgotPassword from "./Forgotpassword.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import headerImage from "./assets/header.jpg";

function Layout() {
  const location = useLocation();
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
      {!hideAppbar && <Appbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
     <GoogleOAuthProvider clientId="576242058085-d7olhva4s8fadk5qen85l65hjide2do5.apps.googleusercontent.com">
    <Router>
      <Layout />
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;

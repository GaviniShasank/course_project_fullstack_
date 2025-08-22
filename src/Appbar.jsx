import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.jpg"; 

function Appbar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          height: 50,
          width: 50,
          borderRadius: "50%",
          objectFit: "cover",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      />
      <div>
        <Button
          variant="contained"
          onClick={() => navigate("/signup")}
          sx={{ mt: 1, mr: 2 }}
        >
          Signup
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/signin")}
          sx={{ mt: 1 }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Appbar;

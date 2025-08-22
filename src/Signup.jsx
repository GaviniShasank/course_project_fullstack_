import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";  // ✅ import navigate

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    // 👉 You can put validation or API call here
    // After success, redirect:
    navigate("/course");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url("/src/assets/background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: 400,
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          color: "#333333",
          textAlign: "left",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Create Account
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Password Requirements:
        </Typography>
        <ul style={{ fontSize: "14px", marginBottom: "20px" }}>
          <li>An uppercase character</li>
          <li>A numeric character</li>
          <li>An alphabetic character</li>
          <li>A minimum of 8 characters</li>
          <li>A lowercase character</li>
          <li>A special character</li>
        </ul>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField id="email" label="Email Address" variant="outlined" fullWidth />
          <TextField id="password" label="Password" type="password" variant="outlined" fullWidth />
          <TextField id="confirmPassword" label="Verify New Password" type="password" variant="outlined" fullWidth />
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 1 }}
            onClick={handleSignup}   // ✅ redirects on click
          >
            Create Account
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Signup;

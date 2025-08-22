import { Button, TextField, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSendOtp = () => {
    alert("OTP sent to your email!");
    navigate("/resetpassword"); 
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
          textAlign: "center",
          color: "#333333",
        }}
      >
        <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
          Forgot Password
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField
            id="email"
            label="Email Address"
            variant="outlined"
            fullWidth
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleSendOtp}
          >
            Send OTP
          </Button>

          <Button
            variant="text"
            size="small"
            sx={{ color: "#1976d2", mt: 1 }}
            onClick={() => navigate("/signin")}
          >
            Back to Login
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default ForgotPassword;

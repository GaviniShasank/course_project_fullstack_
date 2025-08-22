import { Button, TextField, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const handleReset = () => {
    alert("Password has been reset successfully!");
    navigate("/signin"); 
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
          Reset Password
        </Typography>

        <Typography variant="body2" gutterBottom sx={{ mb: 2, color: "#555" }}>
          Enter the OTP sent to your email and set your new password.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField
            id="otp"
            label="OTP"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="newPassword"
            label="New Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="confirmPassword"
            label="Re-enter New Password"
            type="password"
            variant="outlined"
            fullWidth
          />

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 1 }}
            onClick={handleReset}
          >
            Reset Password
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

export default ResetPassword;

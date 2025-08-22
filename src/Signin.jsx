import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const handleSignin = () => {
    // here you can add validation later if needed
    navigate("/course");
  };

  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            width: 400,
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            textAlign: "center",
            color: "#333333"
          }}
        >
          <Typography variant="h5" gutterBottom>Signin</Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField 
              id="username" 
              label="Email" 
              variant="outlined" 
              fullWidth 
            />
            <TextField 
              id="password" 
              label="Password" 
              type="password"
              variant="outlined" 
              fullWidth 
            />
            <Button 
              variant="contained" 
              size="large"
              sx={{ mt: 1 }}
              onClick={handleSignin}   // 👈 navigate to course
            >
              Signin
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Signin;

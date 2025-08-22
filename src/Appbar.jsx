import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Appbar() {
  let navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",padding: "20px 50px",
      }}
    >
      <Typography variant="h6">F(y)</Typography>
      <div>
        <Button variant="contained" 
        onClick={() => {
           navigate('/signup');
        }}
        sx={{ mt: 1, mr: 2 }}>
          Signup
        </Button>
        <Button variant="contained" 
        onClick={() => {
            navigate('/signin');
        }}
        sx={{ mt: 1 }}>
          Signin
        </Button>
      </div>
    </div>
  );
}

export default Appbar;

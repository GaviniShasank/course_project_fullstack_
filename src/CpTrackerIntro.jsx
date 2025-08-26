import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

// 3D Cube
function FloatingCube() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#F58220" metalness={0.6} roughness={0.3} />
    </mesh>
  );
}

function CpTrackerIntro() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        bgcolor: "black",
        color: "white",
      }}
    >
      {/* 3D Background */}
      <Canvas
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
        camera={{ position: [3, 3, 3] }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <FloatingCube />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Paper
                elevation={12}
                sx={{
                  p: 6,
                  borderRadius: 4,
                  backdropFilter: "blur(12px)",
                  background: "rgba(0,0,0,0.6)",
                  color: "white",
                }}
              >
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    color: "#F58220",
                    textShadow: "0 0 25px rgba(245,130,32,0.9)",
                    letterSpacing: 1,
                  }}
                >
                  🚀 CP Tracker
                </Typography>

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    color: "#ffffff",
                    mb: 2,
                    textShadow: "0 0 10px rgba(255,255,255,0.5)",
                  }}
                >
                  Currently Under Development 🔧
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ opacity: 0.9, lineHeight: 1.8, mb: 4 }}
                >
                  We are building an exciting platform to help you track your{" "}
                  <b>Competitive Programming</b> journey.  
                  Visualize progress, analyze performance, and grow with peers.  
                  Stay tuned — the future of CP tracking is on the way!
                </Typography>

                <Box>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      mr: 2,
                      bgcolor: "#F58220",
                      "&:hover": { bgcolor: "#d96a10" },
                      borderRadius: "30px",
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                    disabled
                  >
                    Coming Soon
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: "#F58220",
                      borderColor: "#F58220",
                      borderRadius: "30px",
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      fontSize: "1rem",
                      "&:hover": {
                        bgcolor: "rgba(245,130,32,0.1)",
                        borderColor: "#d96a10",
                      },
                    }}
                    disabled
                  >
                    Sign In
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CpTrackerIntro;

import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Divider,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { Email, Phone, LocationOn, LinkedIn, GitHub } from "@mui/icons-material";
import Navbar from "./Navbar";

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <Navbar />

      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{
                color: "#F58220",
                textShadow: "0px 0px 12px rgba(245,130,32,0.7)",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h6"
              maxWidth="700px"
              mx="auto"
              sx={{ opacity: 0.9, lineHeight: 1.7 }}
            >
              We'd love to hear from you. Reach out through any of the ways
              below.
            </Typography>
          </Box>
        </motion.div>

        {/* Contact Info */}
        <Grid container spacing={6} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={8}
                sx={{
                  p: 5,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #002F6C, #203a43)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#F58220" }}
                >
                  Get In Touch
                </Typography>
                <Divider
                  sx={{
                    width: 60,
                    mx: "auto",
                    mb: 3,
                    borderColor: "#F58220",
                    borderWidth: 2,
                  }}
                />

                <Box mb={3} display="flex" justifyContent="center" alignItems="center">
                  <Email sx={{ mr: 2, color: "#F58220" }} />
                  <Typography variant="body1">fofysolutions@gmail.com</Typography>
                </Box>

                <Box mb={3} display="flex" justifyContent="center" alignItems="center">
                  <Phone sx={{ mr: 2, color: "#F58220" }} />
                  <Typography variant="body1">+91 xxx xxx xxxx</Typography>
                </Box>

                <Box mb={3} display="flex" justifyContent="center" alignItems="center">
                  <LocationOn sx={{ mr: 2, color: "#F58220" }} />
                  <Typography variant="body1">
                    Hyderabad, Telangana, India
                  </Typography>
                </Box>

                {/* Socials */}
                <Box mt={3}>
                  <IconButton
                    href="https://www.linkedin.com/in/fofy-solutions?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Ba4uqwv2T1O%2BRu1xOV9kng%3D%3D"
                    target="_blank"
                    sx={{ color: "white", "&:hover": { color: "#F58220" } }}
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    href="https://github.com"
                    target="_blank"
                    sx={{ color: "white", "&:hover": { color: "#F58220" } }}
                  >
                    <GitHub />
                  </IconButton>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

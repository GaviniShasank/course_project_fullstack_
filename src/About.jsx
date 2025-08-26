import logo from "./assets/logo.jpg"
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  Divider,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #002F6C, #203a43, #2c5364)",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar fixed at top */}
      <Navbar />

      <Container maxWidth="lg" sx={{ flexGrow: 1, py: 10 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={12}>
            <img
             
             src={logo}
              alt="f(Y) Solutions Logo"
              style={{
                width: "130px",
                marginBottom: "20px",
                filter: "drop-shadow(0 0 18px rgba(245,130,32,0.8))",
              }}
            />
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{
                color: "#F58220",
                textShadow: "0px 0px 12px rgba(245,130,32,0.7)",
              }}
            >
              About f(Y) Solutions
            </Typography>
            <Typography
              variant="h6"
              sx={{ opacity: 0.9, lineHeight: 1.8 }}
              maxWidth="800px"
              mx="auto"
            >
              At <b style={{ color: "#F58220" }}>f(Y) Solutions</b>, we empower
              Computer Science enthusiasts with strong foundations in Data
              Structures & Algorithms (DSA), preparing them to shine in
              placements and excel in their careers.
            </Typography>
          </Box>
        </motion.div>

        {/* Mission & Vision */}
        <Grid container spacing={4} justifyContent="center" mb={12}>
          {[
            {
              title: "🚀 Our Mission",
              desc: "To empower students with practical problem-solving skills, industry-level mentorship, and a mindset of innovation.",
              color: "linear-gradient(135deg, #002F6C, #0f2027)",
            },
            {
              title: "🌍 Our Vision",
              desc: "To become a globally recognized platform that transforms students into job-ready professionals and innovators in Computer Science.",
              color: "linear-gradient(135deg, #F58220, #ff7e5f)",
            },
          ].map((item, i) => (
            <Grid item xs={12} md={5} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Card
                  elevation={8}
                  sx={{
                    borderRadius: 3,
                    background: item.color,
                    color: "white",
                    textAlign: "center",
                    p: 4,
                    height: "100%",
                    boxShadow: "0px 0px 25px rgba(0,0,0,0.6)",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.95 }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* What We Offer */}
        <Box textAlign="center" mb={12}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              color: "#F58220",
              textShadow: "0px 0px 10px rgba(245,130,32,0.8)",
            }}
          >
            What We Offer
          </Typography>
          <Divider
            sx={{
              width: 80,
              mx: "auto",
              mb: 6,
              borderColor: "#F58220",
              borderWidth: 2,
              opacity: 0.7,
            }}
          />
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Expert Guidance",
                desc: "Hands-on mentoring from industry professionals.",
                color: "linear-gradient(135deg, #002F6C, #203a43)",
              },
              {
                title: "Focused Curriculum",
                desc: "Tailored DSA roadmap designed for placements & success.",
                color: "linear-gradient(135deg, #F58220, #ff7e5f)",
              },
              {
                title: "Community Support",
                desc: "A thriving ecosystem fostering collaboration & growth.",
                color: "linear-gradient(135deg, #1d976c, #93f9b9)",
              },
              {
                title: "Career Growth",
                desc: "Step-by-step guidance to crack coding interviews & land jobs.",
                color: "linear-gradient(135deg, #7f00ff, #e100ff)",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={8}
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      textAlign: "center",
                      background: item.color,
                      color: "white",
                      height: "100%",
                      boxShadow: "0px 0px 20px rgba(0,0,0,0.6)",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.95 }}>
                      {item.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Founder
        <Box textAlign="center" py={8}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              color: "#F58220",
              textShadow: "0px 0px 8px rgba(245,130,32,0.7)",
            }}
          >
            Meet Our Founder
          </Typography>
          <Divider
            sx={{
              width: 80,
              mx: "auto",
              mb: 4,
              borderColor: "#F58220",
              borderWidth: 2,
              opacity: 0.7,
            }}
          />
          <Avatar
            src="/founder.jpg"
            alt="Founder"
            sx={{
              width: 160,
              height: 160,
              mx: "auto",
              mb: 2,
              border: "3px solid #F58220",
              boxShadow: "0 0 25px rgba(245,130,32,0.8)",
            }}
          />
          <Typography variant="h6" fontWeight="bold">
            Shasank Gavini
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9, mb: 3 }}>
            Founder & Mentor, f(Y) Solutions
          </Typography>
          <Typography
            variant="body1"
            maxWidth="700px"
            mx="auto"
            sx={{ opacity: 0.9, lineHeight: 1.8 }}
          >
            With a background in software engineering and a passion for teaching,
            Shasank founded f(Y) Solutions to bridge the gap between classroom
            knowledge and industry expectations, helping students achieve their
            dream careers.
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
}

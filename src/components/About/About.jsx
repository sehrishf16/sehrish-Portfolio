import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
} from "@mui/material";

const stats = [
  {
    title: "1+",
    subtitle: "Years Learning & Building",
  },
  {
    title: "5+",
    subtitle: "Projects Completed",
  },
  {
    title: "8+",
    subtitle: "Technologies",
  },
  {
    title: "2",
    subtitle: "Production Apps",
  },
];

const About = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
       
        <Typography
          variant="h3"
          align="center"
          fontWeight={700}
          gutterBottom
        >
          About Me
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 7 }}
        >
          Get to know me better
        </Typography>

        <Grid container spacing={6} alignItems="center">
         
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h4"
              fontWeight={700}
              gutterBottom
            >
              React Developer & React Native Developer
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 2,
                fontSize: "1.05rem",
              }}
            >
              I'm <strong>Sehrish Fatema</strong>, a passionate Frontend
              Developer focused on building clean, responsive and
              user-friendly web and mobile applications.

              <br />
              <br />

              I have hands-on experience with <strong>React</strong>,
              <strong> React Native</strong>,
              <strong> Material UI</strong>,
              <strong> Redux Toolkit</strong>,
              <strong> TypeScript</strong>,
              <strong> REST APIs</strong> and modern JavaScript.

              <br />
              <br />

              During my internship, I contributed to production
              applications like <strong>SafeWheels</strong> and
              <strong> AWN (Legal Advice Platform)</strong>, where I
              developed reusable UI components, integrated APIs and
              implemented responsive user interfaces.

              <br />
              <br />

              I enjoy transforming ideas into intuitive digital
              experiences while continuously expanding my expertise in
              modern frontend technologies, DevOps and Cloud.
            </Typography>
          </Grid>

          
          <Grid size={{ xs: 12, md: 5 }}>
            <Grid container spacing={3}>
              {stats.map((item) => (
                <Grid
                  size={{ xs: 6 }}
                  key={item.title}
                >
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      height: 170,
                      borderRadius: 4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      transition: "0.3s",

                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 8,
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      fontWeight={700}
                      color="primary"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
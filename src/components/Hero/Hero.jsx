import React from "react";
import { Box, Button, Container, Typography, Stack } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./Hero.css";
import profile from "../../assets/images/profile.png";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="hero"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            minHeight: "60vh",
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography className="hero-greeting">👋 Hello, I'm</Typography>

            <Typography variant="h2" className="hero-title">
              Sehrish Fatema
            </Typography>

            <Typography variant="h5" className="hero-role">
              Software Developer
            </Typography>

            <Typography className="hero-description">
              Passionate about building beautiful, responsive and user-friendly
              web & mobile applications using React, React Native, Material UI,
              Redux Toolkit and TypeScript.
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              sx={{
                mt: 4,
                mb: 4,
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<DownloadIcon />}
                component="a"
                href="/Sehrishf%20CV%20-%201.pdf"
                download="Sehrishf CV - 1.pdf"
              >
                Download Resume
              </Button>

              <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              justifyContent={{
                xs: "center",
                md: "flex-start",
              }}
            >
              <Button
                href="https://github.com/sehrishf16"
                target="_blank"
                variant="text"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>

              <Button
                href="https://www.linkedin.com/in/sehrish-fatema-1856b3259"
                target="_blank"
                variant="text"
                startIcon={<LinkedInIcon />}
              >
                LinkedIn
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="hero-image-container">
              <img src={profile} alt="Sehrish Fatema" className="hero-image" />
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Hero;

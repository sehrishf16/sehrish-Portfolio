import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
} from "@mui/material";

import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects"
    sx={{
        py: { xs: 8, md: 12 },
      }}>
      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 8,
            md: 10,
          },
        }}
      >
       
        <Typography
          variant="h3"
          align="center"
          fontWeight={700}
          gutterBottom
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.6rem",
              md: "3.4rem",
            },
          }}
        >
          Featured Projects
        </Typography>

      
        <Typography
          align="center"
          color="text.secondary"
          sx={{
            fontSize: {
              xs: "1rem",
              md: "1.1rem",
            },
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Here are some projects I've built using modern technologies.
        </Typography>

        
        <Box
          sx={{
            mt: {
              xs: 5,
              md: 8,
            },
          }}
        >
          <Grid
            container
            spacing={{
              xs: 3,
              md: 4,
            }}
          >
            {projects.map((project) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={project.id}
                sx={{
                  display: "flex",
                }}
              >
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            mt: {
              xs: 6,
              md: 8,
            },
            display: "flex",
            justifyContent: "center",
          }}
        >
        
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
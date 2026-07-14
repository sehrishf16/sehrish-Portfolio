import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <Container maxWidth="lg">
  

        <Typography
          variant="h3"
          align="center"
          fontWeight={700}
          gutterBottom
        >
          Featured Projects
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          mb={7}
        >
          Here are some projects I've built using modern technologies.
        </Typography>



        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid
              item
              xs={12}
              md={6}
              key={project.id}
            >
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>



        <Box
          mt={8}
          display="flex"
          justifyContent="center"
    
        >
  
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
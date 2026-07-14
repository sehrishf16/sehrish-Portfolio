import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
} from "@mui/material";

import skills from "../../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills">
      <Container maxWidth="lg">

        <Typography
          variant="h3"
          align="center"
          fontWeight={700}
          gutterBottom
        >
          My Skills
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          mb={6}
        >
          Technologies I work with
        </Typography>


        {skills.map((category) => (

          <Box key={category.category} mb={6}>

            <Typography
              variant="h5"
              fontWeight={600}
              mb={3}
            >
              {category.category}
            </Typography>

            <Grid container spacing={3}>

              {category.items.map((skill) => (

                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  key={skill.name}
                >
                  <SkillCard skill={skill} />
                </Grid>

              ))}

            </Grid>

          </Box>

        ))}

        <Paper
          elevation={2}
          sx={{
            mt: 4,
            p: 2,
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={500}
            gutterBottom
          >
            Always Learning 🚀
          </Typography>

          <Typography color="text.secondary">
            I enjoy exploring new technologies and continuously
            improving my skills. Currently focusing on DevOps,
            Docker, AWS, CI/CD and modern cloud practices.
          </Typography>

        </Paper>

      </Container>
    </section>
  );
};

export default Skills;
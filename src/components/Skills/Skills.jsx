import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
} from "@mui/material";

import skills from "../../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills"
    sx={{
        py: { xs: 8, md: 12 },
      }}>
      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 6,
            md: 10,
          },
        }}
      >
        {/* Heading */}
        <Typography
          variant="h3"
          align="center"
          fontWeight={700}
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
            },
          }}
          gutterBottom
        >
          My Skills
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{
            mb: {
              xs: 5,
              md: 7,
            },
            fontSize: {
              xs: "1rem",
              md: "1.1rem",
            },
          }}
        >
          Technologies I work with
        </Typography>

        {skills.map((category) => (
          <Box
            key={category.category}
            sx={{
              mb: 7,
            }}
          >
            <Typography
              variant="h5"
              fontWeight={600}
              align="center"
              sx={{
                mb: 4,
                fontSize: {
                  xs: "1.4rem",
                  md: "1.8rem",
                },
              }}
            >
              {category.category}
            </Typography>

            
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: {
                  xs: 2,
                  sm: 3,
                  md: 3,
                },
              }}
            >
              {category.items.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </Box>
          </Box>
        ))}

        
        <Paper
          elevation={0}
          sx={{
            mt: 6,
            p: {
              xs: 2,
              md: 2,
            },
            textAlign: "center",
            borderRadius: 2,
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
            sx={{
              fontSize: {
                xs: "1.5rem",
                md: "2rem",
              },
            }}
          >
            Always Learning 🚀
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 1000,
              mx: "auto",
              lineHeight: 1.8,
              fontSize: {
                xs: "0.95rem",
                md: "1rem",
              },
            }}
          >
            I enjoy exploring new technologies and continuously improving
            my skills. Currently focusing on DevOps, Docker, AWS, CI/CD,
            Kubernetes and modern cloud practices.
          </Typography>
        </Paper>
      </Container>
    </section>
  );
};

export default Skills;
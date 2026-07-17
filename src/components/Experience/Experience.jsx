import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Chip,
  Stack,
} from "@mui/material";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import experience from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience"
    sx={{
        py: { xs: 8, md: 12 },
      }}>
      <Container maxWidth="lg">

        <Typography
          variant="h3"
          align="center"
          fontWeight={700}
          gutterBottom
          mb={3}
        >
          Experience
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          mb={7}
          
        >
          My professional journey so far.
        </Typography>

        {experience.map((item) => (
          <Paper
            key={item.id}
            elevation={4}
            sx={{
              mt:3,
              p: { xs: 2, md: 3 },
              mb: 4,
              borderRadius: 2,
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 16px 36px rgba(0,0,0,0.25)",
              },
            }}
          >

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
              flexWrap="wrap"
              gap={2}
              mb={3}
            >
              <Box display="flex" gap={2}>
                <BusinessCenterIcon
                  color="primary"
                  fontSize="large"
                />

                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    {item.role}
                  </Typography>

                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight={600}
                  >
                    {item.company}
                  </Typography>

                  <Typography color="text.secondary">
                    {item.duration}
                  </Typography>
                </Box>
              </Box>

              {item.current && (
                <Chip
                  label="Current"
                  color="success"
                  sx={{ fontWeight: 600 }}
                />
              )}
            </Box>

            

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 2,
                mb: 3,
              }}
            >
              {item.description}
            </Typography>

            

            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              flexWrap="wrap"
            >
              {item.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Paper>
        ))}
      </Container>
    </section>
  );
};

export default Experience;
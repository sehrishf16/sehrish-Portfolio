import React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";

import education from "../../data/education";

const Education = () => {
  return (
    <section id="education">
      <Container maxWidth="lg">
    

        <Typography
          variant="h3"
          align="center"
          fontWeight={700}
          gutterBottom
        >
          Education
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          mb={7}
        >
          My academic journey
        </Typography>

        <Box
          sx={{
            position: "relative",
            ml: {
              xs: 2,
              md: 5,
            },
          }}
        >
          

          <Box
            sx={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 4,
              bgcolor: "primary.main",
              borderRadius: 5,
            }}
          />

          {education.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                mb: 5,
                position: "relative",
              }}
            >
             

              <Box
                sx={{
                  width: 44,
                  height: 44,
                  bgcolor: "primary.main",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 2,
                }}
              >
                <SchoolIcon />
              </Box>

              

              <Paper
                elevation={3}
                sx={{
                  ml: 3,
                  p: 3,
                  flex: 1,
                  borderRadius: 3,
                  transition: ".3s",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow:
                      "0 12px 30px rgba(0,0,0,0.25)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                >
                  {item.degree}
                </Typography>

                <Typography
                  color="primary"
                  fontWeight={600}
                  mt={1}
                >
                  {item.institute}
                </Typography>

                <Typography
                  color="text.secondary"
                  mt={1}
                >
                  {item.duration}
                </Typography>

                <Typography
                  color="text.secondary"
                >
                  {item.location}
                </Typography>

                <Typography
                  mt={2}
                  lineHeight={1.8}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Education;
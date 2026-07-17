import React from "react";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        py: 5,
        bgcolor: "#111827",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={3}
          alignItems="center"
        >
         

          <Typography
            variant="h5"
            fontWeight={700}
            color="primary"
          >
            Sehrish fatema
          </Typography>

          

          <Typography
            color="text.secondary"
            align="center"
            maxWidth={550}
          >
            Thank you for visiting my portfolio.
            I'm passionate about building modern,
            responsive and user-friendly web &
            mobile applications.
          </Typography>

          

          <Stack
            direction="row"
            spacing={2}
          >
            <IconButton
              color="primary"
              href="https://github.com/sehrishf16"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              color="primary"
              href="https://www.linkedin.com/in/sehrish-fatema-1856b3259"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              color="primary"
              href="mailto:sehrish@example.com"
            >
              <EmailIcon />
            </IconButton>
          </Stack>

          

          <Typography
            color="text.secondary"
            align="center"
          >
            © {new Date().getFullYear()} Sehrish Fatema.
            All Rights Reserved.
          </Typography>

          

          <IconButton
            color="primary"
            onClick={scrollTop}
            sx={{
              border: "2px solid",
              borderColor: "primary.main",

              "&:hover": {
                bgcolor: "primary.main",
                color: "#fff",
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
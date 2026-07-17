import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Chip,
  Button,
  Box,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectCard = ({ project }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        overflow: "hidden",
        transition: "0.35s ease",
        position: "relative",

        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
        },
      }}
    >
      

      {project.featured && (
        <Box
          sx={{
            position: "absolute",
            top: 15,
            right: 15,
            bgcolor: "primary.main",
            color: "#fff",
            px: 2,
            py: 0.5,
            borderRadius: 5,
            fontSize: 12,
            fontWeight: 600,
            zIndex: 10,
          }}
        >
          Featured
        </Box>
      )}

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" fontWeight={700} gutterBottom>
          {project.title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mb: 3,
            lineHeight: 1.8,
            flexGrow: 1,
          }}
        >
          {project.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mb: 3,
          }}
        >
          {project.technologies.map((tech) => (
            <Chip key={tech} label={tech} color="primary" variant="outlined" />
          ))}
        </Box>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            mt: "auto",
            pt: 2,
          }}
        >
          
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

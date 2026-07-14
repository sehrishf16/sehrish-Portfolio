import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <Card
      sx={{
        width: 120,
        height: 150,
        borderRadius: "20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",

        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",

        border: "1px solid rgba(255, 255, 255, 0.18)",

        boxShadow: `
          0 8px 24px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.15)
        `,

        transition: "all 0.35s ease",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18), transparent 55%)",
          pointerEvents: "none",
        },

        "&:hover": {
          transform: "translateY(-8px) scale(1.03)",
          borderColor: "primary.main",

          boxShadow: (theme) => `
            0 18px 35px ${theme.palette.primary.main}30,
            inset 0 1px 0 rgba(255,255,255,0.25)
          `,
        },
      }}
    >
      <CardContent
        sx={{
          p: 2,
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            background: (theme) =>
              `linear-gradient(135deg,
                ${theme.palette.primary.light}20,
                ${theme.palette.primary.main}15)`,

            color: "primary.main",
            fontSize: "2.8rem",
            mb: 2,

            transition: "all 0.35s ease",

            ".MuiCard-root:hover &": {
              transform: "scale(1.1) rotate(8deg)",
            },
          }}
        >
          <Icon fontSize="inherit" />
        </Box>

        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{
            lineHeight: 1.3,
            fontSize: "1rem",
          }}
        >
          {skill.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillCard;

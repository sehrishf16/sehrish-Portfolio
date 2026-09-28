import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(15,23,42,0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
            px: {
              xs: 2,
              sm: 3,
              md: 2,
            },
            justifyContent: "space-between",
            minHeight: {
              xs: 64,
              md: 72,
            },
          }}
        >
          {/* Logo */}
          <Typography
            sx={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 800,
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                md: "2rem",
              },
              letterSpacing: 1,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            onClick={() => scrollToSection("home")}
          >
            Sehrish Fatema
          </Typography>

          {!mobile ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <ThemeToggle />

              <Button
                variant="contained"
                color="primary"
                component="a"
                href="/Sehrishf%20CV%20-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  ml: 1,
                  borderRadius: 2,
                  textTransform: "none",
                  px: 3,
                }}
              >
                Resume
              </Button>
            </Box>
          ) : (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => setOpen(true)}
              >
                <MenuIcon sx={{ fontSize: 32 }} />
              </IconButton>

              <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                  sx: {
                    width: {
                      xs: 260,
                      sm: 320,
                    },
                  },
                }}
              >
                <Box sx={{ mt: 4 }}>
                  <List>
                    {navItems.map((item) => (
                      <ListItem key={item.id} disablePadding>
                        <ListItemButton
                          onClick={() => scrollToSection(item.id)}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>

                  <Box
                    sx={{
                      px: 2,
                      py: 2,
                    }}
                  >
                    <ThemeToggle />
                  </Box>

                  <Box
                    sx={{
                      px: 2,
                      pb: 3,
                    }}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      component="a"
                      href="/Sehrishf CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      sx={{
                        textTransform: "none",
                        borderRadius: 2,
                      }}
                    >
                      Resume
                    </Button>
                  </Box>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
}
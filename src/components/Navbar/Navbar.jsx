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
        }}
      >
        <Toolbar
          sx={{
            width: "90%",
            maxWidth: "1200px",
            margin: "auto",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 800,
              fontSize: "2rem",
              letterSpacing: 1,
            }}
          >
            Sehrish.dev
          </Typography>

          {!mobile ? (
            <Box display="flex" gap={2}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}

              <ThemeToggle />

              <Button
                variant="contained"
                color="primary"
                component="a"
                href="/Sehrishf CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>
            </Box>
          ) : (
            <>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>

              <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box
                  sx={{
                    width: 250,
                    mt: 5,
                  }}
                >
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

                    <Box p={2}>
                      <Button fullWidth variant="contained">
                        Resume
                      </Button>
                    </Box>
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>

     
      <Toolbar />
    </>
  );
}

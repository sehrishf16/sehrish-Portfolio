import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_wm92wss", 
        "template_umi3nmt", 
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "07vwdLy2ObQ3POv02" 
      )
      .then(() => {
        setLoading(false);
        setError(false);
        setOpen(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);

        setLoading(false);
        setError(true);
        setOpen(true);
      });
  };

  return (
    <section id="contact">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          fontWeight={700}
          gutterBottom
        >
          Contact Me
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          mb={7}
        >
          Let's build something amazing together.
        </Typography>

        <Grid container spacing={4} alignItems="stretch">

       

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                mb={4}
              >
                Get in Touch
              </Typography>

              <Box display="flex" gap={2} mb={3}>
                <EmailIcon color="primary" />
                <Typography>
                  sehrishfatema10@gmail.com
                </Typography>
              </Box>

              <Box display="flex" gap={2} mb={3}>
                <PhoneIcon color="primary" />
                <Typography>
                  +91 9860810889
                </Typography>
              </Box>

              <Box display="flex" gap={2}>
                <LocationOnIcon color="primary" />
                <Typography>
                  Chhatrapati Sambhajinagar,
                  Maharashtra
                </Typography>
              </Box>
            </Paper>
          </Grid>

         

          <Grid size={{ xs: 12, md: 8 }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
              >
                <TextField
                  fullWidth
                  required
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email Address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  required
                  multiline
                  rows={6}
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  margin="normal"
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    mt: 3,
                    px: 4,
                    borderRadius: 3,
                  }}
                >
                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
        >
          <Alert
            severity={error ? "error" : "success"}
            variant="filled"
          >
            {error
              ? "Failed to send message!"
              : "Message sent successfully!"}
          </Alert>
        </Snackbar>
      </Container>
    </section>
  );
};

export default Contact;
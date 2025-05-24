import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  TextField,
  Button,
} from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md">
      <Box className="mt-[10%] p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        {/* Page Title */}
        <Typography
          variant="h3"
          className="text-gray-700 font-bold text-center mb-6"
        >
          Contact Us
        </Typography>

        <Typography variant="body1" className="text-gray-700 mb-4 text-center">
          Have questions or need help? Fill out the form below or email us at
          <a
            href="mailto:xyz@gmail.com"
            className="text-blue-600 font-medium pl-1"
          >
            {import.meta.env.VITE_ADMIN_EMAIL}
          </a>
        </Typography>

        <Divider className="my-4" />

        {/* Contact Form */}
        <Box component="form" className="space-y-4">
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            className="bg-white mb-10px"
          />
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            className="bg-white"
          />
          <TextField
            fullWidth
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            className="bg-white"
          />
          <Button variant="contained" color="primary" className="mt-2">
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;

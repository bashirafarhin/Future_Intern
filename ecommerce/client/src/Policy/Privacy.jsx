import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";

const Privacy = () => {
  return (
    <Container maxWidth="md">
      <Box className="mt-[10%] p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        {/* Page Title */}
        <Typography variant="h3" className="text-gray-700 font-bold text-center mb-6">
          Privacy Policy
        </Typography>

        {/* Introduction */}
        <Typography variant="body1" className="text-gray-700 mb-4">
          Your privacy is important to us. This policy explains how we collect, use, and protect 
          your personal information.
        </Typography>

        <Divider className="my-4" />

        {/* Section 1: Information Collection */}
        <Typography variant="h5" className="text-gray-900 font-semibold mt-4">
          Information We Collect
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          We collect personal information such as your name, email, and payment details when you 
          use our services.
        </Typography>

        {/* Section 2: How We Use Your Information */}
        <Typography variant="h5" className="text-gray-900 font-semibold mt-4">
          How We Use Your Information
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          We use your data to provide services, process payments, and improve our platform.
        </Typography>

        {/* Section 3: Data Protection */}
        <Typography variant="h5" className="text-gray-900 font-semibold mt-4">
          How We Protect Your Data
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          We implement security measures to protect your personal information from unauthorized access.
        </Typography>
      </Box>
    </Container>
  );
};

export default Privacy;

import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";

const Terms = () => {
  return (
    <Container maxWidth="md">
      <Box className="mt-[10%] p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        {/* Page Title */}
        <Typography variant="h3" className="text-gray-700 font-bold text-center mb-6">
          Terms of Use
        </Typography>

        {/* Introduction */}
        <Typography variant="body1" className="text-gray-700 mb-4">
          Welcome to our platform. By using our services, you agree to comply with and be bound 
          by the following terms and conditions. Please read them carefully.
        </Typography>

        <Divider className="my-4" />

        {/* Section 1: Acceptance of Terms */}
        <Typography variant="h5" className="text-gray-800 font-semibold mt-4">
          Acceptance of Terms
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          By accessing and using our website, you acknowledge that you have read, understood, 
          and agree to be bound by these terms. If you do not agree, you should not use our services.
        </Typography>

        {/* Section 2: Changes to Terms */}
        <Typography variant="h5" className="text-gray-800 font-semibold mt-4">
          Changes to Terms
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          We reserve the right to update these terms at any time. Any changes will be 
          effective immediately upon posting. It is your responsibility to review these 
          terms regularly.
        </Typography>

        {/* Section 3: User Responsibilities */}
        <Typography variant="h5" className="text-gray-800 font-semibold mt-4">
          User Responsibilities
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          You agree to use our services lawfully and ethically. You must not engage in 
          activities such as hacking, spreading malware, or violating intellectual property rights.
        </Typography>

        {/* Section 4: Account Security */}
        <Typography variant="h5" className="text-gray-800 font-semibold mt-4">
          Account Security
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          You are responsible for maintaining the confidentiality of your account details. 
          Any unauthorized activity under your account is your responsibility.
        </Typography>

        {/* Section 5: Privacy Policy */}
        <Typography variant="h5" className="text-gray-800 font-semibold mt-4">
          Privacy Policy
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          Your personal data is handled in accordance with our Privacy Policy. By using our 
          platform, you consent to the collection and use of your information as described 
          in the Privacy Policy.
        </Typography>

        {/* Section 6: Termination of Services */}
        <Typography variant="h5" className="text-gray-800 font-semibold mt-4">
          Termination of Services
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          We reserve the right to suspend or terminate your access to our services at any 
          time if we find any violation of our terms.
        </Typography>
      </Box>
    </Container>
  );
};

export default Terms;

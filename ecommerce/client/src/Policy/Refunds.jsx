import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";

const Refund = () => {
  return (
    <Container maxWidth="md">
      <Box className="mt-[10%] p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        {/* Page Title */}
        <Typography variant="h3" className="text-gray-700 font-bold text-center mb-6">
          Refund Policy
        </Typography>

        {/* Introduction */}
        <Typography variant="body1" className="text-gray-700 mb-4">
          We want you to be satisfied with your purchase. If you're not happy, please read our refund 
          policy below.
        </Typography>

        <Divider className="my-4" />

        {/* Section 1: Refund Eligibility */}
        <Typography variant="h5" className="text-gray-900 font-semibold mt-4">
          Eligibility for Refunds
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          To be eligible for a refund, the item must be unused and in its original condition.
        </Typography>

        {/* Section 2: Refund Process */}
        <Typography variant="h5" className="text-gray-900 font-semibold mt-4">
          Refund Process
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          To request a refund, contact our support team within **7 days** of your purchase.
        </Typography>

        {/* Section 3: Exceptions */}
        <Typography variant="h5" className="text-gray-900 font-semibold mt-4">
          Non-Refundable Items
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          Digital products, gift cards, and promotional items are non-refundable.
        </Typography>
      </Box>
    </Container>
  );
};

export default Refund;

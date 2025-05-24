import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";

const ShippingPolicy = () => {
  return (
    <Container maxWidth="md">
      <Box className="mt-[10%] p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        {/* Page Title */}
        <Typography variant="h3" className="text-gray-700 font-bold text-center mb-6">
          Shipping Policy
        </Typography>

        {/* Introduction */}
        <Typography variant="body1" className="text-gray-700 mb-4">
          Thank you for shopping with us! We strive to provide you with the best shipping 
          experience. Please read our shipping policy carefully to understand how we process orders.
        </Typography>

        <Divider className="my-4" />

        {/* Section 1: Processing & Handling Time */}
        <Typography variant="h5" className="text-gray-900 font-semibold mt-4">
          Processing & Handling Time
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          Orders are typically processed within **1-3 business days** (excluding weekends and holidays).
          You will receive a confirmation email once your order is shipped.
        </Typography>

        {/* Section 2: Shipping Rates & Delivery Estimates */}
        <Typography variant="h5" className="text-gray-900 font-semibold mt-4">
          Shipping Rates & Delivery Estimates
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          Shipping costs vary based on location and delivery method. Estimated delivery times are:  
          - **Standard Shipping:** 5-7 business days  
          - **Express Shipping:** 2-3 business days  
          - **International Shipping:** 7-14 business days  
        </Typography>

        {/* Section 3: Tracking Information */}
        <Typography variant="h5" className="text-gray-900 font-semibold mt-4">
          Tracking Information
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          Once your order has shipped, you will receive a tracking number via email. You can 
          use this number to track your package on our website or the carrier’s website.
        </Typography>

        {/* Section 4: Delays & Issues */}
        <Typography variant="h5" className="text-gray-900 font-semibold mt-4">
          Shipping Delays & Issues
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          While we do our best to ensure timely delivery, unexpected delays (such as weather conditions 
          or carrier issues) may occur. If your order is delayed, please contact us for assistance.
        </Typography>

        {/* Section 5: International Shipping */}
        <Typography variant="h5" className="text-gray-900 font-semibold mt-4">
          International Shipping
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          We offer international shipping to many countries. However, customs fees and import duties 
          may apply, which are the customer's responsibility. Please check your country’s regulations.
        </Typography>

        {/* Section 6: Lost or Stolen Packages */}
        <Typography variant="h5" className="text-gray-900 font-semibold mt-4">
          Lost or Stolen Packages
        </Typography>
        <Typography variant="body1" className="text-gray-700 mb-3">
          If your package is lost or stolen, please contact us immediately. We will work with the 
          shipping carrier to locate the package or provide alternative solutions.
        </Typography>
      </Box>
    </Container>
  );
};

export default ShippingPolicy;

import nodemailer from "nodemailer";
import sendGridTransport from "nodemailer-sendgrid-transport";
import env from "dotenv";
env.config();

const transporter = nodemailer.createTransport(
  sendGridTransport({
    service:'gmail',
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

export const sendEmail = async (options) => {
  let mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: options.email,
    subject: options.subject || "Notification from Our Service",
    html: "",
};

if (options.type === "order_confirmation") {
    mailOptions.subject = "Order Confirmation";
        mailOptions.html = `
            <h2>Hi ${options.data.name},</h2>
            <p>Your order has been placed successfully!</p>
            <h3>Order Details:</h3>
            <ul>
                ${options.data.orderItems.map(item => `
                    <li>${item.name} - ${item.quantity} x ₹${item.price}</li>
                `).join('')}
            </ul>
            <p><strong>Total Price:</strong> ₹${options.data.totalPrice}</p>
            <p><strong>Order ID:</strong> ${options.data.oid}</p>
            <p><strong>Shipping Address:</strong> ${options.data.shippingInfo.address}, 
               ${options.data.shippingInfo.city}, ${options.data.shippingInfo.country}</p>
            <p>Thank you for shopping with us!</p>
        `;
} else if (options.type === "password_reset") {
  mailOptions.subject = "Password Reset Request";
  mailOptions.html = `
      <h2>Password Reset Request</h2>
      <p>Hi ${options.data.name},</p>
      <p>You requested to reset your password. Click the link below to set a new password:</p>
      <a href="${options.data.reset_url}" target="_blank">Reset Password</a>
      <p>If you did not request this, please ignore this email.</p>
  `;
} 
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error occurred while sending email:", error);
      } else {
        console.log("Email sent successfully!");
      }
    });
};
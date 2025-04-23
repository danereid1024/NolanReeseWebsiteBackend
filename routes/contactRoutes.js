const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Email sending error:', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

module.exports = router;

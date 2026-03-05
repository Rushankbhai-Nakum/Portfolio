import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

// Validation middleware
const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'All fields are required',
      details: {
        name: !name ? 'Name is required' : null,
        email: !email ? 'Email is required' : null,
        message: !message ? 'Message is required' : null
      }
    });
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  // Name validation (minimum 2 characters)
  if (name.trim().length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters long' });
  }
  
  // Message validation (minimum 10 characters)
  if (message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters long' });
  }
  
  next();
};

router.post('/', validateContactForm, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const contact = new Contact({ 
      name: name.trim(), 
      email: email.trim(), 
      message: message.trim() 
    });
    await contact.save();

    console.log('✓ Contact saved to database:', { name, email });

    // Try to send email (optional - won't fail if email not configured)
    try {
      // Check if email credentials are configured
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS && 
          process.env.EMAIL_USER !== 'your-email@gmail.com') {
        
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.RECIPIENT_EMAIL,
          subject: `Portfolio Contact: Message from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
              <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="margin: 20px 0;">
                <p style="margin: 10px 0;">
                  <strong>Name:</strong> ${name}
                </p>
                <p style="margin: 10px 0;">
                  <strong>Email:</strong> ${email}
                </p>
                <p style="margin: 10px 0;">
                  <strong>Message:</strong>
                </p>
                <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #000; margin-top: 10px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                <p>This message was sent from your portfolio contact form.</p>
                <p>Received on: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          `,
          replyTo: email
        };

        await transporter.sendMail(mailOptions);
        console.log('✓ Email sent successfully');
      } else {
        console.log('⚠ Email not configured - message saved to database only');
      }
    } catch (emailError) {
      console.error('⚠ Email sending failed (message still saved):', emailError.message);
    }

    res.status(200).json({ 
      message: 'Message sent successfully',
      success: true 
    });
    
  } catch (error) {
    console.error('✗ Contact form error:', error);
    
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.',
      details: error.message 
    });
  }
});

export default router;

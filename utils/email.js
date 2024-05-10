const nodemailer = require('nodemailer');

const sendEmail = async (option) => {
    // Create a Transporter: the service that will send the email
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "b8556dae8e18d9",
          pass: "cbbab6e4287e6d"
        }
      });

      // Define Email options
      const emailOptions = {
        from: "Bookworm Support<support@bookworm.com>",
        to: option.email,
        subject: option.subject,
        text: option.message
      }

      await transporter.sendMail(emailOptions)
    
}

module.exports = sendEmail;
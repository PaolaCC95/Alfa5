const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "3083e95ea4c8a9",
          pass: "ddce6501bbdf9b"
        }
      });
    const mensaje={
        from: "Alfa5 Store <noreply@vetyshop.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;
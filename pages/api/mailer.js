export default function (req, res) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: process.env.EMAIL_SERVER_PORT,
        host: process.env.EMAIL_SERVER_HOST,
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_SERVER_PASSWORD,
        },
        secure: false,
    })
    const mailData = {
        from: process.env.EMAIL_FROM,
        to: req.body.email,
        subject: `Message From ${req.body.name}`,
        text: " | Sent from: " + req.body.email,
        html: html(req.body.email)
    }
    transporter.sendMail(mailData, (err, data) => {
        if (err) {
            console.log(err);
            res.send("error" + JSON.stringify(err));
        } else {
            console.log("mail send", data);
            res.send("success");
        }
    });
    res.status(200)
}

export function html(email) {

    const backgroundColor = "#f9f9f9"
    const textColor = "#444444"
    const mainBackgroundColor = "#ffffff"
    const buttonBackgroundColor = "#346df1"
    const buttonBorderColor = "#346df1"
    const buttonTextColor = "#ffffff"

    return `
  <body style="background: ${backgroundColor};">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
            ${email}
        </td>
      </tr>
    </table>
    <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
      <tr>
        <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Sign in</a></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
          If you did not request this email you can safely ignore it.
        </td>
      </tr>
    </table>
  </body>
  `
}
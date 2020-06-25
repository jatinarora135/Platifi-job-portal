const nodemailer       =require('nodemailer');

async function sendMail(mailContent,data_client) {
    // console.log(mailContent);
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'platifi.jobs@gmail.com',
            pass: '7h6g,tW4+m' // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'Platifi Jobs <platifi.jobs@gmail.com>', // sender address
        to: data_client.email , // list of receivers
        subject: "New Registration", // Subject line
        text: "Hello world?", // plain text body
        html: mailContent, // html body
    });
};

module.exports= sendMail;

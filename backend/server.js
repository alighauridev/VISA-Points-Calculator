const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "backend/.env" });
app.use(bodyParser.json());
app.use(cors());
const Mailgen = require("mailgen");

app.post("/api/contact", async (req, res) => {
    // const { name, email, message } = req.body;

    const { name, userEmail, totalPoints, message } = req.body;

    let config = {
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    };

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: `${name} - ${userEmail}`,
            link: "#",
        },
    });

    let response = {
        body: {
            // name: "",
            intro: `Total Points By ${name}`,
            table: {
                data: [
                    {
                        points: totalPoints,
                        message: message,
                    },
                ],
            },
            outro: "outro",
        },
    };

    let mail = MailGenerator.generate(response);

    let messagee = {
        from: process.env.EMAIL,
        to: "gali76682@gmail.com",
        subject: `${name} Total Points`,
        html: mail,
    };

    transporter
        .sendMail(messagee)
        .then(() => {
            return res.status(201).json({
                msg: "you should receive an email",
            });
        })
        .catch((error) => {
            return res.status(500).json({ error });
        });

    // res.status(201).json("getBill Successfully...!");
});

const PORT = process.env.PORT || 3001;
app.listen(3001, () => {
    console.log(`Server listening on port ${PORT}`);
});

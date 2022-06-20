require('dotenv').config({path: '.env'})
const {env} = process;
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    database: env.DB_NAME,
    password: env.DB_PASSWORD,
});

const nodemailer = require('nodemailer');

let mailTrasporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gsblasemence2022@gmail.com',
        pass: 'gsblasemence'
    }
})


module.exports.sendBulletinToParentByEmail = (req, res) => {
    const {id} = req.params;
    console.log('g');

    connection.query('SELECT email FROM students WHERE id = ?', [id], (err, resp) => {
        const {email} = resp[0];
        const message = {
            from: "gsblasemence2022@gmail.com",
            to: 'danidjakam@gmail.com',
            subject: "Message title",
            text: "Plaintext version of the message",
            html: "<p>HTML version of the message</p>"
        }
        mailTrasporter.sendMail(message, (error) => {
            console.log(error);
            if(error){
                console.log(error);
                res.status(401).json({success: false, message: error})
            }else{
                res.status(201).json({success: true, message: 'Bouge'})
            }
        });
    })    
}
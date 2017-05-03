import express from 'express';
let nodemailer = require('nodemailer');
let mg = require('nodemailer-mailgun-transport');



module.exports=function (req,res,next) {

    let api_key = 'key-55ab8c16339ee0a9932d9a51e8e156e1';
    let host = 'smtp.mailgun.org';
    let nodemailerMailgun = nodemailer.createTransport(mg(auth));


    let auth = {
        auth: {
            api_key: 'key-1234123412341234',
            domain: 'mabao-investment.com'
        }
    }


    nodemailerMailgun.sendMail({
        from: 'myemail@example.com',
        to: 'deomwilanga@gmail.com', // An array if you have multiple recipients.
        subject: 'Hey you, awesome!',
        text: 'Mailgun rocks, pow pow!',
    }, function (err, info) {
        if (err) {
            console.log('Error: ' + err);
        }
        else {
            console.log('Response: ' + info);
        }
    });
};
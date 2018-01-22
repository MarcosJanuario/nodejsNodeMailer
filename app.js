const http = require('http');
const nodemailer = require('nodemailer');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'marcos************@gmail.com',
        pass: '************'
    }
});

var mailOptions = {
    from: 'marcos********@gmail.com',
    to: 'marcos********@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'yeaaah it works!!. Verdammte Antivirus in Windows!!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
})
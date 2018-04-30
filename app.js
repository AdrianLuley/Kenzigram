const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'public/uploads' })
const app = express();
const fs = require('fs');

const port = 3000;
const uploaded_files = [];

app.set('view engine', 'pug');

app.use(express.static('public'));

app.post('/upload', upload.single('myFile'), function (req, res) {
    let html = '<a href="http://localhost:3000"> Go Back Home </a>';
    res.send(html);
    });

app.get('/', function(req, res) {
    const path = './public/uploads';
    fs.readdir(path, function (err, items) {
        console.log(items);
        res.render('index', {images: items});
    });
});

app.listen(port);


// app.get('/', function (req, res) {
//     app.render('index', { title: "Kenziegram Upload", h1: "Kenziegram", a: "href=http://localhost:3000" })
// });

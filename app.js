const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads' })
const port = 3000;
const app = express();
const fs = require('fs');

const uploaded_files = [];

app.use(express.static('public'));

app.listen(port);

app.post('/upload', upload.single('myFile'), function (req, res, next) {
    const path = './public/uploads';
    fs.readdir(path, function(err, items) {
        let html = '<a href="http://localhost:3000"> Go Back Home';
        for(let i=0; i < items.length; i++){
            html += `<img src="${"./uploads/" + items[i]}">`;
        }
        console.log(items);
        res.send(html);
    });
    // req.file is the `myFile` file
    // req.body will hold the text fields, if there were any
  });


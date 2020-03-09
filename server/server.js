const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.text({type:'text/html'}))



app.post('/contact-form' , (req, res, next) => {
    console.log(req.body.email);
    console.log(req.body.name);
    res.send('Thank you for submitting your contact form.');
    next();
});



app.use((req, res, next) => {
    fs.writeFileSync('log.txt' , req.body.name +  " " + req.body.email);
    
    next();
});





app.use(express.static(path.join(__dirname, '../public')));
app.listen(3000);


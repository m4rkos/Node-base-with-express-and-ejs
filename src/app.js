const { json } = require('express');
const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const os = require('os')

let consign = require('consign');
//var expressValidator = require('express-validator');

const app = express()

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(json());
app.use(express.static('./src/public'));
app.use(expressLayouts);

console.log(os.hostname());

// HTTPS
if(os.hostname() != process.env.ENV_DEV1 && os.hostname() != process.env.ENV_DEV2){
    app.get('*', (req, res, next) => {
        if (req.headers['x-forwarded-proto'] != 'https') {
            res.redirect("https://" + req.headers.host + req.url);        
        } else {
            next();
        }
    });
}

consign()
    .include('src/routes')    
    .then('src/models')
    .then('src/controllers')
    .into(app);

app.use(function (req, res, next){
    res.status(404).send("404");
    //res.status(404).render("404");
});

module.exports = app;
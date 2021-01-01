const { json } = require('express');
const express = require('express');
const faker = require('faker')
const expressLayouts = require('express-ejs-layouts')
const os = require('os')

//var consign = require('consign');
//var expressValidator = require('express-validator');

const app = express()

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(json());
app.use(express.static('./src/public'));
app.use(expressLayouts);

console.log(os.hostname());

// HTTPS
if(os.hostname() != 'DESKTOP-CHMBMOP' && os.hostname() != 'markosedu-2020'){
    app.get('*', (req, res, next) => {
        if (req.headers['x-forwarded-proto'] != 'https') {
            res.redirect("https://" + req.headers.host + req.url);        
        } else {
            next();
        }
    });
}

// Routes
app.get('/', (req, res) => {
    res.render('pages/home')
})

app.get('/about', (req, res) => {
    var users = [{
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/300/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/400/300'
    }, {
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/500/300'
    }]

    res.render('pages/about', {
        usuarios: users
    })
})

app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

app.post('/contact', (req, res) => {                    
    console.log(req.body)
    res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')    
})


/* find routes */
// consign()
//     .include('app/routes')
//     //.then('config/dbConnection.js')
//     .then('app/models')
//     .then('app/controllers')
//     .into(app);

// /* Error route */
// app.use(function (req, res, next){
//     res.status(404).render(
//         "error/404",{ 
//             title: '404',
//             links : {
//                 0: 'css/vfi_style',
//                 1: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.min',
//                 2: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min',
//                 3: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider',
//                 4: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min'
//             },
//             script : {
//                 0: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min',
//                 1: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider',
//                 2: 'https://unpkg.com/sweetalert/dist/sweetalert.min',
//                 3: 'js/style',                
//             },
//             dir: './'
//         });
// });

module.exports = app;
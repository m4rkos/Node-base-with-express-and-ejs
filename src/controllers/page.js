const faker = require('faker')

let db = require('../../config/database');
let conn = db();

const dotenv = require('dotenv');
dotenv.config();

module.exports.about = (app, req, res) =>{    
    let users = [{
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

    //console.log(`${process.env.DEV}`)
    
    res.render('pages/about', {
        usuarios: users
    })
}

module.exports.home = (app, req, res) =>{

    // let connect = conn();    
    // connect.on("end", (e) => console.log('DB Done :)'));    

    // var newsModel = new application.app.models.newsDAO(connect);        
    // newsModel.getNews(function(error, result){
    //     res.render("news/news",{ 
    //         title: 'Novidades',
    //         links : {
    //             0: 'css/vfi_style',                
    //             1: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.min',
    //             2: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min',
    //             3: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider',
    //             4: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min',
    //             5: 'css/style',
    //         },
    //         script : {
    //             0: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min',
    //             1: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider',
    //             2: 'https://unpkg.com/sweetalert/dist/sweetalert.min',
    //             3: 'js/style',
    //             //4: 'js/main_vfi'
    //         },
    //         dir: './',
    //         news : result 
    //     });
    // });
    // connect.end();

    res.render('pages/home')
}

module.exports.contact = (app, req, res) =>{
    // let connect = conn();    
    // connect.on("end", (e) => console.log('DB Done :)'));    

    // let apiModel = new application.app.models.api_model(connect);
        
    // apiModel.getUser({
    //     email: req.body.email,
    //     pass: req.body.pass
    //     },(error, result) =>{        
    //         console.log('Login: '+ result[0]['token']);
    //         res.send(result);                    
    //     }
    // );
    // connect.end();
    res.render('pages/contact')
}
module.exports.contact_post = (app, req, res) =>{

    // let connect = conn();    
    // connect.on("end", (e) => console.log('[NEW POST] | DB Done :)'));    

    // let newsModel = new application.app.models.api_model(connect);
    // newsModel.savePost( 
    //     {                            
    //         title: req.body.title,
    //         resume: req.body.resume,
    //         content: req.body.content,
    //         category: req.body.category,
    //         link: req.body.link,
    //         video: req.body.video,
    //         image: req.body.image
    //     },
    //     (error, result) =>{    
    //         console.log(error);                
    //         console.log(`post : ${id.v4()} = ok`)
    //         res.send({
    //             status: 200,
    //             data: result
    //         })
    //     }
    // );
    // connect.end();
    console.log(req.body)
    res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
}
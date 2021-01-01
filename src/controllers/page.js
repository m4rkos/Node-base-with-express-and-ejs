const faker = require('faker')
const dotenv = require('dotenv');
dotenv.config();

let db = require('../../config/database');
let conn = db();

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

    let connect = conn();    
    connect.on("end", (e) => console.log('DB Done :)'));    

    var apiModel = new app.src.models.page(connect);        

    id = 0;

    apiModel.getAllTables({ id }, (error, result) => {        
        res.render('pages/home', {
            data: result
        });
    });

    connect.end();
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
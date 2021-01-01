// Routes
module.exports = (app) =>{
    // home
    app.get('/', (req, res) => {        
        app.src.controllers.page.home(app, req, res);
    })
    // about
    app.get('/about', (req, res) => {        
        app.src.controllers.page.about(app, req, res);
    })
    // contact
    app.get('/contact', (req, res) => {
        app.src.controllers.page.contact(app, req, res);
    })
    app.post('/contact', (req, res) => {                    
        app.src.controllers.page.contact_post(app, req, res);
    })
}
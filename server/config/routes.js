// console.log("3 -- Routes connected");


const cakeCtrl = require('./../controllers/cake.ctrl');

module.exports = (app) => {


    // create a new cake
    app.post('/cake', function(req, res) {
        console.log('request body', req.body)
        cakeCtrl.create(req, res);
    })
    
    // show all cakes
    app.get('/cake', function(req, res) {
        cakeCtrl.index(req, res);
    })


    app.post('/cakeFind', function(req, res){
        cakeCtrl.show(req, res);
    })

    app.put('/cake/:cakeId/rating', function(req, res){
        console.log("Routes");
        console.log('request body for add rating', req.body);
        cakeCtrl.addRating(req, res);
    })
}

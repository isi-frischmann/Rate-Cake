// console.log("4 -- Controller Set")

var mongoose = require('mongoose');
var Cake = mongoose.model('Cake');
var User = mongoose.model('User');
var Rating = mongoose.model('Rating');

module.exports = {

    create: function (req, res) {
        var newCake = new Cake({
            bakerName: req.body.bakerName,
            imageUrl: req.body.imageUrl,
            description: req.body.description
        })
        console.log('In create function', newCake)
        newCake.save(function (err, cake) {
            if (err) {
                console.log('In create error', err)
                res.json({ message: "Error", error: err });
            }
            else {
                console.log("Added cake");
                res.json({ message: "New - created" });
            }
        })
    },

    index: function (req, res) {
        Cake.find({}, function (err, allCakes) {
            if (err) {
                console.log("An error accured - index page", err);
                res.json({ message: "These are the cakes", cake: allCakes })
            }
            else {
                // console.log("I'm in cake controller");
                res.json({ cake: allCakes });
            }
        });
    },

    show: function (req, res) {
        console.log("I'm in the controller to show specific", req.params.id);
        console.log("req.body: ", req.body.id);
        Cake.findById({ _id: req.body.id }, function (err, specCake) {
            if (err) {
                console.log("Error in show", err);
                res.json({ message: "Error in showing spec cake controller", err })
            }
            else {
                console.log("In controller to show spec cake", specCake);
                res.json({ cake: specCake });
            }
        })
    },

    addRating: function (req, res) {
        console.log("Thats the request body", req.body);
        // var rating = new Rating({comment: req.body.comment, rating: req.body.rating});
        // rating.save(function(saveError){
        //     if(saveError){
        //         console.log("Rating couldn't be saved", saveError);
        //         res.json({"Success" : "saveErrorRating"});
        //     }
        // })
        console.log("request params: ", req.params);
        var newRating = new Rating()
        newRating.rate = req.body.rating;
        newRating.comment = req.body.comment;
        console.log("New Rating:", newRating)
        newRating.save(function (err, newRating) {
            if (err) {
                console.log("Error in save ratign")
            }
            else {
                console.log("in else");
                Cake.findOne({ _id: req.params.cakeId }, (err, foundCake) => {
                            console.log("in update cake")
                            if (err) {
                                console.log("Updating wasn't working my dear", Error['err']);
                                res.json({ message: "Error" });
                            }
                            else if (foundCake == null) {
                                console.log("The Cake is not found");
                                res.json({ message: "Error" })
                            }
                            else {
                                console.log("found that cake", foundCake);
                                foundCake.ratings.push(newRating);
                                // this.rating = rate + req.body.rating;
                                console.log("rating added to cake: ", foundCake);
                                // res.json({ message: "Updated", foundCake: foundCake });
                                foundCake.save(function (err, updateRating){
                                    if(err){
                                        console.log("Error in update rating controller", err);
                                    }
                                    else{
                                        console.log('cake saved with rating: ', updateRating);
                                        res.json({updateRating: updateRating})
                                    }
                                })
                            }
                        }
                );
            }
        })
    }
}
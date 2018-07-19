// console.log("2 -- Model Set");

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: { 
        type: String, 
        required: [true, "Name cannot be empty!"],
        minlength: [3, "Name must be at least 3 characters long"]
    } 
}, { timestamps: true });

mongoose.model('User', UserSchema);


const RatingSchema = new mongoose.Schema({
    rate: {
        type: Number,
        // required: [true, "Description cannot be empty!"],
    },

    comment: {
        type: String,
        required: [true, "Comment needs to be filled out!"],
    },

    user: {
        type: {UserSchema}
    }
})
mongoose.model('Rating', RatingSchema);

const CakeSchema = new mongoose.Schema({
    bakerName: {
        type: String, required: [true, "Baker needs to be populated"],
    },

    imageUrl: { 
        type: String,
    },

    description: { 
        type: String, 
        required: [true, "Description cannot be empty!"],
        minlength: [10, "Description must be at least 10 characters long"]
    },

    ratings: {
        type: [RatingSchema],
        required: false
    }

}, { timestamps: true });

mongoose.model('Cake', CakeSchema);
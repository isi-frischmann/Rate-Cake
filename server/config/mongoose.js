// console.log(' 1 -- Mongoose Set');

module.exports = (dbName) => {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/' + dbName)
}
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    streetaddress:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    region:{
        type: String,
        required: true
    },
    postalcode:{
        type: String,
        required: true
    },
    usertype: {
        type : String,
        require : true
    }
    

});

module.exports = mongoose.model('user', userSchema);

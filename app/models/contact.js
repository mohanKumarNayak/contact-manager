const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true,
        unique : true,
        maxlength : 10
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validator : {
            validate : function(email) {
                return validator.isEmail(email)
            },
            message : function() {
                return 'invalid email or invalid type'
            }
        }
    },
    user : {
        type : Schema.Types.ObjectId,
        require : true,
        ref : 'User'
    }
})

const Contact = mongoose.model('Contact',contactSchema)

module.exports = Contact
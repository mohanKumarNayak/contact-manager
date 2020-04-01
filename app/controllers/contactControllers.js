const Contact = require('../models/contact')

module.exports.list = (req,res) => {
    const {user,token} = req
    Contact.find({
        user : user._id
    })
        .then((contact)=>{
            res.json(contact)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.create = (req,res) => {
    const {user} = req
    const body = req.body
    const contact = new Contact(body)
    contact.user = user._id
    contact.save()
        .then((contact)=>{
            res.json(contact)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show = (req,res) => {
    const {user} = req
    const id = req.params.id
    Contact.findOne({
        _id : id,
        user : user._id
    })
        .then((contact)=>{
            res.json(contact)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const {user} = req
    const body = req.body
    const id = req.params.id
    Contact.findOneAndUpdate({
        _id : id,
        user : user._id
    },body,{new:true,runValidators:true})
        .then((contact)=>{
            res.json(contact)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.destroy = (req,res) => {
    const {user} = req
    const id = req.params.id
    Contact.findOneAndDelete({
        _id : id,
        user : user._id
    })
    .then((contact)=>{
        if(contact){
        res.json(contact)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}
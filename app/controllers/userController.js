const User = require('../models/user')

module.exports.create = (req,res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.login = (req,res) => {
    const body = req.body
    User.findByCredentials(body.email,body.password)
        .then((user)=>{
            user.generateToken()
                .then((token)=>{
                    res.setHeader('x-auth',token).send({})
                })
                .catch((err)=>{
                    res.json(err)
                })
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.logout = (req,res) => {
    const {user,token} = req
    User.findByIdAndUpdate(user._id,{$pull : {tokens : {token : token}}})
        .then(()=>{
            res.json({notice:'successfully logged out'})
        })
        .catch((err)=>{
            res.json(err)
        })
}

//Import cost
//mmongoose limit and skip
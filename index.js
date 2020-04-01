const express = require('express')
const app = express()
const router = require('./config/router')
const setUpDb = require('./config/database')
const port = 3055

app.use(express.json())
setUpDb()
app.use('/',router)

app.listen(port,()=>{
    console.log('listening on port no',port)
})


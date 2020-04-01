const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/userController')
const contactController = require('../app/controllers/contactControllers')
const {authenticationUser} = require('../app/middlewares/authenticateUser')

router.post('/users/register',userController.create)
router.post('/users/login',userController.login)
router.delete('/users/logout/:id',authenticationUser,userController.logout)

router.get('/contacts',authenticationUser,contactController.list)
router.post('/contacts',authenticationUser,contactController.create)
router.get('/contacts/:id',authenticationUser,contactController.show)
router.put('/contacts/:id',authenticationUser,contactController.update)
router.delete('/contacts/:id',authenticationUser,contactController.destroy)

module.exports = router
const express = require('express')
const app = express()
const router = express.Router()

const User = require('../model/user.model')
app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user)
    } catch (err) {
        res.send("Err : " + err)
    }
})

router.post('/',async(req,res)=>{
    const user =await new User({
        userName :req.body.userName,
        email : req.body.body.email,
        password:req.body.body.password
    })

    try {
        const response = await user.save();
        res.json(response)
    } catch (err) {
        res.send("Err : " + err)
    }
})
module.exports = router

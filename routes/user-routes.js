const express= require('express')

const router = express.Router();

router.get('/',(req,res)=>{
 res.send("this is checking")
}
)

router.get('/register',(req,res)=>{
 res.render("Register")
})

router.post('/register',(req,res)=>{
    res.send(req.body)
})

module.exports= router;
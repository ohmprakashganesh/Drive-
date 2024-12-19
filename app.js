const express= require('express')
const userRouter=require('./routes/user-routes')
const app= express()
app.set('view engine', 'ejs')

app.set(express.json())
app.use(express.urlencoded({extended:true}))


// app.get('/',(req,res)=>{
//     res.send("this is default")
// })

app.use('/users', userRouter)

app.listen(3000,()=>{
    console.log('server is running')
})
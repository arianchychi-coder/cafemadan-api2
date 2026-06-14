require("dotenv").config()
const express = require("express")
const app = express()
const madanRouter = require("./routes/madan_route")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/api/content',madanRouter)
const PORT = process.env.APP_PORT || 3000
app.listen(PORT ,()=>{
    console.log(`Listen to ${PORT}`)
})
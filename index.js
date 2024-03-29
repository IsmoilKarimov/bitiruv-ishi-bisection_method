const express = require('express')
const server = express()
const mongoose = require('mongoose')

const expHbs = require('express-handlebars')

// routers
const pageRouter = require('./router/page') 

const hbs = expHbs.create({     
    defaultLayout: 'main',  
    extname: 'hbs'  
})            

server.engine('hbs', hbs.engine)
server.set('view engine','hbs')
server.set('views','temp')
server.use(express.json())

server.use(express.urlencoded({extended:true}))
server.use(express.static('public'))

server.post('/',(req,res)=>{
    let {title, age} = req.body
    res.end(`           
        ${title} | ${age}
    `)
})

server.use(pageRouter)

const PORT = 4004

async function dev(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/bisection',{
            useNewUrlParser:true
        }),
        server.listen(PORT,()=>{
            console.log(`Server is running on ${PORT} port`);
        })
    } catch (error) {
        console.log(error);
    }
}
dev()
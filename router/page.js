const {Router} = require('express')
const router = Router()
const Page = require('../model/page')
const {rekursiya_bisection} = require('../recurtion/index')

console.log(rekursiya_bisection(1,2,0.001));

router.get('/',(req,res)=>{
    res.render('index',{
        
    }) 
})

router.get('/page/equation',async(req,res)=>{  
    let pages = await Page.find().lean()
    res.render('page/equation',{
        pages   
        
    })
})

                    
router.post('/page/equation',async(req,res)=>{
    let {n,a,b,E,arr} = req.body 
    let page = await new Page({n,a,b,E,arr})
    await page.save()
    console.log(req.body);
    res.redirect('/')
})

router.get('/page/equation2',(req,res)=>{  
    res.render('page/equation2')
})

router.get('/page/equation3',(req,res)=>{  
    res.render('page/equation3')
})

module.exports = router 
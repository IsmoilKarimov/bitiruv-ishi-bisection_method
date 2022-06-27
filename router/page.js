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
    let lastpage= await Page.find().sort({_id:-1}).limit(1).lean()
    console.log(pages)
    console.log('last',lastpage)
    let arr=lastpage[0].arr
    console.log(arr)
    res.render('page/equation',{
        pages,
        lastpage,
        arr
    })
})

router.get('/api/equation',async(req,res)=>{
    let lastpage= await Page.find().sort({_id:-1}).limit(1).lean()
    let arr=lastpage[0].arr
    res.send(arr)
})

router.get('/api/list',async(req,res)=>{
    let lastpage= await Page.find().sort({_id:-1}).limit(1).lean()
    res.send(lastpage)
})
                    
router.post('/page/equation',async(req,res)=>{
    let {n,a,b,E,arr} = req.body 
    let page = await new Page({n,a,b,E,arr})
    await page.save()
    res.redirect('/')
})

router.get('/page/equation2',(req,res)=>{  
    res.render('page/equation2')
})

router.get('/page/equation3',(req,res)=>{  
    res.render('page/equation3')
})

module.exports = router 
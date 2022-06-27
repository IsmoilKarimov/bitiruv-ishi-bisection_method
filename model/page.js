const {Schema, model} = require('mongoose')

const page = new Schema({
    n: Number,
    a: Number,
    b: Number,
    E:Number,
    arr: [Number]
})
module.exports = model('Page', page)
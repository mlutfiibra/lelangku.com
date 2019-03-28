const express = require('express')
const router = express.Router()
const Model = require('../models')
var multer  = require('multer')
var upload = multer({ dest: './public/upload/' })


//CREATE
router.get('/',(req,res)=>{
    Model.Item.findAll({order : [['createdAt','DESC']]}).then((data)=>{
        let success = req.query.success
        res.render('items/list_items',{data:data,success:success,err:null})
    })
    .catch((err)=>{res.render('list_items',{err:err.message})})
})

router.get('/add',(req,res)=>{
    res.render('items/add_items',{err:null})
})

router.post('/add', upload.single('avatar'), (req,res,next)=>{
    let name = req.body.name
    let price = req.body.price
    let img_path = req.file.path
    let location = req.body.location
    Model.Item.create({
        name:name,
        price:price,
        img_path:img_path,
        location:location
    })
    .then(function(){
        res.redirect('/items/?success=add')
    })
    .catch(function(err){res.render('add_items',{err:err.message})})//perbaiki
})

router.get('/edit/:id', (req,res)=>{
    let id = req.params.id
    Model.Item.findByPk(id).then((data) => {
        res.render('items/edit_items',{data:data,err:null})
    })
})

router.post('/edit/:id', upload.single('avatar'), (req,res,next)=>{
    let name = req.body.name
    let price = req.body.price
    let img_path = req.file.path
    let location = req.body.location
    let id = req.params.id
    Model.Item.findByPk(id).then((data) => {
        data.update({name:name, price:price, img_path:img_path,location:location})
        .then(() => {
            // res.send(req.file)
            res.redirect('/items/?success=edit')    
        })
        .catch(function(err){res.render('items/edit_items',{err:err.message})})//perbaiki
    })
})

router.get('/delete/:id',(req,res)=>{
    let id = req.params.id
    Model.Item.findByPk(id).then(data => {
        data.destroy().then(function(){
            res.redirect('/items/?success=delet')
        })
    })
    .catch(function(err){res.render('items/list_items',{err:err.message})})//perbaiki
})

module.exports = router
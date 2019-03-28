const express = require('express')
const router = express.Router()
const Model = require('../models')


//CREATE
router.get('/',(req,res)=>{
    Model.Item.findAll({order : [['createdAt','ASC']]}).then((data)=>{
        let success = req.query.success
        res.render('list_items',{data:data,success:success,err:null})
    })
    .catch((err)=>{res.render('list_items',{err:err.message})})
})

router.get('/add',(req,res)=>{
    res.render('add_items',{err:null})
})

router.post('/add',(req,res)=>{
    let name = req.body.name
    let price = req.body.price
    let img_path = req.body.img
    let location = req.body.location
    Model.Item.create({
        name:name,
        price:price,
        img_path:img_path,
        location:location
    })
    .then(function(){
        let success = 'add'
        res.redirect('/items/?success=add')
    })
    .catch(function(err){res.render('add_items',{err:err.message})})//perbaiki
})

router.get('/edit/:id', (req,res)=>{
    let id = req.params.id
    Model.Item.findByPk(id).then((data) => {
        res.render('edit_items',{data:data,err:null})
    })
})

router.post('/edit/:id',(req,res)=>{
    let name = req.body.name
    let price = req.body.price
    let img_path = req.body.img
    let location = req.body.location
    let id = req.params.id
    Model.Item.findByPk(id).then((data) => {
        data.update({name:name, price:price, img_path:img_path,location:location})
        .then(() => {
            res.redirect('/items/?success=edit')    
        })
        .catch(function(err){res.render('edit_items',{err:err.message})})//perbaiki
    })
})

router.get('/delete/:id',(req,res)=>{
    let id = req.params.id
    Model.Item.findByPk(id).then(data => {
        data.destroy().then(function(){
            res.redirect('/items/?success=delet')
        })
    })
    .catch(function(err){res.render('list_items',{err:err.message})})//perbaiki
})

module.exports = router
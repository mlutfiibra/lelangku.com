const express = require('express')
const router = express.Router()
const Model = require('../models')
var multer  = require('multer')
var upload = multer({ dest: './public/upload/' })
// var L = require('leaflet')
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);


router.get('/',(req,res) => {
    let itemPrice = null // belum ditambahin hasil bidding
    let distance = req.body.distance
    let bank = req.body.bank
    let courrier = req.body.courrier
    Model.Bank.findAll().then(banks =>{
        Model.Courrier.findAll({raw:true}).then(courriers =>{
            res.render('checkout/total_payment',{banks:banks,courriers:courriers,distance:distance,bank:bank,courrier:courrier,itemPrice:itemPrice})
        })
    })
})
router.post('/',(req,res) => {
    let itemPrice = null // belum ditambahin hasil bidding
    let distance = req.body.distance
    let bank = req.body.bank
    let courrier = req.body.courrier
    // console.log([distance,bank,courrier])
    Model.Bank.findAll().then(banks =>{
        Model.Courrier.findAll({raw:true}).then(courriers =>{
            // res.render('checkout/total_payment',{banks:banks,courriers:courriers})
            res.render('checkout/total_payment',{banks:banks,courriers:courriers,distance:distance,bank:bank,courrier:courrier,itemPrice:itemPrice})
        })
    })
})

router.get('/payment',(req,res) => {
    let token = req.query.kode
    let total = req.query.total
    Model.Bank.findOne({where:{token:token}})
    .then(bank =>{
        res.render('checkout/payment_page',{bank:bank,total:total,token:token})
    })
})

router.get('/payment/confirmation',(req,res) => {
    res.render('checkout/payment_confirmation')
})

module.exports = router
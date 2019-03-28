const routes = require('express').Router()
const Model = require('../models')

routes.get('/list-item', (req, res) => {
    Model.Item.findAll({
            order: [
                ['createdAt', 'ASC']
            ]
        }).then((data) => {
            let success = req.query.success
            res.render('admin/list-item', {
                data: data,
                success: success,
                err: null
            })
        })
        .catch((err) => {
            res.render('admin/list-item', {
                err: err.message
            })
        })
});

routes.get('/add-item', (req, res) => {
    res.render('admin/add-item', {
        err: null
    })
})


routes.post('/add-item', (req, res) => {
    let name = req.body.name
    let price = req.body.price
    let img_path = req.body.img
    let location = req.body.location
    Model.Item.create({
            name: name,
            price: price,
            img_path: img_path,
            location: location
        })
        .then(function () {
            let success = 'add'
            res.redirect('/admin/list-item/?success=add')
        })
        .catch(function (err) {
            res.render('admin/add-item', {
                err: err.message
            })
        }) //perbaiki
})

routes.get('/list-bidding', (req, res) => {
    let success = ''
    let data = {}
    Model.Bidding.findAll({
            order: [
                ['createdAt', 'ASC']
            ]
        })
        .then((dataItems) => {
            success = req.query.success

            return Model.Item.findAll({
                include: [{
                    model: Model.User,
                    required: true
                }]
            })
        })
        .then(data => {
            // res.json(data)

            res.render('admin/list-bidding', {
                data: data,
                success: success,
                err: null
            })
        })
        .catch((err) => {
            console.log(err);
            // res.render('items/list_items', {
            //     err: err.message
            // })
        })
})

module.exports = routes
const routes = require('express').Router()
const Model = require('../models')

routes.get('/:id/user-bidding', (req, res) => {
    let success = ''
    let data = {}
    Model.Item.findAll({
            order: [
                ['createdAt', 'ASC']
            ]
        }).then((dataItems) => {
            success = req.query.success
            data = dataItems

            return Model.User.findAll({
                include: [{
                    model: Model.Item
                }]
            })
        })
        .then(x => {
            res.json(x)
            
            res.render('index', {
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
});

module.exports = routes
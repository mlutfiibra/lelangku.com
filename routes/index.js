const routes = require('express').Router()
const Model = require('../models')

routes.get('/', (req, res) => {
    Model.Item.findAll({
            order: [
                ['createdAt', 'ASC']
            ]
        }).then((data) => {
            let success = req.query.success
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

routes.get('*', (req, res) => {
    res.status(404).send('404 page not found');
})

module.exports = routes
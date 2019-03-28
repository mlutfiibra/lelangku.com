const express = require('express');
const routes = express.Router();
const ModelUser = require('../models').User

routes.get('/', (req, res) => {
    ModelUser.findAll()
    .then(users => {
        // res.json(users)
        res.render('user/index', {users})
    })
})

routes.get('/edit/:id', (req, res) => {
    ModelUser.findByPk(req.params.id)
        .then(user => {
            res.render('user/edit', {
                user
            })
        })
})

routes.post('/edit/:id', (req, res) => {
    const host = req.hostname;
    // const filePath = req.protocol + "://" + host + '/' + 'public/img';
    const reqFilePath = '/img/' + req.file.originalname

    ModelUser.update({  
            ...req.body,
            img_path: reqFilePath,
            username: req.body.name,
            updatedAt: new Date
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            // res.json(response)
            res.redirect('/')
        })
})

routes.get('/delete/:id', (req, res) => {
    ModelUser.destroy({
        where :{
            id:req.params.id
        }
    })
    .then(destroyed => {
        res.redirect('/users')
    })
})

module.exports = routes
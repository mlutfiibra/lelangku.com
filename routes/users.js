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

routes.get('/signin', (req,res) => {
    res.render('user/signin')
})

routes.post('/signin', (req, res) => {
    ModelUser.findOne({
            where: {
                email: req.body.email  
            }
        })
        .then(user => {
            if(user.comparePasswordWithSalt(req.body.password, user)) {
                res.redirect('/users/signin')
            }
        })
        .catch(err=> {
            console.log(err);
        })
})

routes.get('/signup', (req, res) => {
    res.render('user/signup')
})

routes.post('/signup', (req, res) => {
    ModelUser.isEmailUnique(req.body.email)
    .then(found=>{
        if(found === true) {
            throw ('Email sudah ada')
        }else {
            return ModelUser.create({
                ...req.body,
                balance: 0,
                role: 'buyer',
                createdAt: new Date,
                updatedAt: new Date
            })
        }
    })
    .then(response => {
        // console.log('sukses ==> ', response);
        res.redirect('/users/')
    })
    .catch(err => {
        // console.log('errr ==> ', err);
        res.render('user/signup', {err})
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
            res.redirect('/users/signup')
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
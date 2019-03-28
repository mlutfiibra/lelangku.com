const express = require('express');
const routes = express.Router();
const ModelUser = require('../models').User

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
            if(user!==null) {
                if(user.role==="admin") {
                    req.session.isLoggedIn = true
                    req.session.name = user.name
                    req.session.role = user.role

                    res.redirect('/')
                }else if(user.comparePasswordWithSalt(req.body.password, user)) {
                    req.session.isLoggedIn = true
                    req.session.name = user.name
                    req.session.role = user.role

                    res.redirect('/')
                }else{
                    err = 'Email atau password salah'
                    res.render('users/signin', {err})
                }
            }else { 
                let err = 'Email atau password salah'
                res.render('user/signin', {err})
            }
        })
        .catch(err=> {
            res.render('/users/signin', {err})
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

routes.get('/logout', (req, res) => {
    req.session.isLoggedIn = false
    req.session.name = ""
    req.session.role = ""

    res.redirect('/')
})

module.exports = routes

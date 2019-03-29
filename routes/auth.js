const express = require('express');
const routes = express.Router();
const ModelUser = require('../models').User

routes.get('/signin', (req,res) => {
    let err = req.query.err
    res.render('user/signin',{err:err})
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
                    let err = 'wrong password!'
                    res.redirect(`/auth/signin?err=${err}`)
                }
            }else { 
                let err = 'wrong email!'
                res.redirect(`/auth/signin?err=${err}`)
            }
        })
        .catch(err=> {
            res.redirect(`/auth/signin?err=${err}`)
        })
})

routes.get('/signup', (req, res) => {
    let err = req.query.err
    res.render('user/signup',{err:err})
})

routes.post('/signup', (req, res) => {
    ModelUser.isEmailUnique(req.body.email)
    .then(found=>{
        if(found === true) {
            let err = 'email already exist!'
            res.redirect(`/auth/signup?err=${err}`)
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
        res.redirect('/user/')
    })
    .catch(err => {
        // console.log('errr ==> ', err);
        err = err.message
        res.redirect(`/auth/signup?err=${err}`)
    })
})

routes.get('/logout', (req, res) => {
    req.session.isLoggedIn = false
    req.session.name = ""
    req.session.role = ""

    res.redirect('/')
})

module.exports = routes

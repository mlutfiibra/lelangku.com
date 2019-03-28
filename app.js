const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const PORT = 5100
const routes = require('./routes')
const session = require('express-session')
const multer  = require('multer')
const upload = multer({ dest: 'public/img' })
const items = require('./routes/items')
const users = require('./routes/users')
const admin = require('./routes/admin')
const auth = require('./routes/auth')
const biddings = require('./routes/biddings')
const isAuth = require('./middleware/isAuth')
const isAdmin = require('./middleware/isAdmin')
const getSession = require('./helpers/getSession')
const checkout = require('./routes/checkout')
const sess = {
    secret: 'isLoggedIn'
}
app.use(session(sess))

app.use((req,res,next) => {
    app.locals.session = req.session
    next()
})

app.use('/public',express.static('./public'))

app.use('/public/leaflet',express.static("./node_modules/leaflet/dist"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

app.use('/auth', auth)
app.use('/users', isAuth, upload.single('img_path'), users)
app.use('/admin', isAdmin, admin)
app.use('/checkout',checkout)
app.use('/users', upload.single('img_path'), users)
app.use('/items', items)
app.use('/biddings', biddings)
app.use('/', routes)

app.listen(PORT, ()=> console.log(`Listening to ${new Date} radio ${PORT} F.M`))


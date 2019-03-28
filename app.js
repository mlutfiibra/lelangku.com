const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const PORT = 5300
const routes = require('./routes')

const multer  = require('multer')
const upload = multer({ dest: 'public/img' })
const items = require('./routes/items')
const users = require('./routes/users')
const admin = require('./routes/admin')
const biddings = require('./routes/biddings')
const checkout = require('./routes/checkout')

app.use('/public',express.static('./public'))

app.use('/public/leaflet',express.static("./node_modules/leaflet/dist"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

app.use('/checkout',checkout)
app.use('/users', upload.single('img_path'), users)
app.use('/admin', admin)
app.use('/items', items)
app.use('/biddings', biddings)
app.use('/', routes)

app.listen(PORT, ()=> console.log(`Listening to ${new Date} radio ${PORT} F.M`))


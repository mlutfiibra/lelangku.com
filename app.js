const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const PORT = 5400
const routes = require('./routes')
const items = require('./routes/items')
const users = require('./routes/users')

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

app.use('/items', items)
// app.use('/users', users)
app.use('/', routes)

app.listen(PORT, ()=> console.log(`Listening to ${new Date} radio ${PORT} F.M`))


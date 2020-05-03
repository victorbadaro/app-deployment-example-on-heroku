const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const app = express()
let port = process.env.PORT

if(port == null || port == '')
    port = 3333

app.set('view engine', 'njk')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

nunjucks.configure('src/app/views', {
    express: app,
    autoescape: false,
    noCache: true
})

app.listen(port, () => {
    console.log(`Listening at: ${port}`)
})
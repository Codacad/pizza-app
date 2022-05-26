require('dotenv').config()
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
const Router = require('./routes/router')
const { application } = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

// root route
app.use('/', Router)

app.use(express.static(path.join(__dirname, "public")))

// Set ejs Templates
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

const express = require('express');
const app = express();
require('dotenv').config();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const authorsRouter = require('./routes/authors');



app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}));

const mongoose = require('mongoose');
mongoose.connect(process.env.db, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));

app.use('/', indexRouter);
app.use('/authors',authorsRouter);


const port = process.env.PORT || 3000;
app.listen( port ,() => console.log('app is running'));

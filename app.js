const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const bookRouter = require('./routes/bookRoutes');



app.use(morgan('tiny'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//static files
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));


app.use('/books', bookRouter);
app.get('/', function (req, res) {
    res.render('index',
                {
                    nav : [{link:'/books', title:'Books'},
                           {link:'/authors', title:'Authors'}],
                            title:'Library'
                }
        );
});


app.listen(3000, function () {
    debug(`Listening on port  ${chalk.green(port)}`);
});
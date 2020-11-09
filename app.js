const express = require('express');
const newsRouter = require('./src/routes/news');

const app = express();
const port = process.env.PORT || 5000;

//Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));


//Set view engine
app.set('views', './src/views');
app.set('view engine', 'ejs');


//Routes
app.use('/', newsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));



const path = require('path');
const express = require('express');

const routes = require('./routes/routes');

const app = express();

// Configurations for templating
app.set('view engine','ejs');
// where to find the templates
app.set('views', path.join(__dirname, 'views')); 

// serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Configure the routes
app.use(routes);

app.listen(3000);
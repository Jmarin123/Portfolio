const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/about', (req, res) => {
    res.render('aboutMe.ejs');
});

app.use('/contact', (req, res) => {
    res.render('contact.ejs');
})

app.use('/', (req, res) => {
    res.render('landing.ejs');
})

app.use('*', (res, req) => {
    req.redirect('/');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})
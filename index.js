const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/projects', (req, res) => {
    res.render('projects.ejs');
});

app.use('/', (req, res) => {
    res.render('landing.ejs');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})
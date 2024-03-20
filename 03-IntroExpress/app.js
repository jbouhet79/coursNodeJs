const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// definition du moteur de template
app.set('view engine', 'ejs')

// definition des views (si elles ne sont pas dans un dossier views, mais toto)
// app.set('views', 'toto');

app.use('/public', express.static(__dirname + '/public'))
app.use(morgan('dev'));
app.use(cors());

let title = "";
let currentPage = "";
let { subtitle, projects } = require('./data');

app.use((rep, res, next) => {
    console.log('Time: %d', Date.now());
    next()
})

app.get('/', (req, res) => {
    res.redirect(301, '/home')
})

app.get('/home', (req, res) => {
    let title = 'Portfolio de Jérôme';
    currentPage = 'home';
    res.status(200).render('home', { title, subtitle, currentPage, projects })
})

app.get('/formation', (req, res) => {
    let title = 'Mon parcours de formation';
    currentPage = 'formation';
    res.status(200).render('formation', { title, subtitle, currentPage })
})

app.get('/entreprise', (req, res) => {
    let title = 'Présentation de la MAIF';
    currentPage = 'entreprise';
    res.status(200).render('entreprise', { title, subtitle, currentPage })
})

app.get('/profil', (req, res) => {
    let title = 'Mon parcours';
    currentPage = 'profil';
    res.status(200).render('profil', { title, subtitle, currentPage })
})

app.get('/contact', (req, res) => {
    let title = 'Me contacter';
    currentPage = 'contact';
    res.status(200).render('contact', { title, subtitle, currentPage })
})

app.use((req, res) => {
    res.status(404).render('404')
})

app.listen(8080, "localhost", () => {
    console.log("Server is listening on port 8080");
})



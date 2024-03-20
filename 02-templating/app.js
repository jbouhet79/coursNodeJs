const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use('/public', express.static(__dirname + '/public'))
app.use(morgan('dev'));
app.use(cors());

app.use((rep, res, next) => {
    console.log('Time: %d', Date.now());
    next()                  // next permet de passer le use, défini par defaut (il execute en meme tps qu'il passe à la suite)
})

app.get('/', (req, res) => {
    res.redirect(301, '/home')   // redirige vers home + chgt de status
    // res.sendFile('views/home.html', {root : __dirname})  // sendFile -> renvoi vers un fichier
})


app.get('/home', (req, res) => {
    res.status(200).sendFile('views/home.html', { root: __dirname })
    // res.send('<h1>Hello World !</h1>')  // send -> envoi un reponse
})

app.get('/formation', (req, res) => {
    res.status(200).sendFile('views/formation.html', { root: __dirname })   // __dirname --> vers le chemin absolu
})

app.get('/entreprise', (req, res) => {
    res.status(200).sendFile('views/entreprise.html', { root: __dirname })

})

app.get('/profil', (req, res) => {
    res.status(200).sendFile('views/profil.html', { root: __dirname })

})

app.get('/contact', (req, res) => {
    res.status(200).sendFile('views/contact.html', { root: __dirname })

})

app.use((req, res) => {
    res.status(404).sendFile('views/404.html', { root: __dirname })
})

app.listen(8080, "localhost", () => {
    console.log("Server is listening on port 8080");
})



// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(
//     (Request, Response) => {

//         let fichier = "";

//         Response.setHeader("content-type", "text/html");
//         Response.write('<head><meta charset="UTF-8"></head>')

//         if ((Request.url === '/' || Request.url === '/home') && Request.method === 'GET') {
//             fichier = './views/home.html';
//         } else if ((Request.url === '/formation') && Request.method === 'GET') {
//             fichier = './views/formation.html';
//         } else if ((Request.url === '/entreprise') && Request.method === 'GET') {
//             fichier = './views/entreprise.html';
//         } else if ((Request.url === '/profil') && Request.method === 'GET') {
//             fichier = './views/profil.html';
//         } else if ((Request.url === '/contact') && Request.method === 'GET') {
//             fichier = './views/contact.html';
//         } else {
//             fichier = './views/404.html';
//         }

//         fs.readFile(fichier, (err, data) => {
//             if(err) {
//                 console.log(err);
//                 Response.end()
//             } else {
//                 Response.write(data);
//                 Response.end()
//             }
//         })
//     }
// )

// server.listen(8080, "localhost", ()=>{
//     console.log("Server is listening on port 8080");
// })


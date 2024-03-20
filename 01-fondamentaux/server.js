// console.log("hello");

// /* fct fléchée */
// const hello = (nom) => {
//     console.log("Bonjour, je m'appelle " + nom);
// }

// /* fct native */
// function hello2(nom) {
//     console.log("Bonjour je mappelle " + nom);
// }

// hello2("Sofiane")
// hello2("Thibault")

// const hello3 = nom => console.log("Bonjour je mappelle " + nom);

// hello3("Jeremy")

/* =====================*/

// setInterval (() => {
//     console.log("Salut");
// }, 2000);

/* =====================*/

//console.log(__dirname);
// donne le nom du dossier

//========================
// require('./formation');

// ======== bis avec les modules
// let eleves = require('./formation')

// console.log(eleves);

//  avec le destruct...
// let { eleves, cours } = require('./formation')

// console.log(cours);

//========= commande system pour voir les infos fichiers

// const system = require('fs');

// console.log(system);

// throw new Error ('il y a une nouvelle erreur')
// gestion des erreurs avec throw, catch....


// ============ HTTP ==  url ====

// const http = require('http');

// const server = http.createServer(
//     (Request, Response) => {
//         if ((Request.url === '/' || Request.url === '/home') && Request.method === 'GET') {
//             console.log('Vous êtes sur la page home');
//         } else if ((Request.url === '/formation') && Request.method === 'GET') {
//             console.log('Vous êtes sur la page Simplon');
//         } else if ((Request.url === '/entreprise') && Request.method === 'GET') {
//             console.log('Vous êtes en alternance chez la Maif');
//         }
//     }
// )

// server.listen(8080, "localhost", ()=>{
//     console.log("Server is listening on port 8080");
// })

// let rep = "";


const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (Request, Response) => {

        let fichier = "";

        Response.setHeader("content-type", "text/html");
        Response.write('<head><meta charset="UTF-8"></head>')

        if ((Request.url === '/' || Request.url === '/home') && Request.method === 'GET') {
            fichier = './views/home.html';
        } else if ((Request.url === '/formation') && Request.method === 'GET') {
            fichier = './views/formation.html';
        } else if ((Request.url === '/entreprise') && Request.method === 'GET') {
            fichier = './views/entreprise.html';
        } else if ((Request.url === '/profil') && Request.method === 'GET') {
            fichier = './views/profil.html';
        } else if ((Request.url === '/contact') && Request.method === 'GET') {
            fichier = './views/contact.html';
        } else {
            fichier = './views/404.html';
        }

        fs.readFile(fichier, (err, data) => {
            if(err) {
                console.log(err);
                Response.end()
            } else {
                Response.write(data);
                Response.end()
            }
        })
    }
)

server.listen(8080, "localhost", ()=>{
    console.log("Server is listening on port 8080");
})

// ===== Autre version avec Switch

// switch (req.url) {
//     case '/':
//     case '/home':
//        console.log('Vous êtes sur la home page');            
//         break;
//     case '/formation':
//        console.log('Vous êtes en formation chez Simplon');
//         break;
//     case '/entreprise':
//        console.log('Vous êtes à la Maif');
//         break;
//     case '/maison':
//        console.log('Vous êtes en pyjama');
//         break;
//     default:
//        console.log('404 dans les choux');
//         break;
// }




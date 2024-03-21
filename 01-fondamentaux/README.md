# coursNodeJs
# 01 - Fondamentaux

## Rappels syntaxe : 
https://code-garage.fr/blog/le-guide-simplifie-sur-la-syntaxe-markdown

'# Titre 1
'## Titre 2
...
'###### Titre 6

'_italique_

'**gras**

'**_gras/italique_**

'~~barré~~

## Cours / Exercices


Dans le Terminal GitBash

57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ touch intro.js

57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ node intro
hello
Bonjour je mappelle Sofiane
Bonjour je mappelle Thibault

57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ node intro
hello
Bonjour je mappelle Sofiane
Bonjour je mappelle Thibault
Bonjour je mappelle Jeremy

### nouveau fichier : vehicule.js

57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ touch vehicule.js

<img src="captures/capture_voiture1.png" alt="drawing" width="400"/>

let voiture = {
    chevaux: 4,
    annee: 2024,
    energy: "diesel"
}

console.log(voiture);

console.log(voiture.energy);

console.log(voiture["energy"]);

#### Dans le terminal

57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ node vehicule.js
{ chevaux: 4, annee: 2024, energy: 'diesel' }
diesel
diesel


<img src="captures/capture_voiture1.png" alt="drawing" width="400"/>

let voiture = {
    chevaux: 4,
    annee: 2024,
    energy: "diesel",
    a: ()=> console.log(this),
    b: function () {
        console.log(this)
    }
}

voiture.a()
voiture.b()

#### Dans le terminal

57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ node vehicule.js
{}
{
  chevaux: 4,
  annee: 2024,
  energy: 'diesel',
  a: [Function: a],
  b: [Function: b]
}


==> L'objet global de NODE est accessible de partout !!!!!!!

<img src="captures/capture_voiture_le_destructuring.png" alt="drawing" width="400"/>

//============== LE DESTUCTURING ===============

let voiture = {
    chevaux: 4,
    annee: 2024,
    energy: "diesel",
    a: ()=> console.log(this, this.energy),
    b: function () {
        console.log(this, this.energy)
    }
}

#### Dans le terminal

PS C:\Workspaces\coursNodeJs> node vehicule
2024 diesel
PS C:\Workspaces\coursNodeJs> 

<img src="captures/capture_formation.png" alt="drawing" width="400"/>

//========================
require('./formation');
<img src="captures/capture_formation_intro.png" alt="drawing" width="400"/>

#### Dans le terminal

57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ node intro
[
  { nom: 'Omar', niveau: 1 },
  { nom: 'Sandrine', niveau: 1 },
  { nom: 'Olivier', niveau: 1 },
  { nom: 'Marie', niveau: 1 },
  { nom: 'Jérémy', niveau: 1 }
]
  Avec les modules :
  dans formation.js

<img src="captures/capture_formation_module.png" alt="drawing" width="400"/>

dans intro.js

<img src="captures/capture_intro_module.png" alt="drawing" width="400"/>

#### Dans le terminal

57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ node intro
[
  { nom: 'Omar', niveau: 1 },
  { nom: 'Sandrine', niveau: 1 },
  { nom: 'Olivier', niveau: 1 },
  { nom: 'Marie', niveau: 1 },
  { nom: 'Jérémy', niveau: 1 }
]

### Avec le destructuring on peut exporter/ importer des élts d'un même module

Dans formation :
<img src="captures/export_module.png" alt="drawing" width="400"/>

Dans intro :

<img src="captures/import_module.png" alt="drawing" width="400"/>

#### Dans le terminal
57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ node intro
[ 'JavaScript', 'PostegreSQL', 'NodeJS' ]


Intro : Info System
<img src="captures/commande_system.png" alt="drawing" width="400"/>

#### Dans le terminal

57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ node intro
{
  uid: -1,
  gid: -1,
  username: '57522J',
  homedir: 'C:\\Users\\57522J',
  shell: null
}

Infos syst 'fs'
'os' --> operating system
'fs' --> file system

<img src="captures/infos_fs.png" alt="drawing" width="400"/>

//========= commande system 

const system = require('fs');
console.log(system);
throw new Error ('il y a une nouvelle erreur')

--> gestion d'erreurs avec throw, catch...

#### Dans le terminal


## Constitution d'un url

https://maif.fr/assurance

protocol : https://

domaine : 13.146.246.42

port : 3000

ressource : /assurance => end point (// avec API REST)

**_crypté (haché) ==> impossible à décrypter_**

PC --> requete --> Server

PC <-- response <-- Server ( response et requete avec head, body,... )

**! Rq :** Couper l'execution sur le Terminal : ctrl + c

<img src="captures/http_url.png" alt="drawing" width="400"/>

const http = require('http');

const server = http.createServer(
    (Request, Response) => {
        console.log("Server created successfully");
    }
)

server.listen(8080, "localhost", ()=>{
    console.log("Server is listening on port 8080");
})

#### Dans le terminal

57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ node intro
Server is listening on port 8080
 
==> Après avoir ouvert localhost:8080 dans le navigateur : 

#### Dans le terminal

 57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ node intro
Server is listening on port 8080
Server created successfully

Pour obtenir la methode :

<img src="captures/http_url2.png" alt="drawing" width="400"/>

const http = require('http');

const server = http.createServer(
    (Request, Response) => {
        console.log("Server created successfully");
        console.log(Request.method);
    }
)

server.listen(8080, "localhost", ()=>{
    console.log("Server is listening on port 8080");
})

<img src="captures/http_url_3.png" alt="drawing" width="400"/>


server.listen(8080, "localhost", ()=>{
    console.log("Server is listening on port 8080");
})

après avoir saisi : tttp://localhost:8080/entreprise dans le anv

57522J@PWVD3139 MINGW64 /c/Workspaces/coursNodeJs
$ node intro
Server is listening on port 8080
Vous êtes en alternance chez la Maif

Autre ex :

<img src="captures/http_url_4.png" alt="drawing" width="400"/>

let rep = "";

const server = http.createServer(
    (Request, Response) => {
        if ((Request.url === '/profil') && Request.method === 'GET') {
            console.log('vous êtes sur la page profil');
            rep = true;
        } else if ((Request.url === '/contact') && Request.method === 'GET') {
            console.log('vous êtes sur la page contact');
            rep = true;
        } else if (rep !== true) {
            console.log('404 page non valide');
        }
        // } else {
        //     console.error('404 page non valide');
        // }
    }
)

server.listen(8080, "localhost", ()=>{
    console.log("Server is listening on port 8080");
})

// ===== Autre version avec Switch

switch (req.url) {
    case '/':
    case '/home':
       console.log('Vous êtes sur la home page');            
        break;
    case '/formation':
       console.log('Vous êtes en formation chez Simplon');
        break;
    case '/entreprise':
       console.log('Vous êtes à la Maif');
        break;
    case '/maison':
       console.log('Vous êtes en pyjama');
        break;
    default:
       console.log('404 dans les choux');
        break;
}

<img src="captures/http_url_5.png" alt="drawing" width="400"/>

const server = http.createServer(
    (Request, Response) => {


        Response.setHeader("content-type", "text/html");
        Response.write('<head><meta charset="UTF-8"></head>')

        if ((Request.url === '/' || Request.url === '/home') && Request.method === 'GET') {
            Response.write('<h1>Vous êtes sur la page home</h1>');
        } else if ((Request.url === '/formation') && Request.method === 'GET') {
            Response.write('<h1>Vous êtes sur la page Simplon</h1>');
        } else if ((Request.url === '/profil') && Request.method === 'GET') {
            Response.write('<h1>vous êtes sur la page profil</h1>');
            // rep = true;
        } else if ((Request.url === '/contact') && Request.method === 'GET') {
            Response.write('<h1>vous êtes sur la page contact</h1>');
            // rep = true;
        // } else if (rep !== true) {
        //     Response.write('404 page non valide');
        // }
        } else {
            Response.write('404 page non valide');
        }
        Response.end()
)

# Installation nodemon

permet de relance le code à chaque modif

PS C:\Workspaces\coursNodeJs> npm install --save-dev nodemon

PS C:\Workspaces\coursNodeJs> npm init -y

==> création d'un dossier node_modules (à ne pas modifier !!!!)

==> création de 2 fichiers json

dans script, inidiquer les fichiers à relancer automatiquement à chaque modif :
  "dev": "nodemon ./server.js"

<img src="captures/package_json.png" alt="drawing" width="400"/>

ex : "start": "nodemon index.js" <== lancement de index.js

# Création d'un dossier
# Création d'un fichier dans un dossier (à créer)

--> Voir le fichier gestionFichiers.js

<img src="captures/gestionFichiers1.png" alt="drawing" width="400"/>

const fs = require('fs');

<img src="captures/gestionFichiers_dossier.png" alt="drawing" width="400"/>

================= CREATION et SUPPRESSION de DOSSIER

if (!fs.existsSync('./monDossier')) {
    fs.mkdir('./monDossier', (Error)=>{     // mkdir -> création du dossier
        if (Error) {
            console.log(Error);
        } else {
            console.log('Dossier correctement créé');
        }
    })
} else {

     fs.rmdir('./monDossier', (Error)=>{        // rmdir -> suppression du dossier
        if (Error) {
            console.log(Error);
        } else {
            console.log('Dossier correctement supprimé');
        }
    })
}

============= 2nd méthode

fs.access('./monDossier', (err)=>{      // access -> Tester si le chemin existe // + performant avec le callback pour la gestion d'erreur
    if (err){
        fs.mkdir('./monDossier', (Error)=>{     // mkdir -> création du dossier
            if (Error) {
                console.log(Error);
            } else {
                console.log('Dossier correctement créé');
            }
        })
    } else {
        fs.rmdir('./monDossier', (Error)=>{        // rmdir -> suppression du dossier
            if (Error) {
                console.log(Error);
            } else {
                console.log('Dossier correctement supprimé');
            }
        })
    }
})

<img src="captures/gestionFichiers_raccourcis.png" alt="drawing" width="400"/>
objet Error

mkdir => création d'un dossier : monDossier
rmdir => suppression d'un dossier
touch gestionFichiers.js => création d'un fichier : gestionFichiers.js

ctrl + MAJ + L ( ou ctrl + F2)==> sélection de TOUTES les occurences
ctrl + d  ==> sélection UNE à UNE des occurences suivantes

<img src="captures/gestionFichiers_fichier.png" alt="drawing" width="400"/>

================ CREATION d'un FICHIER dans un DOSSIER DIRECTEMENT ===================

fs.access('./monDossier', (err)=>{      // access -> Tester si le chemin existe // + performant avec le callback pour la gestion d'erreur
    if (err){
        fs.mkdir('./monDossier', (Error)=>{     // mkdir -> création du dossier
            if (Error) {
                console.log(Error);
            } else {
                console.log('Dossier correctement créé');
                fs.writeFile(
                    './monDossier/monFichier.txt',
                    'Ce fichier est écrit avec node.js',
                    (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('le fichier a été créé correctement');
                    }
                }
                )
            }
        })
    } 
})

============ 2nd version

const makeFile = () => {
    fs.writeFile(
        './monDossier/monFichier.txt',
        'Ce fichier est écrit avec node.js',
        (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('le fichier a été créé correctement');
        }
    }
    )
}

<img src="captures/gestionFichiers_fichier_suppression_creation.png" alt="drawing" width="400"/>

// === SUPPRESSION - CREATION d'un FICHIER =============

if (!fs.existsSync('./monDossier/monFichier.txt')) {
    fs.writeFile(
        './monDossier/monFichier.txt',
        'Ce fichier est écrit avec node.js',
        (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('le fichier a été créé correctement');
            }
        }
    )
} else {
    fs.unlink ('./monDossier/monFichier.txt', (Error) => {
        if (Error) {
            console.log(Error);
        } else {
            console.log('Dossier correctement supprimé');
        }
    })
}

<img src="captures/gestionFichiers_fichier2.png" alt="drawing" width="400"/>

OU ============

const makeFile = () => 
    fs.writeFile(
        '.:monDossier/monFichier.txt',
        'Ce fichier est écrit avec node.js',
        err => err ? console.log(err) : console.log('le fichier a été correctement créé')
);


const createDir = () => {
    fs.mkdir('./monDossier', (Error)=>{     // mkdir -> création du dossier
        // if (Error) {
        //     console.log(Error);
        // } else {
        //     makeFile()
        // }
// sur une seule ligne
        Error ? console.log(Error) : makeFile ();  // if -> ?  ET else -> :
})}

ou ENCORE mieux !!!!!!!!!!

const createDir = () => fs.mkdir('./monDossier', Error => Error ? console.log(Error) : makeFile ())

fs.access('./monDossier', (err) => {
    if (err) {
        createDir()
    }
})

MIEUX =>

fs.access('./monDossier', err => err && createDir())

RECUPERER le contenu du fichier

fs.readFile(
    '.:monDossier/monFichier.txt',
    (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data.toString());
        }
    }
)

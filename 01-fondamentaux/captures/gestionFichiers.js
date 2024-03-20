const fs = require('fs');

// ================= CREATION et SUPPRESSION de DOSSIER

// if (!fs.existsSync('./monDossier')) {
//     fs.mkdir('./monDossier', (Error)=>{     // mkdir -> création du dossier
//         if (Error) {
//             console.log(Error);
//         } else {
//             console.log('Dossier correctement créé');
//         }
//     })
// } else {

//      fs.rmdir('./monDossier', (Error)=>{        // rmdir -> suppression du dossier
//         if (Error) {
//             console.log(Error);
//         } else {
//             console.log('Dossier correctement supprimé');
//         }
//     })
// }

// ============= 2nd méthode

// fs.access('./monDossier', (err)=>{      // access -> Tester si le chemin existe // + performant avec le callback pour la gestion d'erreur
//     if (err){
//         fs.mkdir('./monDossier', (Error)=>{     // mkdir -> création du dossier
//             if (Error) {
//                 console.log(Error);
//             } else {
//                 console.log('Dossier correctement créé');
//             }
//         })
//     } else {
//         fs.rmdir('./monDossier', (Error)=>{        // rmdir -> suppression du dossier
//             if (Error) {
//                 console.log(Error);
//             } else {
//                 console.log('Dossier correctement supprimé');
//             }
//         })
//     }
// })


// objet Error

// mkdir => création d'un dossier : monDossier
// rmdir => suppression d'un dossier
// touch gestionFichiers.js => création d'un fichier : gestionFichiers.js

// ctrl + MAJ + L ( ou ctrl + F2)==> sélection de TOUTES les occurences
// ctrl + d  ==> sélection UNE à UNE des occurences suivantes


// ================ CREATION d'un FICHIER dans un DOSSIER DIRECTEMENT ===================

// fs.access('./monDossier', (err)=>{      // access -> Tester si le chemin existe // + performant avec le callback pour la gestion d'erreur
//     if (err){
//         fs.mkdir('./monDossier', (Error)=>{     // mkdir -> création du dossier
//             if (Error) {
//                 console.log(Error);
//             } else {
//                 console.log('Dossier correctement créé');
//                 fs.writeFile(
//                     './monDossier/monFichier.txt',
//                     'Ce fichier est écrit avec node.js',
//                     (err) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log('le fichier a été créé correctement');
//                     }
//                 }
//                 )
//             }
//         })
//     } 
// })

// ============ 2nd version

// const makeFile = () => {
//     fs.writeFile(
//         './monDossier/monFichier.txt',
//         'Ce fichier est écrit avec node.js',
//         (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('le fichier a été créé correctement');
//         }
//     }
//     )
// }

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


// OU ============

// const makeFile = () => 
//     fs.writeFile(
//         '.:monDossier/monFichier.txt',
//         'Ce fichier est écrit avec node.js',
//         err => err ? console.log(err) : console.log('le fichier a été correctement créé')
// );


// const createDir = () => {
//     fs.mkdir('./monDossier', (Error)=>{     // mkdir -> création du dossier
//         // if (Error) {
//         //     console.log(Error);
//         // } else {
//         //     makeFile()
//         // }
// // sur une seule ligne
//         Error ? console.log(Error) : makeFile ();  // if -> ?  ET else -> :
// })}

// ou ENCORE mieux !!!!!!!!!!

// const createDir = () => fs.mkdir('./monDossier', Error => Error ? console.log(Error) : makeFile ())

// fs.access('./monDossier', (err) => {
//     if (err) {
//         createDir()
//     }
// })

// MIEUX =>

// fs.access('./monDossier', err => err && createDir())

// RECUPERER le contenu du fichier

// fs.readFile(
//     '.:monDossier/monFichier.txt',
//     (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data.toString());
//         }
//     }
// )
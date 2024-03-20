
# Codes d'état HTTP

Afficher / masquer la sous-section Codes d'état
1xx - Information
2xx - Succès
3xx - Redirection
4xx - Erreur du client HTTP
5xx - Erreur du serveur / du serveur d'application

## Installation EXPRESS

PS C:\Workspaces\coursNodeJs> npm install express

![alt text](captures_images/renvoi_vers_fichiers.png)
<img src="captures_images/renvoi_vers_fichiers.png" alt="drawing" width="200"/>

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile('views/home.html', {root : __dirname})  // sendFile -> renvoi vers un fichier
})


app.get('/home', (req, res) => {
    res.sendFile('views/home.html', {root : __dirname})   
    // res.send('<h1>Hello World !</h1>')  // send -> envoi un reponse
})

app.get('/formation', (req, res) => {
    res.sendFile('views/formation.html', {root : __dirname})   // __dirname --> vers le chemin absolu
})


![alt text](captures_images/renvoi_vers_pages.png)

![alt text](captures_images/redirection_page_home+chgt_status.png)


#### Changement de status : 200 -> succès de la requête.

![alt text](captures_images/chgt_status_200.png)

#### Page inexistante : redirection vers page 404

![alt text](captures_images/erreur404_page_inexistante.png)

app.use((req, res) => {
    res.status(404).sendFile('views/404.html', {root : __dirname})   
})

#### next pour passer au cas suivant :
il execute en meme tps qu'il passe à la suite

![alt text](captures_images/next.png)

## Middleware 
Entre le client et le serveur

![alt text](captures_images/What-is-Middleware.webp)

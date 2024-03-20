# 03 - IntroExpress

PS C:\Workspaces\coursNodeJs\03-IntroExpress> npm install ejs

## definition du moteur de template
app.set('view engine', 'ejs')

La méthode sendFile est remplacée par render

## definition des views (si elles ne sont pas dans un dossier views, mais toto)

app.set('views', 'toto');

## Def de Props 
ex : Title qui voyage d'un endroit à un autre : de app.js vers home.ejs

![alt text](captures_images/def_titre_Scriptlet.png)
<img src="captures_images/def_titre_Scriptlet.png" alt="drawing" width="400"/>

![alt text](captures_images/def_titre_ds_app.png)
<img src="captures_images/def_titre_ds_app.png" alt="drawing" width="400"/>

## Définition de la variable title - balise Scriptlet
<% let title = 'Portfolio de Sofiane' %>  

<'h1 class="mb-1"><%= title %></h1>

## Injection du header

Création d'un dossier components/header.ejs dans /views

Copier l'ensemble du header des autres pages

Coller le lien :  <%- include('components/header'); %>
dans chacune des pages.

puis définition des titres et sous-titres pourchaque page dans app.ejs

![alt text](captures_images/def_titre_ds_chaque_page.png)
<img src="captures_images/def_titre_ds_chaque_page.png" alt="drawing" width="400"/>

## Définition de la page active.

Dans Header.ejs
![alt text](captures_images/page_active_ds_header.png)
<img src="captures_images/def_titre_ds_chaque_page.png" alt="drawing" width="400"/>

Dans app.js avec définition de la variable : currentPage

![alt text](captures_images/page_active_ds_app.png)
<img src="captures_images/def_titre_ds_chaque_page.png" alt="drawing" width="400"/>

## Utilisation Props projects pour injecter les 4 cartes sur la page home

Création du fichier cardProject dans /components
![alt text](captures_images/def_cardProjet.png)
<img src="captures_images/def_cardProjet.png" alt="drawing" width="400"/>


Suppression et injection des cartes via le fichier /components/cardProject
![alt text](captures_images/ajout_props_projets_ds_home_app.png)
<img src="captures_images/ajout_props_projets_ds_home_app.png" alt="drawing" width="400"/>


Définition du tableau d'objets projets (pour définir les cartes)
![alt text](captures_images/def_props_projets.png)
<img src="captures_images/def_props_projets.png" alt="drawing" width="400"/>



![alt text](captures_images/ajout_props_projets_ds_home_app.png)
<img src="captures_images/ajout_props_projets_ds_home_app.png" alt="drawing" width="400"/>

## Nouveau fichier data.js avec subtitle et projects

![alt text](captures_images/data.png)
<img src="captures_images/data.png" alt="drawing" width="400"/>



Export du fichier data :
module.exports = { subtitle, projects }
![alt text](captures_images/export.png)

Import dans le fichier app :
let { subtitle, projects } = require('./data');
![alt text](captures_images/import.png)

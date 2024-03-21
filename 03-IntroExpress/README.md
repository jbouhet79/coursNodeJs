# coursNodeJS

# 03 - IntroExpress

PS C:\Workspaces\coursNodeJs\03-IntroExpress> npm install ejs

## Définition du moteur de template
app.set('view engine', 'ejs')

La méthode sendFile est remplacée par render

### Définition des views (si elles ne sont pas dans un dossier views, mais toto)

app.set('views', 'toto');

### Fichiers .html --> .ejs

==> Pour éxécuter des fichiers dans le front, il faut renommer les fichiers html en .ejs.

## Définition de la variable title - balise Scriptlet

==> Décalaration de la variable title :

<% let title = 'Portfolio de Jérôme' %>  

==> Affichage de la variable title avec : <%=

ex:  <'h1 class="mb-1">**<%= title %>**<'/h1>

## Définition de Props (variable transmise d'un fichier à un autre)

**render** (remplace sendFile): renvoi les variables dans chaque page

ex : Title qui voyage d'un endroit à un autre : de app.js vers home.ejs

<img src="captures_images/def_titre_ds_app.png" alt="drawing" width="400"/>

renvoi les emplacements des variables par les valeurs définis pour chaque page.

<img src="captures_images/def_titre_Scriptlet.png" alt="drawing" width="400"/>

## Déclaration de composants : "components"
## Injection du header

Création d'un dossier **components/header.ejs** dans /views

Copier l'ensemble du header des autres pages

Coller le lien :  **<**%- include('components/header'); %>**
dans chacune des pages.

puis définition des titres et sous-titres pourchaque page dans app.ejs

<img src="captures_images/def_titre_ds_chaque_page.png" alt="drawing" width="400"/>

## Définition de la page active.

Dans app.js avec définition de la variable : currentPage
<img src="captures_images/page_active_ds_header.png" alt="drawing" width="500"/>

Dans Header.ejs

<img src="captures_images/page_active_ds_app.png" alt="drawing" width="400"/>

## Utilisation Props projects pour injecter les 4 cartes sur la page home

Création du fichier cardProject dans /components
<img src="captures_images/def_cardProjet.png" alt="drawing" width="400"/>


Suppression et injection des cartes via le fichier /components/cardProject
<img src="captures_images/ajout_props_projets_ds_home_app.png" alt="drawing" width="400"/>


Définition du tableau d'objets projets (pour définir les cartes)
<img src="captures_images/def_props_projets.png" alt="drawing" width="400"/>



<img src="captures_images/ajout_props_projets_ds_home_app.png" alt="drawing" width="400"/>

## Nouveau fichier data.js avec subtitle et projects

<img src="captures_images/data.png" alt="drawing" width="400"/>



Export du fichier data :
module.exports = { subtitle, projects }
<img src="captures_images/export.png" alt="drawing" width="400"/>


Import dans le fichier app :
let { subtitle, projects } = require('./data');
<img src="captures_images/import.png" alt="drawing" width="400"/>


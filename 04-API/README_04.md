# coursNodeJs
# 04-API

## Installations

PS C:\Workspaces\coursNodeJs\04-API> **npm init -y**

PS C:\Workspaces\coursNodeJs\04-API> npm install nodemon express cors pg

création:  *__.gitignore__*

PS C:\Workspaces\coursNodeJs\04-API> **npm start**

Lancer l'extension Thunder
NewRequest

<img src="./captures_img/debut_code_app.png" width="500" />

PS C:\Workspaces\coursNodeJs\04-API> **psql -U postgres -h localhost**

postgres=# **\l**

<img src="./captures_img/fichier connection.png" width="400" />


postgres=# **CREATE DATABASE my_first_api;**

postgres=# **\c my_first_api;**
Vous êtes maintenant connecté à la base de données « my_first_api » en tant qu'utilisateur « postgres ».

## Creation TABLE jeux

my_first_api=# CREATE TABLE jeux (
my_first_api(# id SERIAL PRIMARY KEY,
my_first_api(# name VARCHAR (50) NOT NULL,
my_first_api(# release_date DATE,   
my_first_api(# console_id INT DEFAULT 1
my_first_api(# );
CREATE TABLE

## Creation du fichier de données : addGame.sql

<img src="./captures_img/fichier_donnees_addGame.png" width="500" />


## Modification du fichier app pour le lier à body-parser
<img src="./captures_img/fichier_app_avec_body-parser.png" width="500" />


## Installation de body-parser pour afficher les données dans le fichier json

PS C:\Workspaces\coursNodeJs\04-API> **npm install body-parser;**


## Gestion de THUNDER REQUEST pour afficher la table, supprimer une ligne...

<img src="./captures_img/request_GET.png" width="600" />

<img src="./captures_img/effacer_un_jeu_DELETE.png" width="500" />

<img src="./captures_img/request_DELETE.png" width="600" />











<img src="./captures_img/.png" width="500" />



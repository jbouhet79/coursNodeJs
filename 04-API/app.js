const client = require('./connection.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// afficher la table jeux dans la requête "thunder client"
app.get('/jeux', (req, res) => {
    client.query(`SELECT * FROM jeux`, (err, result) => {
        if (!err) {
            res.status(200).send(result.rows);
        }
    })
    client.end;
})



// afficher un jeu
app.get('/jeux/:id', (req, res) => {
    client.query(`SELECT * FROM jeux WHERE id=${req.params.id}`,
        // conditions avec une TURNER (au lieu de if...)
        (err, data) => !err ? !data.rows ? res.status(404).send('Game was not found') : res.status(200).send(data.rows[0]) : res.status(500).send(err.message));
    // version longue avec if-else
    // {
    //     if (!err) {
    //         if (data.rows.length === 0) {
    //             res.status(404).send('Game was not found')
    //         } else {
    //             res.status(200).send(data.rows[0])
    //         }
    //     } else {
    //         res.status(500).send(err.message)
    //     }
    // }
    client.end;
})


// effacer un jeu
app.delete('/jeux/:id', (req, res) => {
    let insertQuery = `delete from jeux where id=${req.params.id}`;

    client.query(insertQuery, (err, result) => {
        if (!err) {
            if (result.rowCount === 0) {
                res.status(404).send('Deletion was not found')
            } else {
                res.status(204).send('Deletion was successful')
            }
        }
        else { console.log(err.message) }
    })
    client.end;
})

//ajouter un jeu
app.post('/jeux', (req, res) => {
    const jeu = req.body;
    let insertQuery = `insert into jeux(name, release_date) values('${jeu.name}', '${jeu.release_date}')`

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
})

// laisser à la fin
client.connect();

app.listen(port, 'localhost', () => {
    console.log(`Example app listening on port ${port}`)
})

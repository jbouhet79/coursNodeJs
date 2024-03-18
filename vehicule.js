// let voiture = {
//     chevaux: 4,
//     annee: 2024,
//     energy: "diesel"
// }

// console.log(voiture);
// console.log(voiture.energy);
// console.log(voiture["energy"]);

//=================================

// let voiture = {
//     chevaux: 4,
//     annee: 2024,
//     energy: "diesel",
//     a: ()=> console.log(this),
//     b: function () {
//         console.log(this)
//     }
// }

// voiture.a()
// voiture.b()

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

// objet littéral : chevaux

let {chevaux, annee, energy} = voiture;
console.log(annee, energy);

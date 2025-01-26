/* Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

*/

let nome  = 'BigHero';
let exp = 8010;
let nivel

if (exp > 10001){
    nivel = 'Radiante';
} else if (exp >= 9001) {
    nivel = 'Imortal';
} else if (exp >= 8001) {
    nivel = 'Ascendente';
} else if (exp >= 7001) {
    nivel = 'Platina';
} else if (exp >= 5001) {
    nivel = 'Ouro';
} else if (exp >= 2001) {
    nivel = 'Prata';
} else if (exp >= 1001) {
    nivel = 'Bronze';
} else {
    nivel = 'Ferro';
}

console.log("O herói de nome " + nome + " está no nivel de " + nivel);
/* Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/


//  valores de teste
let vitorias = 50;
let derrotas = 15;
let nivel;

function saldoVitoriaDerrota(vitorias, derrotas) {
    return vitorias - derrotas;
}

let resultado = saldoVitoriaDerrota(vitorias, derrotas);

if (resultado >= 101) {
    nivel = 'Imortal';
} else if (resultado >= 91) {
    nivel = 'Lendário';
} else if (resultado >= 81) {
    nivel = 'Diamante';
} else if (resultado >= 51) {
    nivel = 'Ouro';
} else if (resultado >= 21) {
    nivel = 'Prata';
} else if (resultado >= 11) {
    nivel = 'Bronze';
} else {
    nivel = 'Ferro';
}


console.log(`O Herói tem de saldo de ${resultado} vitórias e está no nível de ${nivel}`)
const jogadores = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

for (let i = 0; i < jogadores.length; i++){

let frase = `Jogador ${i+1}: `

for (let j = 0; j < jogadores[i].length; j++){
let gols = `${jogadores[i][j]},`
frase = frase + gols
    
}
console.log(frase)
}
/*
const tabuada = () => {
const openTabuada = Number(prompt(`Digite um numero para iniciar a tabuada`))

if (openTabuada > 0){
const tabuada = () => {
for(let i = 1; i <= 10; i++){
    console.log (`tabuada do número: `+ openTabuada)
    console.log(openTabuada + ` x ` + i + ` = ` + (openTabuada * i))
}
}
tabuada()    
}else{
    console.log(`Ferramenta tabuada encerrada`)
    
}
}
tabuada() 
*/

const multiplicando = [1, 2, 3, 4 ,5 ,6, 7, 8, 9, 10]

const numeroTabuada = Number(prompt(`Digite um numero:`))

for (let i in multiplicando){
    const resultado = numeroTabuada * multiplicando[i]
    console.log(`tabuada do número: ` + numeroTabuada)

    console.log(`${numeroTabuada} X ${multiplicando[i]} =  ${resultado}`)
}
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]
for (let pais of maioresPaises){
    const indice = maioresPaises.indexOf(pais)
    const frase = `${indice+1} - ${pais}`
    console.log(frase)
}

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opcao escolhida foi ${opcao}.`)
}

console.log('Até mais')
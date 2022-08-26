//armazenando uma funcao em uma variavel
const imprimirSOMA = function (a,b) {

    console.log(a + b)

}

imprimirSOMA(2, 4)

//armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {

    return a + b

}

console.log(soma(2, 4))

//retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal')
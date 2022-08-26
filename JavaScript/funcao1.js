//Funcao sem retorno

function imprimirSoma(a, b){

    console.log(a + b)

}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 5, 6, 4, 2)
imprimirSoma()

//Funcao com retorno

function soma(a = 0, b = 0){
    return a + b
}

console.log(soma(3, 3))
console.log(soma())

//let nome = "Arthur";
//console.log(nome)
//let teste = []
//console.log(teste)
//for (let i = 0; i < nome.length; i++) {  
//    teste[i] = nome.indexOf(i) 
//}
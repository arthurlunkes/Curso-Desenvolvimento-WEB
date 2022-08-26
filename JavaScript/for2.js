const notas = [5, 3, 2, 4, 7, 9]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

console.log('\n')

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
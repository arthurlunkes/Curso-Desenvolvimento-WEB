const peso1 = 1.0 //valor inteiro e de ponto flutuante, javascript interpreta como tipo Number
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log('É inteiro?',Number.isInteger(peso1))
console.log('É inteiro?',Number.isInteger(peso2))

const avaliacao1 = 9.54234
const avalicao2 = 5.563

const media = (avaliacao1 + avalicao2) / 2

console.log(media)
console.log('Media acima formatada: ', media.toFixed(2))
console.log('String: ',media.toString())
console.log('Binario: ',media.toString(2))
console.log(typeof Number)
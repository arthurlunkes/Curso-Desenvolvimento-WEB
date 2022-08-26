const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'  //da pra usar desse jeito
}

console.log(resultado(6))
console.log(resultado(7))
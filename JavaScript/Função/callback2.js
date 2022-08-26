const notas = [7, 6, 4, 2, 7 , 3]

// sem callback
const notasBaixar1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixar1.push(notas[i])
    }
}

console.log(notasBaixar1)

// com callback 
// exemplo 1
const notasBaixar2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixar2)

// exemplo 2

const notasMenorque7 = nota => nota < 7
const notasBaixar3 = notas.filter(notasMenorque7)
console.log(notasBaixar3)
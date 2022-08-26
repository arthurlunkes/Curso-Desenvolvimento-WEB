console.log(Math.ceil(6.1))

const obj1 ={}
obj1.nome = 'Bola'

console.log(obj1.nome)

function Obj(nome) {
    this.name = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.name)
console.log(obj3.name)
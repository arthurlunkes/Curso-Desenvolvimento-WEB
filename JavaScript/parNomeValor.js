//par nome/valor
const saudacao = 'Opa'

function exec() {
    const saudacao = 'Falaa'
    return saudacao
}

//objeto sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
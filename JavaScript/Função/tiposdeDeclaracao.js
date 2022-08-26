console.log(soma(3, 4))
// console.log(sub(3, 4)) aqui da erro por causa que a variável que recebe a função ainda não foi declarada.
// console.log(mult(3, 4)) // - // - //

// function declaration
function soma(x, y){
    return x + y
}

// function expression
const sub = function (x, y){
    return x - y
}

console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y){
    return x * y
}

console.log(mult(3, 4))
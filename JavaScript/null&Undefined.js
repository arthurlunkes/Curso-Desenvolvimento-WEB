let valor

console.log(valor)

valor = null //não tem nenhum endereçamento de memória, mas foi definido um valor igual null

console.log(valor)

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)
console.log(!!produto.preco)

produto.preco = undefined //evitar atribuir undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log({produto})
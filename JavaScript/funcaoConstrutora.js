function Carro(velocidademaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeatual = 0

    //metodo publico
    this.acelerar = function() {
        if(velocidadeatual + delta <= velocidademaxima) {
            velocidadeatual += delta
        } else {
            velocidadeatual = velocidademaxima
        }
    }

    //metodo publico
    this.getVelocidadeatual = function() {
        return velocidadeatual
    }
}

const uno = new Carro

uno.acelerar()
console.log(uno.getVelocidadeatual())


const ferrari = new Carro(350, 20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeatual())
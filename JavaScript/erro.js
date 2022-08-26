function tratarErroLancar(erro){
    //throw new Error('para com isso, ta doendo')
    //throw 10
    //throw true
    //throw 'mesagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUperCase() + '!!!')
    } catch (e){
        tratarErroLancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritando(obj)
function compras(trabalho1, trabalho2) {
    const compraSorvete = trabalho1 || trabalho2 // usado || para ou
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprartv32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete

    return { compraSorvete, comprarTv32, comprarTv50, comprartv32, manterSaudavel}
}

console.log(compras(true, true))
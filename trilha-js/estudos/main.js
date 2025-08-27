// const functions = require('./funcoes')
const {gets, print} = require('./funcoes')

// print(gets())
// print(gets())
// print(gets())
// print(gets())
// print(gets())

let maiorValor = 0

for (let i = 0; i < 5; i++) {
    const sorteado = gets()
    if (sorteado > maiorValor) {
        maiorValor = sorteado
    }
    
}
print(maiorValor)
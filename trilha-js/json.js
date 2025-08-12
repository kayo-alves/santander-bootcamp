// // objeto em formato JSON
// let invoice = {
//     name: 'zé',
//     age: 24,
//     // products é também um objeto
//     products: { 
//         // 0, 1 e 2 são atributos de product
//         // Esses atributos são arrays que armazenam 
//         // [0] = nome do prod e [1] = preço prod
//         0: ['mouse rex', 25.99],
//         1: ['teclado', 90.23],
//         2: ['monitor', 75.00]
//     }
// }

// função para gerar a string do que está em JSON
function generateInvoice (invoice) {
    // console.log vai acessar o atributo dentro do objeto invoice
    console.log(`Usuário: ${invoice.name}`) 
    console.log(`idade: ${invoice.age}`)
    console.log('-------------------')

    // para conseguir acessar o objeto product dentro de invoice, vai usar um loop
    // for in vai interagir com o index a cada item da lita invoice.products
    for(let i in invoice.products) {

        // desestruturação do objeto invoice.products
        // Lê-se da seguinte forma: Para cada item array i em products, 
        // armazene o primeiro index desse array em productName e o segundo em ProductPrice
        // o mesmo que: let productName = invoice.products[i][0], let productPrice = invoice.products[i][1]
        let [productName, productPrice] = invoice.products[i]
        console.log(`${productName} - ${productPrice}`)
    }
}

generateInvoice(invoice)

// const fs = require('fs');

// const invoice = {
//   name: 'Kayo',
//   age: 20,
//   hobbies: ['code', 'gym']
// };

// // 1. Converte objeto → string JSON
// const jsonString = JSON.stringify(invoice, null, 0); // o 2 deixa formatado

// // 2. Escreve no arquivo
// fs.writeFileSync('invoice0.json', jsonString, 'utf-8');

// console.log('Arquivo salvo!');

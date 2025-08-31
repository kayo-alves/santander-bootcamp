//   function Pessoa (nome, idade) {
//     this.nome = nome
//     this.idade = idade
//   }

//   Pessoa.prototype.falar = function () {
//     console.log(`Meu nome é ${this.nome}`)
//   }

//   class pessoa {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
//   }

// const pessoa = {
//     genero: 'masculino'
// }

// const renan = {
//      nome: 'renan',
//      __proto__: pessoa
// }

// renan.__proto

// console.log(renan.genero) //masculino

// //outra forma de criar um objeto
// const jose = Object.create(pessoa)
// jose.nome = 'jose'
// console.log(jose.genero)


// const nome = 'kayo'

// function kayo (nome) {
//     console.log(nome)
// }

// let nomeCompleto = (nomee) => {
//     const nomee = 'kayoo'
//     console.log(nomee)
// }

// kayo(nome)
// nomeCompleto()

    // function init() {
    //   const name = "Mozilla"; // name is a local variable created by init
    //   function displayName() {
    //     // displayName() is the inner function, that forms a closure
    //     console.log(name); // use variable declared in the parent function
    //   }
    //   displayName();
    // }
    // init();

    function teste (name, callback) {
        callback()
        console.log (name)
    }

    teste('kayo', () => {console.log('callback')})
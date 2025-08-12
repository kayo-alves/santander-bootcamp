// const pessoa = {
//     nome: 'kayo',
//     idade: 15,

//     descrever: function() {
//         console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// }

// pessoa.descrever();

// pessoa.nome = 'jose'

// pessoa.descrever();

// pessoa['idade'] = 20

// pessoa.descrever()

// class pessoa {
//     nome;
//     idade;

//     constructor(nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }

//     descrever() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
//     }
// }

// const kayo = new pessoa("zé", 20);
// kayo.descrever();


// // EXERCÍCIO - Criando a classe carro ---------------------------

// class carro {
//     marca;
//     cor;
//     gastoMedio; // por Litros

//     constructor (marca, cor, gastoMedio){
//         this.marca = marca;
//         this.cor = cor
//         this.gastoMedio = gastoMedio
//     }

//     gastoPorPercurso (qtdKm, precoCombus) {
//         return (qtdKm/this.gastoMedio) * precoCombus
//         // console.log(`O custo do combustível da viagem com o carro ${this.marca} será de ${custoDoPercurso}`)
//     }
// }

// const dolphin = new carro('BYD', 'Prata', 12)
// console.log(dolphin);

// let valorGasto = dolphin.gastoPorPercurso(100, 6)
// console.log(valorGasto)7

// EXERCÍCIO - CALCULO IMC

class pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    calcularImc () {
        return this.peso / (this.altura * this.altura)
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5)
        {
            return 'abaixo do peso'
        } else if (imc >= 18.5 && imc < 25)
        {
            return 'Peso normal'
        } else if (imc > 25 && imc <= 30)
        {
            return 'acima do peso'
        } else {
            return "sobrepeso"
        }
    }
}

const jose = new pessoa("José", 90, 1.70);
console.log("o IMC de", jose.nome, "é de", jose.calcularImc().toFixed(2))
console.log(jose.classificarImc())
const prompt = require('readline-sync');

while(true){
    const heroi = prompt.question("Digite o nome do heroi: ");
    const xp = prompt.question("Digite a quantidade de XP do heroi: ")
    let nivel = "nenhum"

    if (xp < 1000){
        nivel = "ferro"
    }
    else if (xp >= 1001 && xp <= 2000){
        nivel = "bronze"
    }
    else if (xp >= 2001 && xp <= 5000){
        nivel = "Ferro"
    }
    else if (xp >= 5001 && xp <= 7000){
        nivel = "Ouro"
    }
    else if (xp >= 7001 && xp <= 8000){
        nivel = "Platina"
    }
    else if (xp >= 8001 && xp < 9000){
        nivel = "Ascendente"
    }
    else if (xp >= 9001 && xp <= 10000){
        nivel = "Imortal"
    }
    else if (xp >= 10001){
        nivel = "Radiante"
    }

    console.log("O Héroi", heroi, "está no nível", nivel)
}   

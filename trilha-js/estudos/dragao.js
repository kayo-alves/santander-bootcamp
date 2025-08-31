// Lê a força do dragão e converte para inteiro
const forca = "70"

// Lê o elemento do dragão
const elemento = "Gelo"

// Definição dos prefixos baseados no elemento 
const prefixos = {
    "Fogo": ["Pyro", "Drak"],
    "Gelo": ["Frost", "Glacius"],
    "Raio": ["Volt", "Storm"],
    "Terra": ["Geo", "Titan"]
};

const sufixo = ["thor", "zar"];

// TODO: Determine o prefixo e sufixo:
function nomeDragao (forca, elemento, prefixos, sufixo) {
    let count
    if (forca < 50) {count = 0}
    else {count = 1}
  
  const dragao = `${prefixos[elemento][count]}${sufixo[count]}`
  return dragao
}

// TODO: Exiba o nome do dragão
console.log(nomeDragao(forca, elemento, prefixos, sufixo))

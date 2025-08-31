
# Trilha JavaScript - Desafio 03
## Yugioh Game

##  Objetivo
Este projeto tem como objetivo reforçar conceitos fundamentais de manipulação do DOM, lógica de jogo e interatividade em JavaScript, através da criação de um jogo baseado na dinâmica de **Pedra, Papel e Tesoura** com cartas temáticas de Yu-Gi-Oh!

##  Funcionalidades

- Exibição de 5 cartas para o jogador e para o computador.
- Cartas possuem atributos: nome, tipo e imagem.
- Sistema de vitória baseado em vantagem entre tipos (Rock, Paper, Scissors).
- Efeitos visuais e sonoros de vitória e derrota.
- Contador de pontuação.
- Botão para iniciar nova rodada.

##  Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

##  Lógica de Jogo

Cada carta possui um tipo que define suas vantagens:
- **Blue Eyes White Dragon** (Paper) ganha de Dark Magician (Rock)
- **Dark Magician** (Rock) ganha de Exodia (Scissors)
- **Exodia** (Scissors) ganha de Blue Eyes White Dragon (Paper)

A lógica de vitória é processada a partir dos arrays `winsAgainst` e `losesTo` de cada carta.



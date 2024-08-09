// Lista de Super-Heróis com suas experiências iniciais
let nomesHerois = [
    { nome: "Thor", experiencia: 900 },
    { nome: "Homem de ferro", experiencia: 1500 },
    { nome: "Capitão américa", experiencia: 3000 },
    { nome: "Hulk", experiencia: 7000 },
    { nome: "Homem aranha", experiencia: 7500 },
    { nome: "Viúva Negra", experiencia: 8600 },
    { nome: "Gavião Arqueiro", experiencia: 10000 },
    { nome: "Feiticeira Escarlate", experiencia: 12000 }
];

// Função para classificar o nível de um herói com base na experiência
function classificarNivel(experiencia) {
    if (experiencia < 1000) {
        return "Ferro";
    } else if (experiencia <= 2000) {
        return "Bronze";
    } else if (experiencia <= 5000) {
        return "Prata";
    } else if (experiencia <= 7000) {
        return "Ouro";
    } else if (experiencia <= 8000) {
        return "Platina";
    } else if (experiencia <= 9000) {
        return "Ascendente";
    } else if (experiencia <= 10000) {
        return "Imortal";
    } else {
        return "Radiante"; // Corrigido para cobrir qualquer valor acima de 10000
    }
}

// Usando o laço 'for' para processar cada super-herói
for (let i = 0; i < nomesHerois.length; i++) {
    let heroi = nomesHerois[i];
    let nivelHeroi = classificarNivel(heroi.experiencia);

    console.log(`Usando 'for': O Vingador ${heroi.nome} está com ${heroi.experiencia} de XP e no nível ${nivelHeroi}.`);
}

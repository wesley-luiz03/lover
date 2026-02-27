const declaracoes = [
    "Você é o melhor presente que a vida me deu.",
    "Cada dia ao seu lado é meu capítulo favorito.",
    "Seu sorriso ilumina qualquer momento.",
    "Te amar é a melhor decisão que já tomei.",
    "Você é meu hoje e todos os meus amanhãs."
];

const fotos = [
    "images/foto1.jpeg",
    "images/foto2.jpeg",
    "images/foto3.jpeg",
    "images/foto1.jpeg",
    "images/foto2.jpeg"
];

// Pega a data atual
const hoje = new Date();

// Calcula o dia do ano
const inicioAno = new Date(hoje.getFullYear(), 0, 0);
const diferenca = hoje - inicioAno;
const umDia = 1000 * 60 * 60 * 24;
const diaDoAno = Math.floor(diferenca / umDia);

// Escolhe mensagem baseada no dia
const indice = diaDoAno % declaracoes.length;

// Atualiza o HTML
document.getElementById("declaracao").textContent = declaracoes[indice];
document.getElementById("foto").src = fotos[indice];
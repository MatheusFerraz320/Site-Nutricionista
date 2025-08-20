'use strict';;
// Função para calcular o IMC e exibir o resultado
function calcularIMC() {
    // Obtém os valores de peso e altura dos campos de input
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultadoDiv = document.getElementById('resultado');

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    // Validação dos dados de entrada
    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        resultadoDiv.innerHTML = '<p class="error-message">Por favor, insira valores válidos para peso e altura.</p>';
        resultadoDiv.className = 'resultado error'; // Adiciona classe para estilização de erro
        return; // Sai da função se os dados forem inválidos
    }

    // Cálculo do IMC: peso (kg) / (altura (m) * altura (m))
    const imc = peso / (altura * altura);
    
    // Arredonda o IMC para duas casas decimais
    const imcArredondado = imc.toFixed(2);

    let classificacao = '';
    let classeCor = ''; // Classe CSS para a cor da classificação

    // Lógica para classificar o IMC
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        classeCor = 'abaixo-peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
        classeCor = 'peso-normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
        classeCor = 'sobrepeso';
    } else if (imc < 34.9) {
        classificacao = 'Obesidade Grau I';
        classeCor = 'obesidade-grau-1';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade Grau II';
        classeCor = 'obesidade-grau-2';
    } else {
        classificacao = 'Obesidade Grau III';
        classeCor = 'obesidade-grau-3';
    }

    // Exibe o resultado e a classificação na div 'resultado'
    resultadoDiv.innerHTML = `
        <p>Seu IMC é: <strong>${imcArredondado}</strong></p>
        <p>Classificação: <span class="${classeCor}">${classificacao}</span></p>
    `;
    resultadoDiv.className = 'resultado success'; // Adiciona classe para estilização de sucesso
}

// Opcional: Adiciona um listener para o botão de cálculo
// Isso é uma boa prática para garantir que o script carregue antes de tentar acessar o botão
document.addEventListener('DOMContentLoaded', () => {
    const calcularButton = document.getElementById('calcular-btn');
    if (calcularButton) {
        calcularButton.addEventListener('click', calcularIMC);
    }
});

const imagens = [
"imagens/Foto1.jpg",
"imagens/Foto2.jpg",
"imagens/Foto3.jpg",
"imagens/Foto4.jpg"
];
let indiceatual = 0;
function trocarImagem  () {
indiceatual= (indiceatual + 1) % imagens.length;
document.getElementById ("dinamicImage").src = imagens[indiceatual];
}
setInterval (trocarImagem, 3000);






function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");
  const validacao = document.getElementById("validaçao");

  resultado.textContent = '';
  resultado.className = 'resultado';
  validacao.textContent = '';

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    validacao.textContent = "Por favor, insira valores válidos para peso e altura.";
    return;
  }

  const imc = peso / (altura * altura);
  const imcArredondado = imc.toFixed(2);
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
    resultado.classList.add('resultado-abaixo-peso');
  } else if (imc < 24.9) {
    classificacao = 'Peso normal';
    resultado.classList.add('resultado-peso-normal');
  } else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
    resultado.classList.add('resultado-sobrepeso');
  } else if (imc < 34.9) {
    classificacao = 'Obesidade Grau I';
    resultado.classList.add('resultado-obesidade-1');
  } else if (imc < 39.9) {
    classificacao = 'Obesidade Grau II';
    resultado.classList.add('resultado-obesidade-2');
  } else {
    classificacao = 'Obesidade Grau III';
    resultado.classList.add('resultado-obesidade-3');
  }

  resultado.innerHTML = `
    Seu IMC é: <strong>${imcArredondado}</strong><br>
    Classificação: <span>${classificacao}</span>
  `;
}
document.getElementById("calcular-btn").addEventListener("click", calcularIMC);

let indiceAtual = 0;

const imagens = [
  "imagens/Foto1.jpg",
  "imagens/Foto2.jpg",
  "imagens/Foto3.jpg",
  "imagens/Foto4.jpg"
];

function trocarImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  document.getElementById("dinamicImage").src = imagens[indiceAtual];
}

window.addEventListener  ("load" , function () {
  setInterval(trocarImagem, 3000);
});





// Seleciona o formulário e o elemento de resultado
const form = document.getElementById('numeroForm');
const resultado = document.getElementById('resultado');

// Adiciona evento de submit no formulário
form.addEventListener('submit', (e) => {
  // Previne o comportamento padrão do formulário
  e.preventDefault();

  // Pega o valor do input
  const quantidade = parseInt(document.getElementById('quantidadeInput').value);

  // Verifica se o valor é um número válido
  if (isNaN(quantidade) || quantidade <= 0) {
    alert('Por favor, digite um número válido!');
    return;
  }

  // Imprime a quantidade solicitada
  let resultadoTexto = '';
  for (let i = 2; i <= quantidade * 2; i+= 2) {
    resultadoTexto += `${i} `;
  }
  resultado.innerText = resultadoTexto;
});
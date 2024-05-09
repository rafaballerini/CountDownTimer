// Define a data final da contagem regressiva
const dataFinal = new Date('May 13, 2024 00:00:00').getTime();

// Função para atualizar a contagem regressiva
function atualizarContagemRegressiva() {
  // Calcula o tempo restante até a data final 
  const agora = new Date().getTime();
  const diferenca = dataFinal - agora;

  // Calcula dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Atualiza os elementos HTML com os novos valores
  document.getElementById('dias').innerText = dias;
  document.getElementById('horas').innerText = horas;
  document.getElementById('minutos').innerText = minutos;
  document.getElementById('segundos').innerText = segundos;

  // Exibe uma mensagem quando a contagem regressiva terminar
  if (diferenca < 0) {  
    clearInterval(intervalo);   
    document.getElementById('titulo').innerText = 'A contagem terminou!';
  }
}

// Atualiza a contagem regressiva a cada segundo
const intervalo = setInterval(atualizarContagemRegressiva, 1000);

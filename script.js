let totalMigracao = 3412;
let meta = 7935;
let dataUltimaAtualizacao = "03/09/2024"

document.querySelector("#data").innerHTML = " Terminais migrados até: " + dataUltimaAtualizacao
document.querySelector("#numero").innerHTML = totalMigracao
let numero = totalMigracao;

// Calcula a porcentagem de progresso
let porcentagem = (numero / meta) * 100;
let porcentagemFormatada = porcentagem.toFixed(2);


// Obtendo a barra de progresso e a mensagem
const progressBar = document.getElementById('progressBar');
const message = document.getElementById('message');

// Definindo a largura da barra de progresso e a mensagem com base na porcentagem
progressBar.style.width = porcentagemFormatada + '%';
progressBar.setAttribute('aria-valuenow', porcentagemFormatada);
message.textContent = ` ${porcentagemFormatada}%`;


// Definindo a cor da barra de progresso e a mensagem com base na porcentagem
if (porcentagemFormatada <= 50) {
  progressBar.classList.add('bg-danger');
  message.textContent += '';

} else if (porcentagemFormatada <= 75) {
  progressBar.classList.add('bg-warning');
  message.textContent += ' ';

} else if (porcentagemFormatada <= 98) {

  progressBar.classList.add('bg-primary');
  message.textContent += ' ';

} else {
  progressBar.classList.add('bg-success');
  message.textContent += ' ';
}

setTimeout(() => {
  document.location.reload();
}, 90000);




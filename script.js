const totalMigracao = 7133;
const meta = 7133;
const dataUltimaAtualizacao = "18/11/2024";

// Atualiza a data e o número na interface
document.querySelector("#data").innerHTML = `Terminais migrados até: ${dataUltimaAtualizacao}`;
document.querySelector("#numero").innerHTML = totalMigracao;

// Função para calcular a porcentagem formatada
const calcularPorcentagem = (numero, meta) => {
  return ((numero / meta) * 100).toFixed(2).replace('.', ',');
};

// Função para atualizar a barra de progresso e a mensagem
const atualizarBarraDeProgresso = (porcentagem) => {
  const progressBar = document.getElementById('progressBar');
  const message = document.getElementById('message');

  // Atualiza a largura da barra e o valor de acessibilidade
  const porcentagemNumerica = parseFloat(porcentagem.replace(',', '.'));
  progressBar.style.width = `${porcentagemNumerica}%`;
  progressBar.setAttribute('aria-valuenow', porcentagemNumerica);
  message.textContent = `${porcentagem}%`;

  // Remove classes antigas
  progressBar.classList.remove('bg-danger', 'bg-warning', 'bg-primary', 'bg-success');

  // Adiciona a classe de cor correta baseada na porcentagem
  if (porcentagemNumerica <= 50) {
    progressBar.classList.add('bg-danger');
  } else if (porcentagemNumerica <= 75) {
    progressBar.classList.add('bg-warning');
  } else if (porcentagemNumerica < 100) {
    progressBar.classList.add('bg-primary');
  } else {
    progressBar.classList.add('bg-success');
  }

  // Atualiza os ícones do spinner baseado na porcentagem
  atualizarSpinner(porcentagemNumerica);
};

// Função para atualizar o spinner com base na porcentagem
const atualizarSpinner = (porcentagem) => {
  const spinnerContainer = document.getElementById('spinnerContainer');
  spinnerContainer.innerHTML = ''; // Limpa ícones antigos

  let spinnerCount = 0;

  if (porcentagem <= 50) {
    spinnerCount = 1; // 1 ícone para até 50%
  } else if (porcentagem <= 75) {
    spinnerCount = 1; // 2 ícones para entre 51% e 75%
  } else {
    spinnerCount = 1; // 3 ícones para acima de 75%
	;
  }

  // Cria e insere os ícones de acordo com a contagem
  for (let i = 0; i < spinnerCount; i++) {
    const spinnerIcon = document.createElement('i');
    spinnerIcon.className = 'fa fa-spinner fa-pulse fa-beat-fade fa-1x fa-fw';
    
    // Adiciona a cor do ícone baseado na classe da barra de progresso
    if (porcentagem <= 50) {
      spinnerIcon.style.color = '#dc3545'; // bg-danger
    } else if (porcentagem <= 75) {
      spinnerIcon.style.color = '#ff8c00'; // bg-warning
    } else if (porcentagem < 100) {
		 
      spinnerIcon.style.color = '#007BFF'; // bg-primary
    } else {
	spinnerIcon.className = "fa-regular fa-beat-fade fa-1x fa-fw fa-circle-check"
        spinnerIcon.style.color = '#28A745'; // bg-success
	document.querySelector("#data").innerHTML = `Parabéns a todos que contribuíram para esse grande feito!`
    }


    spinnerContainer.appendChild(spinnerIcon);
  }
};

// Função principal que executa a lógica de atualização
const atualizarDados = () => {
  const porcentagemFormatada = calcularPorcentagem(totalMigracao, meta);
  atualizarBarraDeProgresso(porcentagemFormatada);
};

// Chama a função de atualização ao carregar
atualizarDados();

// Atualiza a página a cada 90 segundos sem recarregar
setTimeout(() => {
  atualizarDados(); // Atualiza os dados
  location.reload(); // Recarrega a página
}, 90000);

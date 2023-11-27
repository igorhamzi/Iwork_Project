const dbInicial = {
    historico : [
        {
            id: 1,
            numero: 101,
            status: "Finalizado",
            servico: "Concerto",
            abertura: "2023-07-20",
            conclusao: "2023-09-20",
            avaliacao: 0
        },
        {
            id: 2,
            numero: 102,
            status: "Finalizado",
            servico: "Manutenção",
            abertura: "2023-08-27",
            conclusao: "2023-08-27",
            avaliacao: 0
        },
        {
            id: 3,
            numero: 103,
            status: "Andamento",
            servico: "Assessoria",
            abertura: "2023-09-10",
            conclusao: "---",
            avaliacao: 0
        },
        {
            id: 4,
            numero: 104,
            status: "Andamento",
            servico: "Encanador",
            abertura: "2023-07-16",
            conclusao: "---",
            avaliacao: 0
        },
        {
            id: 5,
            numero: 105,
            status: "Cancelado",
            servico: "Assistência",
            abertura: "2023-09-20",
            conclusao: "---",
            avaliacao: 0
        },
        {
            id: 6,
            numero: 106,
            status: "Finalizado",
            servico: "Saúde",
            abertura: "2023-08-27",
            conclusao: "2023-08-27",
            avaliacao: 0
        }
    ]
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
  
function preencherTabela() {
    const tabela = document.querySelector('table tbody');
    const { historico } = dbInicial;
  
    historico.forEach(item => {
      const newRow = tabela.insertRow(-1);
  
      const cellNumero = newRow.insertCell(0);
      const cellStatus = newRow.insertCell(1);
      const cellServico = newRow.insertCell(2);
      const cellAbertura = newRow.insertCell(3);
      const cellConclusao = newRow.insertCell(4);
      const cellAvaliacao = newRow.insertCell(5);
  
      cellNumero.textContent = item.numero;
      cellStatus.textContent = item.status;
      cellServico.textContent = item.servico;
      cellAbertura.textContent = item.abertura;
      cellConclusao.textContent = item.conclusao;
  
      const button = document.createElement('button');
      button.textContent = 'Avaliar';
      button.className = 'rate-button';
      button.onclick = () => abrirPopUpAvaliacao(item.id);
  
      cellAvaliacao.appendChild(button);
    });
}

function abrirPopUpAvaliacao(id) {
    const popUpContainer = document.createElement('div');
    popUpContainer.className = 'pop-up-container';
  
    const popUpContent = document.createElement('div');
    popUpContent.className = 'pop-up-content';
  
    const closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.className = 'close-button';
    closeButton.onclick = () => fecharPopUp(popUpContainer);
  
    const popUpText = document.createElement('p');
    popUpText.textContent = `Avalie o serviço com uma nota de 1 a 5 :)`;
  
    const inputRating = document.createElement('input');
    inputRating.type = 'number';
    inputRating.min = '1';
    inputRating.max = '5';
    inputRating.placeholder = 'Digite a avaliação';
    inputRating.className = 'input-rating';
  
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Enviar Avaliação';
    submitButton.className = 'submit-rating-button';
    submitButton.onclick = () => {
      const avaliacao = parseInt(inputRating.value, 10);
      if (!isNaN(avaliacao) && avaliacao >= 1 && avaliacao <= 5) {
        // Atualizar o valor de avaliação no objeto correspondente
        atualizarAvaliacao(id, avaliacao);
        fecharPopUp(popUpContainer);
      } else {
        alert('Por favor, insira uma avaliação válida de 1 a 5.');
      }
    };

    popUpContent.appendChild(closeButton);
    popUpContent.appendChild(popUpText);
    popUpContent.appendChild(inputRating);
    popUpContent.appendChild(submitButton);
    popUpContainer.appendChild(popUpContent);
  
    document.body.appendChild(popUpContainer);
}
  
function fecharPopUp(popUpContainer) {
    document.body.removeChild(popUpContainer);
}
  
function atualizarAvaliacao(id, novaAvaliacao) {

    const msg = document.createElement('div');
    msg.className = 'agradecimento-container';
  
    const msgText = document.createElement('p');
    msgText.textContent = 'Obrigado por sua avaliação!';
  
    msg.appendChild(msgText);
    document.body.appendChild(msg);
  
    setTimeout(() => {
      document.body.removeChild(msg);
    }, 1500);
}

function init() {
    preencherTabela();
}

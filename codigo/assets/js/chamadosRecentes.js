const dbInicial = {
  chamados : [
    {
      id: 1,
      N_do_Serviço: "101",
      status: "Finalizado",
      tipo_de_Serviço:"Conserto",
      data_abertura: "2023-09-20",
      data_de_Conclusão: "...",
    },
    {
      id: 2,
      N_do_Serviço: "102",
      status: "Finalizado",
      tipo_de_Serviço:"Manutenção",
      data_abertura: "2023-08-27",
      data_de_Conclusão: "2023-08-27",      
    },
    {
      id: 3,
      N_do_Serviço: "103",
      status: "Andamento",
      tipo_de_Serviço:"Assessoria",
      data_abertura: "2023-09-10",
      data_de_Conclusão: "...",
    },
    {
      id: 4,
      N_do_Serviço: "104",
      status: "Andamento",
      tipo_de_Serviço:"Encanador",
      data_abertura: "2023-07-16",
      data_de_Conclusão: "...",
    },
    {
      id: 5,
      N_do_Serviço: "105",
      status: "Cancelado",
      tipo_de_Serviço:"Assistência",
      data_abertura: "2023-09-20",
      data_de_Conclusão: "...",
    },
    {
      id: 6,
      N_do_Serviço: "106",
      status: "Finalizado",
      tipo_de_Serviço:"Saúde",
      data_abertura: "2023-08-27",
      data_de_Conclusão: "2023-08-27",
    },
    {
      id: 7,
      N_do_Serviço: "107",
      status: "Andamento",
      tipo_de_Serviço:"Limpeza",
      data_abertura: "2023-09-10",
      data_de_Conclusão: "...",
    },
    {
      id: 8,
      N_do_Serviço: "108",
      status: "Finalizado",
      tipo_de_Serviço:"Consultoria",
      data_abertura: "2023-07-16",
      data_de_Conclusão: "2023-08-27",
    },
    {
      id: 9,
      N_do_Serviço: "109",
      status: "Cancelado",
      tipo_de_Serviço:"Conserto",
      data_abertura: "2023-09-20",
      data_de_Conclusão: "...",
    },
    {
      id: 10,
      N_do_Serviço: "110",
      status: "Cancelado",
      tipo_de_Serviço:"Manutenção",
      data_abertura: "2023-08-27",
      data_de_Conclusão: "...",
    },
    {
      id: 11,
      N_do_Serviço: "111",
      status: "Andamento",
      tipo_de_Serviço:"Assessoria",
      data_abertura: "2023-09-10",
      data_de_Conclusão: "...",
    },
    {
      id: 12,
      N_do_Serviço: "112",
      status: "Finalizado",
      tipo_de_Serviço:"Encanador",
      data_abertura: "2023-07-16",
      data_de_Conclusão: "2023-08-27",
    },
    {
      id: 13,
      N_do_Serviço: "113",
      status: "Finalizado",
      tipo_de_Serviço:"Assistência",
      data_abertura: "2023-09-20",
      data_de_Conclusão: "2023-09-27",
    },
    {
      id: 14,
      N_do_Serviço: "114",
      status: "Cancelado",
      tipo_de_Serviço:"Saúde",
      data_abertura: "2023-08-27",
      data_de_Conclusão: "...",
    },
    {
      id: 15,
      N_do_Serviço: "115",
      status: "Andamento",
      tipo_de_Serviço:"Limpeza",
      data_abertura: "2023-09-10",
      data_de_Conclusão: "...",
    },
  ]
}

function exibirChamadosNaTabela() {
  const corpoTabela = document.getElementById('corpo-tabela');

  dbInicial.chamados.forEach(chamado => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${chamado.N_do_Serviço}</td>
      <td>${chamado.status}</td>
      <td>${chamado.tipo_de_Serviço}</td>
      <td>${chamado.data_abertura}</td>
      <td>${chamado.data_de_Conclusão}</td>
    `;
    corpoTabela.appendChild(tr);
  });
}

// Chame a função para exibir os chamados na tabela ao carregar a página
exibirChamadosNaTabela();

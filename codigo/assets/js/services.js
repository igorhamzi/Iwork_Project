const dbInicial = {
    empresas : [
        {
            id: 1,
            nome: "Empresa Ômega",
            cnpj: 98765432109876,
            descricao: "Uma empresa de consultoria financeira",
            tipo_negocio: "Assistencia tecnica",
            telefone: 5554321098,
            email: "omega_consulting@gmail.com",
            endereço: "123 Finance Street, Financial City",
            senha: "omegaFinance123"
        },
        {
            id: 2,
            nome: "Empresa Sigma",
            cnpj: 45678909876543,
            descricao: "Uma empresa de marketing digital",
            tipo_negocio: "Design e tecnologia",
            telefone: 5558765432,
            email: "sigma_marketing@gmail.com",
            endereço: "789 Marketing Avenue, Digital Town",
            senha: "sigmaMarketing123"
        },
        {
            id: 3,
            nome: "Empresa Psi",
            cnpj: 67890123456789,
            descricao: "Uma empresa de segurança cibernética",
            tipo_negocio: "Bem-estar e saude",
            telefone: 5552345678,
            email: "psi_cybersecurity@gmail.com",
            endereço: "654 Elm Road, Wonderland",
            senha: "psiCyber123"
        },
        {
            id: 4,
            nome: "Empresa Kappa",
            cnpj: 89012345678901,
            descricao: "Uma empresa de jardinagem",
            tipo_negocio: "Reformas e reparos",
            telefone: 5555678901,
            email: "kappa_gardening@gmail.com",
            endereço: "789 Pine Avenue, Dreamland",
            senha: "kappaGarden123"
        },
        {
            id: 5,
            nome: "Empresa Lambda",
            cnpj: 12345678901123,
            descricao: "Uma empresa de eventos esportivos",
            tipo_negocio: "Festas e eventos",
            telefone: 5551122334,
            email: "lambda_sports@gmail.com",
            endereço: "432 Oak Lane, Imaginary City",
            senha: "lambdaSports123"
        },
        {
            id: 6,
            nome: "Empresa Ômicron",
            cnpj: 56789012345678,
            descricao: "Uma empresa de tecnologia da informação",
            tipo_negocio: "Design e tecnologia",
            telefone: 5555555555,
            email: "omicron_tech@gmail.com",
            endereço: "123 Technology Avenue, Cidade da Inovação",
            senha: "omicronTech123"
        },
        {
            id: 7,
            nome: "Empresa XYZ",
            cnpj: 45678901234567,
            descricao: "Uma empresa de entretenimento",
            tipo_negocio: "Festas e eventos",
            telefone: 5557654321,
            email: "xyz_entertainment@gmail.com",
            endereço: "9876 Avenida dos Sonhos, Cidade Fictícia",
            senha: "senhaXYZ456"
        },
        {
            id: 8,
            nome: "Empresa Alpha",
            cnpj: 78901234567890,
            descricao: "Uma empresa de alimentos",
            tipo_negocio: "Bem-estar e saude",
            telefone: 5552345678,
            email: "alpha_company@gmail.com",
            endereço: "123 Main Street, Imaginary City",
            senha: "alpha12345"
        },
        {
            id: 9,
            nome: "Empresa Beta",
            cnpj: 89012345678901,
            descricao: "Uma empresa de transporte",
            tipo_negocio: "Assistencia tecnica",
            telefone: 5555678901,
            email: "beta_transport@gmail.com",
            endereço: "567 Elm Street, Dreamville",
            senha: "betaPass123"
        },
        {
            id: 10,
            nome: "Empresa Gamma",
            cnpj: 12345678901123,
            descricao: "Uma empresa de marketing",
            tipo_negocio: "Design e tecnologia",
            telefone: 5551122334,
            email: "gamma_marketing@gmail.com",
            endereço: "555 Oak Avenue, Imaginary Town",
            senha: "gammaPassword"
        },
        {
            id: 11,
            nome: "Empresa Delta",
            cnpj: 34567890123456,
            descricao: "Uma empresa de educação",
            tipo_negocio: "Servicos domesticos",
            telefone: 5559876543,
            email: "delta_education@gmail.com",
            endereço: "432 Pine Street, Dreamland",
            senha: "deltaPass123"
        },
        {
            id: 12,
            nome: "Empresa Epsilon",
            cnpj: 56789012345678,
            descricao: "Uma empresa de turismo",
            tipo_negocio: "Festas e eventos",
            telefone: 5556789012,
            email: "epsilon_tourism@gmail.com",
            endereço: "654 Maple Road, Fantasy City",
            senha: "epsilonPass"
        },
        {
            id: 13,
            nome: "Empresa Zeta",
            cnpj: 78901234567890,
            descricao: "Uma empresa de consultoria financeira",
            tipo_negocio: "Bem-estar e saude",
            telefone: 5552345678,
            email: "zeta_consulting@gmail.com",
            endereço: "876 Cedar Lane, Wonderland",
            senha: "zeta45678"
        },
        {
            id: 14,
            nome: "Empresa Theta",
            cnpj: 12345678901123,
            descricao: "Uma empresa de moda",
            tipo_negocio: "Design e tecnologia",
            telefone: 5551122334,
            email: "theta_fashion@gmail.com",
            endereço: "123 Birch Street, Dream City",
            senha: "thetaPass123"
        },
        {
            id: 15,
            nome: "Empresa Iota",
            cnpj: 34567890123456,
            descricao: "Uma empresa de construção",
            tipo_negocio: "Reformas e reparos",
            telefone: 5559876543,
            email: "iota_construction@gmail.com",
            endereço: "432 Willow Avenue, Fantasy Town",
            senha: "iotaPassword"
        },
        {
            id: 16,
            nome: "Empresa Kappa",
            cnpj: 56789012345678,
            descricao: "Uma empresa de restaurantes",
            tipo_negocio: "Assistencia tecnica",
            telefone: 5556789012,
            email: "kappa_restaurants@gmail.com",
            endereço: "654 Oak Street, Imaginary Village",
            senha: "kappaPass"
        },
        {
            id: 17,
            nome: "Empresa Ômega",
            cnpj: 90123456789012,
            descricao: "Uma empresa de logística",
            tipo_negocio: "Assistencia tecnica",
            telefone: 5553456789,
            email: "omega_logistics@gmail.com",
            endereço: "789 Elm Street, Dreamville",
            senha: "omegaPass123"
        },
        {
            id: 18,
            nome: "Empresa Sigma",
            cnpj: 23456789012345,
            descricao: "Uma empresa de beleza",
            tipo_negocio: "Bem-estar e saude",
            telefone: 5559876543,
            email: "sigma_beauty@gmail.com",
            endereço: "1234 Cedar Lane, Wonderland",
            senha: "sigmaPassword"
        },
        {
            id: 19,
            nome: "Empresa Psi",
            cnpj: 45678901234567,
            descricao: "Uma empresa de engenharia",
            tipo_negocio: "Reformas e reparos",
            telefone: 5551122334,
            email: "psi_engineering@gmail.com",
            endereço: "555 Pine Avenue, Imaginary Town",
            senha: "psi12345"
        },
        {
            id: 20,
            nome: "Empresa Ômicron",
            cnpj: 67890123456789,
            descricao: "Uma empresa de esportes",
            tipo_negocio: "Festas e eventos",
            telefone: 5552345678,
            email: "omicron_sports@gmail.com",
            endereço: "432 Oak Road, Dream City",
            senha: "omicronPass"
        },
        {
            id: 21,
            nome: "Empresa Theta",
            cnpj: 89012345678901,
            descricao: "Uma empresa de consultoria de TI",
            tipo_negocio: "Design e tecnologia",
            telefone: 5551234567,
            email: "theta_itconsulting@gmail.com",
            endereço: "654 Birch Street, Fantasy City",
            senha: "thetaConsult123"
        },
        {
            id: 22,
            nome: "Empresa Ômicron",
            cnpj: 12345678901123,
            descricao: "Uma empresa de alimentos",
            tipo_negocio: "Assistencia tecnica",
            telefone: 5555678901,
            email: "omicron_foods@gmail.com",
            endereço: "789 Maple Lane, Dreamland",
            senha: "omicronFoodPass"
        },
        {
            id: 23,
            nome: "Empresa Lambda",
            cnpj: 34567890123456,
            descricao: "Uma empresa de saúde",
            tipo_negocio: "Bem-estar e saude",
            telefone: 5556789012,
            email: "lambda_health@gmail.com",
            endereço: "1234 Cedar Avenue, Imaginary Village",
            senha: "lambda123"
        },
        {
            id: 24,
            nome: "Empresa Ômega",
            cnpj: 56789012345678,
            descricao: "Uma empresa de entretenimento",
            tipo_negocio: "Festas e eventos",
            telefone: 5552345678,
            email: "omega_entertainment@gmail.com",
            endereço: "432 Elm Road, Wonderland",
            senha: "omegaEntertain123"
        },
        {
            id: 25,
            nome: "Empresa Sigma",
            cnpj: 78901234567890,
            descricao: "Uma empresa de arquitetura",
            tipo_negocio: "Design e tecnologia",
            telefone: 5559876543,
            email: "sigma_architecture@gmail.com",
            endereço: "555 Oak Lane, Dream City",
            senha: "sigmaArch123"
        },
        {
            id: 26,
            nome: "Empresa Psi",
            cnpj: 90123456789012,
            descricao: "Uma empresa de automóveis",
            tipo_negocio: "Reformas e reparos",
            telefone: 5553456789,
            email: "psi_cars@gmail.com",
            endereço: "789 Birch Avenue, Imaginary Town",
            senha: "psiCars123"
        },
        {
            id: 27,
            nome: "Empresa Ômicron",
            cnpj: 23456789012345,
            descricao: "Uma empresa de turismo",
            tipo_negocio: "Festas e eventos",
            telefone: 5551122334,
            email: "omicron_tourism@gmail.com",
            endereço: "123 Pine Road, Dream City",
            senha: "omicronTourism123"
        },
        {
            id: 28,
            nome: "Empresa Zeta",
            cnpj: 45678901234567,
            descricao: "Uma empresa de jardinagem",
            tipo_negocio: "Assistencia tecnica",
            telefone: 5559876543,
            email: "zeta_gardening@gmail.com",
            endereço: "432 Cedar Avenue, Wonderland",
            senha: "zetaGarden123"
        },
        {
            id: 29,
            nome: "Empresa Kappa",
            cnpj: 67890123456789,
            descricao: "Uma empresa de viagens",
            tipo_negocio: "Bem-estar e saude",
            telefone: 5552345678,
            email: "kappa_travel@gmail.com",
            endereço: "654 Oak Road, Imaginary Town",
            senha: "kappaTravel123"
        },
        {
            id: 30,
            nome: "Empresa Lambda",
            cnpj: 89012345678901,
            descricao: "Uma empresa de segurança",
            tipo_negocio: "Reformas e reparos",
            telefone: 5555678901,
            email: "lambda_security@gmail.com",
            endereço: "789 Elm Street, Dreamland",
            senha: "lambdaSecurity123"
        },
        {
            id: 31,
            nome: "Empresa Alfa",
            cnpj: 12345678901123,
            descricao: "Uma empresa de ar condicionado",
            tipo_negocio: "Assistencia tecnica",
            telefone: 5551122334,
            email: "alfa_aircon@gmail.com",
            endereço: "555 Birch Avenue, Fantasy City",
            senha: "alfaAircon123"
        },
        {
            id: 32,
            nome: "Empresa Beta",
            cnpj: 34567890123456,
            descricao: "Uma empresa de música",
            tipo_negocio: "Festas e eventos",
            telefone: 5556789012,
            email: "beta_music@gmail.com",
            endereço: "432 Pine Road, Imaginary Village",
            senha: "betaMusic123"
        },
        {
            id: 33,
            nome: "Empresa Gama",
            cnpj: 56789012345678,
            descricao: "Uma empresa de contabilidade",
            tipo_negocio: "Bem-estar e saude",
            telefone: 5559876543,
            email: "gama_accounting@gmail.com",
            endereço: "1234 Oak Avenue, Dream City",
            senha: "gamaAccounting123"
        },
        {
            id: 34,
            nome: "Empresa Delta",
            cnpj: 78901234567890,
            descricao: "Uma empresa de limpeza",
            tipo_negocio: "Servicos domesticos",
            telefone: 5552345678,
            email: "delta_cleaning@gmail.com",
            endereço: "654 Cedar Lane, Wonderland",
            senha: "deltaCleaning123"
        },
        {
            id: 35,
            nome: "Empresa Épsilon",
            cnpj: 90123456789012,
            descricao: "Uma empresa de design gráfico",
            tipo_negocio: "Design e tecnologia",
            telefone: 5553456789,
            email: "epsilon_design@gmail.com",
            endereço: "789 Pine Road, Dreamland",
            senha: "epsilonDesign123"
        },
        {
            id: 36,
            nome: "Empresa Ômega",
            cnpj: 23456789012345,
            descricao: "Uma empresa de seguros",
            tipo_negocio: "Assistencia tecnica",
            telefone: 5551122334,
            email: "omega_insurance@gmail.com",
            endereço: "432 Oak Avenue, Fantasy City",
            senha: "omegaInsurance123"
        },
        {
            id: 37,
            nome: "Empresa Sigma",
            cnpj: 45678901234567,
            descricao: "Uma empresa de fotografia",
            tipo_negocio: "Festas e eventos",
            telefone: 5559876543,
            email: "sigma_photography@gmail.com",
            endereço: "555 Cedar Lane, Imaginary Town",
            senha: "sigmaPhotography123"
        }
    ]
}

function init(){
    const listaDeEmpresas = document.getElementById('empresas-list');
    const empresas = dbInicial.empresas

    for (var i = 0; i < 7; i++){
        const li = document.createElement('li');
        li.innerHTML = `Nome: ${empresas[i].nome}, Descrição: ${empresas[i].descricao}, Categoria: ${empresas[i].tipo_negocio}`;
        listaDeEmpresas.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const listaDeEmpresas = document.getElementById('empresas-list');
    const empresas = dbInicial.empresas;
  
    function exibirEmpresas(filtrarPorCategoria) {
      listaDeEmpresas.innerHTML = ''; // Limpa a lista antes de exibir as empresas filtradas
      empresas.forEach(empresa => {
        if (empresa.tipo_negocio === filtrarPorCategoria) {
          const li = document.createElement('li');
          li.innerHTML = `Nome: ${empresa.nome}, Descrição: ${empresa.descricao}, Categoria: ${empresa.tipo_negocio}`;
          listaDeEmpresas.appendChild(li);
        }
      });
    }
  
    document.getElementById('btnTecnica').addEventListener('click', () => {
      exibirEmpresas('Assistencia tecnica');
    });
  
    document.getElementById('btnTecnologia').addEventListener('click', () => {
      exibirEmpresas('Design e tecnologia');
    });
  
    document.getElementById('btnReparos').addEventListener('click', () => {
      exibirEmpresas('Reformas e reparos');
    });
  
    document.getElementById('btnDomesticos').addEventListener('click', () => {
      exibirEmpresas('Servicos domesticos');
    });
  
    document.getElementById('btnEventos').addEventListener('click', () => {
      exibirEmpresas('Festas e eventos');
    });
  
    document.getElementById('btnSaude').addEventListener('click', () => {
      exibirEmpresas('Bem-estar e saude');
    });
  
    exibirEmpresas('');
});
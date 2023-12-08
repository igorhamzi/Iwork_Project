function leDados () 
{
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados){
      objDados = JSON.parse (strDados);
    }
    else
    {
      objDados = { contatos : 
       [
        { nome: "Empresa 1",
          cnpj: "123456789",
          descricao: "Empresa especializada em faxina",
          tipo: "Faxina",
          telefone: "(31)923456789",
          email: "empresa1@example.com",
          localizacao: "Belo Horizonte",
          senha: "senha1"
        },
        { nome: "Empresa 2",
          cnpj: "987654321",
          descricao: "Empresa especializada em limpeza",
          tipo: "Limpeza",
          telefone: "(31)987654321",
          email: "empresa2@example.com",
          localizacao: "Belo Horizonte",
          senha: "senha2",
        },
        { nome: "Empresa 3",
          cnpj: "098765432",
          descricao: "Empresa especializada em limpeza",
          tipo: "Limpeza",
          telefone: "(31)098765432",
          email: "empresa3@example.com",
          localizacao: "Belo Horizonte",
          senha: "senha3",

        } ]
      }            
   }
      return objDados;
}

function salvarDados (dados){
  localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirContato ()
{
  let objDados = leDados();

  let nome = document.getElementById ('Nome').value;
  let cnpj = document.getElementById ('CNPJ').value;
  let descricao = document.getElementById ('Descricao').value;
  let tipo = document.getElementById ('Tipo').value;
  let telefone = document.getElementById ('Telefone').value;
  let email = document.getElementById ('Email').value;
  let localizacao = document.getElementById ('Localizacao').value;
  let senha = document.getElementById ('Senha').value;
  let novaEmpresa = {
    nome : nome,
    cnpj : cnpj,
    descricao : descricao,
    tipo : tipo,
    telefone : telefone,
    email : email,
    localizacao : localizacao,
    senha : senha
  };
  objDados.contatos.push (novaEmpresa);

  salvarDados (objDados); 
} 

document.getElementById ('btn-cad').addEventListener('click', incluirContato);

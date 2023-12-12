function addEmpresa() {
  let nome = document.getElementById('Nome').value;
  let cnpj = document.getElementById('CNPJ').value;
  let descricao = document.getElementById('Descricao').value;
  let tipo = document.getElementById('Tipo').value;
  let telefone = document.getElementById('Telefone').value;
  let email = document.getElementById('Email').value;
  let localizacao = document.getElementById('Localizacao').value;
  let senha = document.getElementById('Senha').value;

  if (nome && cnpj && descricao && tipo && telefone && email && localizacao && senha) {
      var empresa = {
          nome: nome,
          cnpj: cnpj,
          descricao: descricao,
          tipo: tipo,
          telefone: telefone,
          email: email,
          localizacao: localizacao,
          senha: senha
      };

      var empresas = JSON.parse(localStorage.getItem("empresas")) || [];

      empresas.push(empresa);

      localStorage.setItem("empresas", JSON.stringify(empresas));

      document.getElementById('Nome').value = "";
      document.getElementById('CNPJ').value = "";
      document.getElementById('Descricao').value = "";
      document.getElementById('Tipo').value = "";
      document.getElementById('Telefone').value = "";
      document.getElementById('Email').value = "";
      document.getElementById('Localizacao').value = "";
      document.getElementById('Senha').value = "";

      alert("Cadastro da empresa realizado com sucesso!");
      localStorage.setItem("loginAtivo", JSON.stringify(empresa));
      window.location.href = "homeEmpresa.html";
  } else {
      alert("Por favor, preencha todos os campos.");
  }
}
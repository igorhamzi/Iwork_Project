function initializeusuarios() {
  var usuarios = [
    { 
      name: "Rodrigo",
      phone: "123456789",
      email: "usuario1@email.com",
      address: "Rua A, 123",
      password: "123",
    },
  ];
  var empresas = [
    {
      nome: "Minha Empresa",
      cnpj: "12345678901234",
      descricao: "Uma empresa incrível",
      tipoNegocio: "Tecnologia",
      phone: "987654321",
      email: "empresa@email.com",
      localizacao: "Rua B, 456",
      password: "456",
    },
  ];

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  localStorage.setItem("empresas", JSON.stringify(empresas));
}

function checkLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (localStorage.getItem("usuarios") && localStorage.getItem("empresas")) {
    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    var empresas = JSON.parse(localStorage.getItem("empresas"));

    var foundUsuario = usuarios.find(function(usuario) {
      return usuario.email === username && usuario.password === password;
    });

    var foundEmpresa = empresas.find(function(empresa) {
      return empresa.email === username && empresa.password === password;
    });

    if (foundUsuario) {
      localStorage.setItem("loginAtivo", JSON.stringify(foundUsuario));
      window.location.href = "homeCliente.html";
    } else if (foundEmpresa) {
      localStorage.setItem("loginAtivo", JSON.stringify(foundEmpresa));
      window.location.href = "homeEmpresa.html";
    } else {
      alert("Usuário ou senha incorretos. Tente novamente.");
    }
  } else {
    alert("Nenhum usuário ou empresa cadastrada. Cadastre-se primeiro.");
  }
  usernameInput.value = "";
  passwordInput.value = "";
}

window.onload = function() {
  initializeusuarios();
};
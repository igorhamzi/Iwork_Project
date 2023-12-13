function adddata() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("Telefone").value;
    var email = document.getElementById("Email").value;
    var endereco = document.getElementById("Endereço").value;
    var senha = document.getElementById("senha").value;

    if (nome && telefone && email && endereco && senha) {
        var usuario = {
            nome: nome,
            telefone: telefone,
            email: email,
            endereco: endereco,
            senha: senha
        };

        var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        usuarios.push(usuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        document.getElementById("nome").value = "";
        document.getElementById("Telefone").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Endereço").value = "";
        document.getElementById("senha").value = "";

        alert("Cadastro realizado com sucesso!");
        localStorage.setItem("loginAtivo", JSON.stringify(usuario));
        window.location.href = "Login.html";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}


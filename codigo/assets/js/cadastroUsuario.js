function adddata() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("Telefone").value;
    var email = document.getElementById("Email").value;
    var endereco = document.getElementById("Endereço").value;

    if (nome && telefone && email && endereco) {
        var usuario = {
            nome: nome,
            telefone: telefone,
            email: email,
            endereco: endereco
        };

        var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        usuarios.push(usuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        document.getElementById("nome").value = "";
        document.getElementById("Telefone").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Endereço").value = "";

        alert("Cadastro realizado com sucesso!");
        localStorage.setItem("loginAtivo", JSON.stringify(usuario));
        window.location.href = "homeCliente.html";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}


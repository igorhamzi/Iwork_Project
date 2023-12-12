window.onload = function() {
  const usuarioAtivo = JSON.parse(localStorage.getItem('loginAtivo')) || {};

  document.getElementById("title_nomeUsuario").textContent = "Nome: " + usuarioAtivo.nome;
  document.getElementById("title_emailUsuario").textContent = "E-mail: " + usuarioAtivo.email;
  document.getElementById("title_avaliacaoUsuario").textContent = "Telefone: " + usuarioAtivo.telefone;
  document.getElementById("title_enderecoUsuario").textContent = "Endereço: " + usuarioAtivo.endereco;
};

function editarUsuario() {
  const usuarioAtivo = JSON.parse(localStorage.getItem('loginAtivo')) || {};

  const inputs = ["nomeUsuario", "emailUsuario", "avaliacaoUsuario", "enderecoUsuario"];
  inputs.forEach(inputId => {
    document.getElementById(inputId).style.display = "inline";
    document.getElementById(inputId).value = usuarioAtivo[inputId.replace("Usuario", "")];
  });

  setupImageUpload();
}

function setupImageUpload() {
  document.getElementById("imageLink").addEventListener("click", function () {
    const imageInput = document.createElement("input");
    imageInput.type = "file";
    imageInput.accept = "image/*";
    imageInput.style.display = "none";

    imageInput.addEventListener("change", function (event) {
      const imageFile = event.target.files[0];
      const savedImage = document.getElementById("savedImage");
      const reader = new FileReader();

      reader.onload = function () {
        savedImage.src = reader.result;
        document.getElementById("imageContainer").style.display = "block";
        localStorage.setItem("uploadedImageUsuario", reader.result);
      };

      if (imageFile) {
        reader.readAsDataURL(imageFile);
      }
    });

    document.body.appendChild(imageInput);
    imageInput.click();
  });

  const savedImage = document.getElementById("savedImage");
  const imageBase64 = localStorage.getItem("uploadedImageUsuario");

  if (imageBase64) {
    savedImage.src = imageBase64;
    document.getElementById("imageContainer").style.display = "block";
  }
}

function salvarUsuario() {
  const usuarioAtivo = JSON.parse(localStorage.getItem('loginAtivo')) || {};

  var nomeUsuario = document.getElementById("nomeUsuario").value;
  var email = document.getElementById("emailUsuario").value;
  var telefoneUsuario = document.getElementById("avaliacaoUsuario").value; 
  var endereco = document.getElementById("enderecoUsuario").value;

  usuarioAtivo.nome = nomeUsuario;
  usuarioAtivo.email = email;
  usuarioAtivo.telefone = telefoneUsuario;
  usuarioAtivo.endereco = endereco;

  localStorage.setItem('loginAtivo', JSON.stringify(usuarioAtivo));

  localStorage.setItem("nomeUsuario", nomeUsuario);
  localStorage.setItem("emailUsuario", email);
  localStorage.setItem("avaliacaoUsuario", telefoneUsuario); 
  localStorage.setItem("enderecoUsuario", endereco);

  var nomeArmazenado = localStorage.getItem("nomeUsuario");
  var emailArmazenado = localStorage.getItem("emailUsuario");
  var telefoneUsuarioArmazenado = localStorage.getItem("avaliacaoUsuario");  
  var enderecoArmazenado = localStorage.getItem("enderecoUsuario");

  const inputs = ["nomeUsuario", "emailUsuario", "avaliacaoUsuario", "enderecoUsuario"];
  inputs.forEach(inputId => {
    document.getElementById(inputId).style.display = "none";
  });

  document.getElementById("title_nomeUsuario").textContent = "Nome: " + nomeArmazenado;
  document.getElementById("title_emailUsuario").textContent = "E-mail: " + emailArmazenado;
  document.getElementById("title_avaliacaoUsuario").textContent = "Telefone: " + telefoneUsuarioArmazenado;  // Alterado para telefone
  document.getElementById("title_enderecoUsuario").textContent = "Endereço: " + enderecoArmazenado;
}

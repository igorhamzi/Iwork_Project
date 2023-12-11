function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  window.onload = function() {
    if (!localStorage.getItem("nomeUsuario")) {
      localStorage.setItem("nomeUsuario", "Gabriel Dias");
    }
  
    if (!localStorage.getItem("emailUsuario")) {
      localStorage.setItem("emailUsuario", "gabriel.dias@outlook.com");
    }
  
    if (!localStorage.getItem("avaliacaoUsuario")) {
      localStorage.setItem("avaliacaoUsuario", "Aluno de SI");
    }
  
    if (!localStorage.getItem("enderecoUsuario")) {
      localStorage.setItem("enderecoUsuario", "Rua Diógenes Roma - Jaboticabal - SP");
    }
  
    document.getElementById("title_nomeUsuario").textContent = "Nome: " + localStorage.getItem("nomeUsuario");
    document.getElementById("title_emailUsuario").textContent = "E-mail: " + localStorage.getItem("emailUsuario");
    document.getElementById("title_avaliacaoUsuario").textContent = "Avaliação: " + localStorage.getItem("avaliacaoUsuario");
    document.getElementById("title_enderecoUsuario").textContent = "Endereço: " + localStorage.getItem("enderecoUsuario");
  };
  
  function editarUsuario() {
    document.getElementById("nomeUsuario").style.display = "inline";
    document.getElementById("emailUsuario").style.display = "inline";
    document.getElementById("avaliacaoUsuario").style.display = "inline";
    document.getElementById("enderecoUsuario").style.display = "inline";
  
    document.getElementById("nomeUsuario").value = localStorage.getItem("nomeUsuario");
    document.getElementById("emailUsuario").value = localStorage.getItem("emailUsuario");
    document.getElementById("avaliacaoUsuario").value = localStorage.getItem("avaliacaoUsuario");
    document.getElementById("enderecoUsuario").value = localStorage.getItem("enderecoUsuario");
  
    document.getElementById("imageLink").addEventListener("click", function() {
      const imageInput = document.createElement("input");
      imageInput.type = "file";
      imageInput.accept = "image/*";
      imageInput.style.display = "none";
  
      imageInput.addEventListener("change", function(event) {
        const imageFile = event.target.files[0];
        const savedImage = document.getElementById("savedImage");
        const reader = new FileReader();
  
        reader.onload = function() {
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
    var nomeEmpresa = document.getElementById("nomeUsuario").value;
    var email = document.getElementById("emailUsuario").value;
    var avaliacaoUsuario = document.getElementById("avaliacaoUsuario").value;
    var endereco = document.getElementById("enderecoUsuario").value;
  
    localStorage.setItem("nomeUsuario", nomeEmpresa);
    localStorage.setItem("emailUsuario", email);
    localStorage.setItem("avaliacaoUsuario", avaliacaoUsuario);
    localStorage.setItem("enderecoUsuario", endereco);
  
    var nomeArmazenado = localStorage.getItem("nomeUsuario");
    var emailArmazenado = localStorage.getItem("emailUsuario");
    var avaliacaoUsuarioArmazenado = localStorage.getItem("avaliacaoUsuario");
    var enderecoArmazenado = localStorage.getItem("enderecoUsuario");
  
    document.getElementById("nomeUsuario").style.display = "none";
    document.getElementById("emailUsuario").style.display = "none";
    document.getElementById("avaliacaoUsuario").style.display = "none";
    document.getElementById("enderecoUsuario").style.display = "none";
  
    document.getElementById("title_nomeUsuario").textContent = "Nome: " + nomeArmazenado;
    document.getElementById("title_emailUsuario").textContent = "E-mail: " + emailArmazenado;
    document.getElementById("title_avaliacaoUsuario").textContent = "Avaliação: " + avaliacaoUsuarioArmazenado;
    document.getElementById("title_enderecoUsuario").textContent = "Endereço: " + enderecoArmazenado;
  }
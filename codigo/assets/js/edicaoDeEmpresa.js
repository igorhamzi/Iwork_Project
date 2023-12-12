window.onload = function() {
    const empresaAtiva = JSON.parse(localStorage.getItem('loginAtivo')) || {};
  
    document.getElementById("title_nomeEmpresa").textContent = "Nome da Empresa: " + empresaAtiva.nome;
    document.getElementById("title_CNPJ").textContent = "CNPJ: " + empresaAtiva.cnpj;
    document.getElementById("title_tipoNegocio").textContent = "Tipo de Negócio: " + empresaAtiva.tipo;
    document.getElementById("title_enderecoEmpresa").textContent = "Endereço: " + empresaAtiva.localizacao;
};

function editarEmpresa() {
    const empresaAtiva = JSON.parse(localStorage.getItem('loginAtivo')) || {};
  
    document.getElementById("nomeEmpresa").style.display = "inline";
    document.getElementById("CNPJ").style.display = "inline";
    document.getElementById("tipoNegocio").style.display = "inline";
    document.getElementById("enderecoEmpresa").style.display = "inline";
    document.getElementById("avaliacaoEmpresa").style.display = "inline";
  
    document.getElementById("nomeEmpresa").value = empresaAtiva.nome;
    document.getElementById("CNPJ").value = empresaAtiva.cnpj;
    document.getElementById("tipoNegocio").value = empresaAtiva.tipo;
    document.getElementById("enderecoEmpresa").value = empresaAtiva.localizacao;

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
                localStorage.setItem("uploadedImage", reader.result);
            };

            if (imageFile) {
                reader.readAsDataURL(imageFile);
            }
        });

        document.body.appendChild(imageInput);
        imageInput.click();
    });

    const savedImage = document.getElementById("savedImage");
    const imageBase64 = localStorage.getItem("uploadedImage");

    if (imageBase64) {
        savedImage.src = imageBase64;
        document.getElementById("imageContainer").style.display = "block";
    }
}

function salvarEmpresa() {
    const empresaAtiva = JSON.parse(localStorage.getItem('loginAtivo')) || {};

    var nomeEmpresa = document.getElementById("nomeEmpresa").value;
    var cnpj = document.getElementById("CNPJ").value;
    var tipoNegocio = document.getElementById("tipoNegocio").value;
    var endereco = document.getElementById("enderecoEmpresa").value;

    empresaAtiva.nome = nomeEmpresa;
    empresaAtiva.cnpj = cnpj;
    empresaAtiva.tipo = tipoNegocio;
    empresaAtiva.localizacao = endereco;

    localStorage.setItem('loginAtivo', JSON.stringify(empresaAtiva));

    localStorage.setItem("nomeEmpresa", nomeEmpresa);
    localStorage.setItem("cnpj", cnpj);
    localStorage.setItem("tipoNegocio", tipoNegocio);
    localStorage.setItem("enderecoEmpresa", endereco);

    var nomeArmazenado = localStorage.getItem("nomeEmpresa");

    document.getElementById("nomeEmpresa").style.display = "none";
    document.getElementById("CNPJ").style.display = "none";
    document.getElementById("tipoNegocio").style.display = "none";
    document.getElementById("enderecoEmpresa").style.display = "none";

    document.getElementById("title_nomeEmpresa").innerHTML = "Nome da Empresa: " + empresaAtiva.nome;
    document.getElementById("title_CNPJ").innerHTML = "CNPJ: " + empresaAtiva.cnpj;
    document.getElementById("title_tipoNegocio").innerHTML = "Tipo de Negócio: " + empresaAtiva.tipo;
    document.getElementById("title_enderecoEmpresa").innerHTML = "Endereço: " + empresaAtiva.localizacao;
}

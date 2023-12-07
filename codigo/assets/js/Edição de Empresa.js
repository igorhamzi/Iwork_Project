function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

window.onload = function() {
    if (!localStorage.getItem("nomeEmpresa")) {
        localStorage.setItem("nomeEmpresa", "PHD TECH");
    }

    if (!localStorage.getItem("cnpj")) {
        localStorage.setItem("cnpj", "25.667.497/0001-27");
    }

    if (!localStorage.getItem("tipoNegocio")) {
        localStorage.setItem("tipoNegocio", "Prestador de Serviço Tecnológico");
    }

    if (!localStorage.getItem("enderecoEmpresa")) {
        localStorage.setItem("enderecoEmpresa", "Rua Diógenes Roma - Jaboticabal - SP");
    }

    if (!localStorage.getItem("avaliacaoEmpresa")) {
        localStorage.setItem("avaliacaoEmpresa", "Muito boa");
    }

    document.getElementById("title_nomeEmpresa").textContent = "Nome da Empresa: " + localStorage.getItem("nomeEmpresa");
    document.getElementById("title_CNPJ").textContent = "CNPJ: " + localStorage.getItem("cnpj");
    document.getElementById("title_tipoNegocio").textContent = "Tipo de Negócio: " + localStorage.getItem("tipoNegocio");
    document.getElementById("title_enderecoEmpresa").textContent = "Endereço: " + localStorage.getItem("enderecoEmpresa");
    document.getElementById("title_avaliacaoEmpresa").textContent = "Avaliação: " + localStorage.getItem("avaliacaoEmpresa");
};

function editarEmpresa() {
    document.getElementById("nomeEmpresa").style.display = "inline";
    document.getElementById("CNPJ").style.display = "inline";
    document.getElementById("tipoNegocio").style.display = "inline";
    document.getElementById("enderecoEmpresa").style.display = "inline";
    document.getElementById("avaliacaoEmpresa").style.display = "inline";

    document.getElementById("nomeEmpresa").value = localStorage.getItem("nomeEmpresa");
    document.getElementById("CNPJ").value = localStorage.getItem("cnpj");
    document.getElementById("tipoNegocio").value = localStorage.getItem("tipoNegocio");
    document.getElementById("enderecoEmpresa").value = localStorage.getItem("enderecoEmpresa");
    document.getElementById("avaliacaoEmpresa").value = localStorage.getItem("avaliacaoEmpresa");

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
    var nomeEmpresa = document.getElementById("nomeEmpresa").value;
    var cnpj = document.getElementById("CNPJ").value;
    var tipoNegocio = document.getElementById("tipoNegocio").value;
    var endereco = document.getElementById("enderecoEmpresa").value;
    var avaliacao = document.getElementById("avaliacaoEmpresa").value;

    localStorage.setItem("nomeEmpresa", nomeEmpresa);
    localStorage.setItem("cnpj", cnpj);
    localStorage.setItem("tipoNegocio", tipoNegocio);
    localStorage.setItem("enderecoEmpresa", endereco);
    localStorage.setItem("avaliacaoEmpresa", avaliacao);

    var nomeArmazenado = localStorage.getItem("nomeEmpresa");
    var cnpjArmazenado = localStorage.getItem("cnpj");
    var tipoNegocioArmazenado = localStorage.getItem("tipoNegocio");
    var enderecoArmazenado = localStorage.getItem("enderecoEmpresa");
    var avaliacaoArmazenado = localStorage.getItem("avaliacaoEmpresa");

    document.getElementById("nomeEmpresa").style.display = "none";
    document.getElementById("CNPJ").style.display = "none";
    document.getElementById("tipoNegocio").style.display = "none";
    document.getElementById("enderecoEmpresa").style.display = "none";
    document.getElementById("avaliacaoEmpresa").style.display = "none";

    document.getElementById("title_nomeEmpresa").innerHTML = "Nome da Empresa: " + nomeArmazenado
    document.getElementById("title_CNPJ").innerHTML = "CNPJ: " + cnpjArmazenado
    document.getElementById("title_tipoNegocio").innerHTML = "Tipo de Negócio: " + tipoNegocioArmazenado
    document.getElementById("title_enderecoEmpresa").innerHTML = "Endereço: " + enderecoArmazenado
    document.getElementById("title_avaliacaoEmpresa").innerHTML = "Avaliação: " + avaliacaoArmazenado
}
let funcionarios = [];

if (localStorage.getItem('loginAtivo')) {
  const empresaAtiva = JSON.parse(localStorage.getItem('loginAtivo'));
  funcionarios = empresaAtiva.funcionarios || [];
}

let indiceEdicao = -1;

function mostrarFuncionarios() {
  const listaFuncionarios = document.getElementById('listaFuncionarios');
  listaFuncionarios.innerHTML = '';

  funcionarios.forEach((funcionario, index) => {
    const itemLista = document.createElement('div');
    itemLista.classList.add('funcionario');

    const nome = document.createElement('p');
    nome.textContent = `Nome: ${funcionario.nome}`;

    const cargo = document.createElement('p');
    cargo.textContent = `Cargo: ${funcionario.setor}`;

    const editarButton = document.createElement('button');
    editarButton.textContent = 'Editar';
    editarButton.classList.add('editar-button');
    editarButton.addEventListener('click', () => editarFormularioFuncionario(index));

    const excluirButton = document.createElement('button');
    excluirButton.textContent = 'Excluir';
    excluirButton.classList.add('excluir-button');
    excluirButton.addEventListener('click', () => excluirFuncionario(index));

    itemLista.appendChild(nome);
    itemLista.appendChild(cargo);
    itemLista.appendChild(editarButton);
    itemLista.appendChild(excluirButton);

    listaFuncionarios.appendChild(itemLista);
  });
}

function excluirFuncionario(index) {
  funcionarios.splice(index, 1);
  salvarNoLocalStorage();
  mostrarFuncionarios();
}

function editarFormularioFuncionario(index) {
  const funcionario = funcionarios[index];
  document.getElementById('campoNome').value = funcionario.nome;
  document.getElementById('campoCargo').value = funcionario.setor;
  indiceEdicao = index;
  document.getElementById('botaoSalvar').style.display = 'block';
}

document.getElementById('formularioFuncionario').addEventListener('submit', function (event) {
  event.preventDefault();
  const nome = document.getElementById('campoNome').value;
  const cargo = document.getElementById('campoCargo').value;
  editarFuncionario(nome, cargo);
});

function editarFuncionario(nome, cargo) {
  if (nome !== '' && cargo !== '') {
    funcionarios[indiceEdicao].nome = nome;
    funcionarios[indiceEdicao].setor = cargo;
    salvarNoLocalStorage();
    mostrarFuncionarios();
    limparInputs();
    indiceEdicao = -1;
    document.getElementById('botaoSalvar').style.display = 'none';
  } else {
    alert('Por favor, preencha todos os campos!');
  }
}

function salvarNoLocalStorage() {
  const empresaAtiva = JSON.parse(localStorage.getItem('loginAtivo')) || {};

  empresaAtiva.funcionarios = funcionarios;

  localStorage.setItem('loginAtivo', JSON.stringify(empresaAtiva));
}

function limparInputs() {
  document.getElementById('campoNome').value = '';
  document.getElementById('campoCargo').value = '';
}

mostrarFuncionarios();

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
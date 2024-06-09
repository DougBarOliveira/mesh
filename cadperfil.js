// Declaração dos elementos HTML
const fileInput = document.getElementById('file');
const img = document.querySelector('#image');
const mainButton = document.getElementById('previewBtn');

// Event listener para a mudança de imagem
fileInput.addEventListener('change', function() {
  const choosedFile = this.files[0];
  if (choosedFile) {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      img.setAttribute('src', reader.result);
      // Armazena a imagem em base64 no sessionStorage
      sessionStorage.setItem('foto', reader.result);
    });
    reader.readAsDataURL(choosedFile);
  }
});

// Event listener para o botão principal
mainButton.addEventListener('click', submitForm);

// Função para enviar o formulário
function submitForm(e) {
  e.preventDefault();

  // Verificação se todos os campos obrigatórios estão preenchidos
  const inputs = document.querySelectorAll('.input');
  let formIsValid = true;

  inputs.forEach(input => {
    if (input.value === '') {
      input.style.border = '2px solid red';
      formIsValid = false;
    } else {
      input.style.border = 'none';
    }
  });

  if (formIsValid) {
    // Se o formulário for válido, fazer o envio do formulário
    console.log('Formulário válido. Dados enviados!');
    alert('Dados enviados com sucesso!')
    // Armazenar valores no sessionStorage
    inputs.forEach(input => {
      sessionStorage.setItem(input.id, input.value);
    });

    // Armazenar o valor do <select> no sessionStorage
    const estadoSelect = document.getElementById('estado');
    sessionStorage.setItem('estado', estadoSelect.value);

    // Aqui você pode adicionar a lógica para enviar os dados do formulário

  } else {
    console.log('Por favor, preencha todos os campos obrigatórios.');
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  // Seleciona o elemento <select> pelo ID
  const estadoSelect = document.getElementById('estado');

  // Carrega o valor armazenado no local storage e define como o valor selecionado no <select>
  const savedEstado = localStorage.getItem('selectedEstado');
  if (savedEstado) {
    estadoSelect.value = savedEstado;
  }

  // Adiciona um evento 'change' ao <select> para salvar o valor no local storage
  estadoSelect.addEventListener('change', (event) => {
    localStorage.setItem('selectedEstado', event.target.value);
  });

  // Carrega e preenche os valores armazenados no sessionStorage
  const inputs = document.querySelectorAll('.input');
  inputs.forEach(input => {
    const savedValue = sessionStorage.getItem(input.id);
    if (savedValue) {
      input.value = savedValue;
    }
  });

  // Carrega a imagem armazenada no sessionStorage
  const savedImage = sessionStorage.getItem('foto');
  if (savedImage) {
    img.setAttribute('src', savedImage);
  }
});

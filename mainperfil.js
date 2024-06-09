function atualizarConteudoAutomaticamente() {
    const foto = sessionStorage.getItem('foto');
    if (foto) {
        document.getElementById('imagem').src = foto;
    }
    
    const nome = localStorage.getItem('nome');
    if (nome) {
        document.getElementById('nome').innerHTML = nome;
    }

    const cargo = sessionStorage.getItem('cargo');
    const empresa = sessionStorage.getItem('empresa');
    if (cargo && empresa) {
        document.getElementById('cargoemp').innerHTML = cargo + ' | ' + empresa;
    }

    const bio = sessionStorage.getItem('bio');
    if (bio) {
        document.getElementById('bio').innerHTML = bio;
    }

    const formacao = sessionStorage.getItem('formacao');
    if (formacao) {
        document.getElementById('form').innerHTML = formacao;
    }

    const habilidade = sessionStorage.getItem('habilidade');
    if (habilidade) {
        document.getElementById('skill').innerHTML = habilidade;
    }

    const interesses = sessionStorage.getItem('interesses');
    if (interesses) {
        document.getElementById('interesses').innerHTML = interesses;
    }

    const cidade = sessionStorage.getItem('cidade');
    const estado = sessionStorage.getItem('estado');
    if (cidade && estado) {
        document.getElementById('endereco').innerHTML = cidade + ' | ' + estado;
    }
}

document.addEventListener('DOMContentLoaded', atualizarConteudoAutomaticamente);


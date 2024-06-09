let boxBuscar = document.querySelector('.buscar-box')
let lupa = document.querySelector('.lupa-buscar')
let btnFechar = document.querySelector('.btn-fechar')


lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
    localStorage.setItem('pesquisa', 'sim')
})

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
    localStorage.setItem('pesquisa', 'não')
})

setInterval(()=>{
    let sugest = localStorage.getItem('pesquisa');


if (sugest === 'sim'){
    document.getElementById('sugestao').style.display = 'block';
}else{
    document.getElementById('sugestao').style.display = 'none';
}

}, 400);
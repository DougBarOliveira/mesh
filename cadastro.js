function alternarEstilo() {
    var estilo1 = document.getElementById('folha01');
    var estilo2 = document.getElementById('folha02');

    if (estilo1.disabled) {
        estilo1.disabled = false;
        estilo2.disabled = true;
    } else {
        estilo1.disabled = true;
        estilo2.disabled = false;
    }
}

const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confsenha = document.getElementById("confsenha");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});

function checkInputUsername(){
    const usernameValue = nome.value;
    if(usernameValue.trim() === ''){
        errorInput(nome, "Preencha o seu nome!");
    } else {
        resetInput(nome);
    }
}

function checkInputEmail(){
    const emailValue = email.value;
    if(emailValue.trim() === ''){
        errorInput(email, "O campo e-mail é obrigatório!");
    } else {
        resetInput(email);
    }
}

function checkInputPassword(){
    const passwordValue = senha.value;
    if(passwordValue.trim() === ''){
        errorInput(senha, "Preencha a senha!");
    } else if(passwordValue.length < 8){
        errorInput(senha, "A senha precisa ter no mínimo 8 caracteres.");
    } else {
        resetInput(senha);
    }
}

function checkInputPasswordConf(){
    const passwordconfValue = confsenha.value;
    const passwordValue = senha.value;
    if(passwordconfValue.trim() === ''){
        errorInput(confsenha, "Confirme a senha!");
    } else if(passwordconfValue !== passwordValue){
        errorInput(confsenha, "As senhas não coincidem.");
    } else {
        resetInput(confsenha);
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConf();

    const formItems = form.querySelectorAll(".textfield");

    const isValid = Array.from(formItems).every( (item) => {
        return item.className === "textfield";
      });
    
    if(isValid){
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("senha", senha.value);
        alert("CADASTRADO COM SUCESSO!");
        window.location="index.html"
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
    formItem.classList.add("error");
}

function resetInput(input) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = "";
    formItem.classList.remove("error");
}

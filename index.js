function alternarEstilo() {
    var estilo1 = document.getElementById('folha1');
    var estilo2 = document.getElementById('folha2');

    if (estilo1.disabled) {
        estilo1.disabled = false;
        estilo2.disabled = true;
    } else {
        estilo1.disabled = true;
        estilo2.disabled = false;
    }
}

const user = document.getElementById("user");
const pass = document.getElementById("pass");
const email = localStorage.getItem("email");
const senha = localStorage.getItem("senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});


function checkForm(){
    checkInputUser();
    checkInputPass();

    const formItems = document.querySelectorAll(".textfield");

    const isValid = Array.from(formItems).every( (item) => {
        return item.className === "textfield";
    });
    
    if(isValid){
        return usernameValue();
    }
    return false;
}

function usernameValue() {
    if (user.value === email && pass.value === senha) {
        alert("Login realizado com sucesso!");
        window.location="Interface.html";
        return false;
    } else {
        return false;
    }
}

function checkInputUser() {
    const usernameValue = user.value;
    if (usernameValue.trim() === '') {
        errorInput(user, "Preencha o seu e-mail!");
    } else if (usernameValue !== email) {
        errorInput(user, "E-mail inválido!");
    } else {
        resetInput(user);
    }
}

function checkInputPass() {
    const passValue = pass.value;
    if (passValue.trim() === '') {
        errorInput(pass, "Preencha a sua senha!");
    } else if (passValue !== senha) {
        errorInput(pass, "Senha inválida!");
    } else {
        resetInput(pass);
    }
}

function errorInput(input, message) {
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

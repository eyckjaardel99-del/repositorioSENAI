const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event){
    event.preventDefault(); //reseta funcoes padroes dpo noavegador

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    if(usuario === "vendedor" && senha === "senha123"){
        window.location.href = "cadastro.html";
    }
    else{
        mensagemErro.textContent = "erro, senha ou usuario incorreto"
    }

});
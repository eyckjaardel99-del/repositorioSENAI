const formLogin = document.getElementById("formLogin");


formLogin.addEventListener("submit", function (event){
    event.preventDefault(); //resentando as funções padrões do navegador

    const usuario = document.getElementById("usuario").value.trim()
    const senha = document.getElementById("senha").value;
   

    if( usuario === "vendedor" && senha === "senha123" ) {
        window.location.href = "sucesso.html";
    } else {
        window.location.href = "erro.html";
    }
})



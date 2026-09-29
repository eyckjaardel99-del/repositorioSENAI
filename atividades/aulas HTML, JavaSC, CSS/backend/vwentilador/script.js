const botao = document.getElementById("botao");
const ventilador = document.getElementById("ventilador");



botao.addEventListener("click", function(){
    
        ventilador.classList.toggle("ligado");
        ventilador.classList.toggle("girar")

    if(ventilador.classList.contains("ligado")){
        botao.textContent = "desligar"
    }
    else{
        botao.textContent = "ligar"
    }
           
})
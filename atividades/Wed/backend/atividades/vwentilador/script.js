const botao = document.getElementById("botao");
const ventilador = document.getElementById("ventilador");
const botaoPouco = document.getElementById("botaoPouco");
const botaoMuito = document.getElementById("botaoMuito");
const botaoNormal = document.getElementById("botaoNormal");


botao.addEventListener("click", function(){
    let num = 1;
    if(num ==1){
        ventilador.classList.toggle("ligado");
        ventilador.classList.toggle("girar")

    if(ventilador.classList.contains("ligado")){
        botao.textContent = "desligar"
    }
    else{
        botao.textContent = "ligar"
    }
        

            botaoNormal.addEventListener("click", function(){
            ventilador.classList.toggle("ligado1");

              
        })
        

        botaoPouco.addEventListener("click", function(){
            ventilador.classList.toggle("ligado2");
                
        })

        botaoMuito.addEventListener("click", function(){
            ventilador.classList.toggle("ligado3");
            ventilador.classList.toggle("girar");
                
        })
    
    }

          
})

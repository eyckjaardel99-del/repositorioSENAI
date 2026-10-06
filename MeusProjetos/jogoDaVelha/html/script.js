const botao = document.getElementById("botao1");
const velhaA = document.getElementById("velhaA");
  const jogo = document.querySelector('#velha');
  
  let jogador = true;
  let fimJogo = 0;
  let ids = [];

botao.addEventListener('click',function (){
  if(velha.style.display === 'block'){
    velha.style.display = 'none'
  }
  else{
    velha.style.display = 'block'
  }
  
    jogo.addEventListener('click', function(checagem){
      if(checagem.target.tagName === 'BUTTON'){
          let posicao = checagem.target;
          
          ids.push(posicao)
          
          
        
            if(jogador === true){
              checagem.target.value = 1,  
  
              console.log("posicao e; ",posicao)
              console.log("valor e; ",checagem.target.value)
          
              checagem.target.disabled = true;
          
              jogador = false;
              console.log("o jogador e ",jogador)
              
              
              
            }
            else if(jogador === false){        
              checagem.target.value = 2,
            
                console.log("posicao e; ", posicao)
                console.log("valor e; ", checagem.target.value)
          
              checagem.target.disabled = true;
          
            jogador = true;
            console.log("o jogador e ;",jogador)
            
            
            }
          
        fimJogo = fimJogo + 1;
        console.log(fimJogo)
        console.log("os ids sao: ", ids)
        
        
        if(fimJogo === 9){
          
        }
        
      }
  
    
    })
    

  
})



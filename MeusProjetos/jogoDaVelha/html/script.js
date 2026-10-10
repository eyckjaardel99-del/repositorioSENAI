const botao = document.getElementById("botao1");
const velhaA = document.getElementById("velhaA");
  const jogo = document.querySelector('#velha');
  
  let jogador = true;
  let fimJogo = 0;

  let posi =[
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"]
  ]

botao.addEventListener('click',function (){
  if(velha.style.display === 'block'){
    velha.style.display = 'none'
  }
  else{
    velha.style.display = 'block'
  }
})




jogo.addEventListener('click', function(checagem){
  if(checagem.target.tagName === 'BUTTON'){
    let posicao = checagem.target.id;
          
      if(jogador == true){
        for( let i=0; i < 3; i++){
          for(let j = 0; j < 3; j++){
            if(posi[i][j] === posicao){
                
            posi[i][j] = 1
            console.log("aquii: ", posi, posi[i][j])
            jogador = false;
                
            }
          }
        }

        checagem.target.disabled = true;
              
      }
      else if(jogador == false){        
        for( let i=0; i < 3; i++){
          for(let j = 0; j < 3; j++){
            if(posi[i][j] === posicao){
                
            posi[i][j] = 2
            console.log("aquii: ", posi, posi[i][j])
             jogador = true;
             console.log(jogador)
            }
          }
        }
    
        checagem.target.disabled = true;
      
      }
      
    if(posi[0][0] + posi[0][1] + posi[0][2] == 3 ||posi[0][0] + posi[0][1] + posi[0][2] == 6) {
      console.log("certo")
    }
    else if (posi[1][0] + posi[1][1] + posi[1][2] == 3 ||posi[1][0] + posi[1][1] + posi[1][2] == 6) {
      console.log("linha 2")
    }
    else if (posi[2][0] + posi[2][1] + posi[2][2] == 3 ||posi[2][0] + posi[2][1] + posi[2][2] == 6) {
      console.log("linha 3")
    }
    else if (posi[0][0] + posi[1][0] + posi[2][0] == 3 ||posi[0][0] + posi[1][0] + posi[2][0] == 6) {
      console.log("coluna 1")
    }
    else if (posi[0][1] + posi[1][1] + posi[2][1] == 3 ||posi[0][0] + posi[1][1] + posi[2][1] == 6) {
      console.log("coluna 2")
    }
    else if (posi[0][2] + posi[1][2] + posi[2][2] == 3 ||posi[0][2] + posi[1][2] + posi[2][2] == 6) {
      console.log("coluna 2")
    }
    else if (posi[0][0] + posi[1][1] + posi[2][2] == 3 ||posi[0][0] + posi[1][1] + posi[2][2] == 6) {
      console.log("diagonal1")
    }
    else if (posi[0][2] + posi[1][1] + posi[2][0] == 3 ||posi[0][2] + posi[1][1] + posi[2][0] == 6) {
      console.log("diagona 2")
    }
    
  
  }
    
})
    

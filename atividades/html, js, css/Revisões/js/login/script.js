function Login(){
    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value
    let resultado = document.getElementById("check")
    
    if(senha === 12345){
        resultado.textContent = nome +"; acesso permitido"
    }
    else{
        resultado.textContent = nome + "; acesso negado"
        
    }
}
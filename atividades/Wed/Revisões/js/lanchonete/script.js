function rodar(){
    let produto = document.getElementById("produto").value
    let quantidade = document.getElementById("quantidade").value
    let formaP = document.getElementById("formaP").value
    let mostrar = document.getElementById("mostrar")
    let entregue = document.getElementById("entregue");

    let subtotal = produto *quantidade;
    let total = subtotal;
    let desconto;
    if(formaP == 2){
        desconto = total*0.10;

        
        let novoInput = document.createElement('input');
            novoInput.type= 'number';
            novoInput.placeholder = 'preo entregue'


    }
    else if( formaP == 1){
        desconto = total*0.05;

    }
    else{
        desconto = "sem desconto";
    }
    total= total - desconto;

    mostrar.textContent = " o subtotal e: " + subtotal + ", o desconto e: " + desconto + ", total; " + total;

}
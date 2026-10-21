let compra = 0;

function adicionarCarrinho(nome, preco) {
    const lista = document.getElementById("listarCarrinho")

    const item = document.createElement('li')

    item.textContent = nome + " - RS " + preco.toFixed(2)

    lista.appendChild(item);

    compra = compra + preco

    atualizar()

}

    function atualizar(){
    const total = document.getElementById("total")

    total.textContent = "total: RS" + compra.toFixed(2)
}

    function finalizar(){

    if(compra === 0){
        Alert("adicione um item")
    }else{
        alert("finalizada" + compra.toFixed(2))

        document.getElementById("listarCarrinho").innerHTML = "";

        compra = ""

        atualizar()
    }
}

function limpar(){
    if(compra === 0){
        Alert("sem nada")
    }else{

        document.getElementById("listarCarrinho").innerHTML = "";

        compra = 0

        atualizar()
    }

}
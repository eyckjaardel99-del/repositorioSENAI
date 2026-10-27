const butao = document.getElementById("butao");

butao.addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const valorLanche = Number(document.getElementById("lanche").value);
    const quanti = Number(document.getElementById("quantidade").value);
    const bebida = Number(document.getElementById("bebida").value);

    let valorTotal = (valorLanche * quanti) + bebida ;

    if (valorTotal >= 50) {
        let desconto= valorTotal* 0.10;
        valorTotal = valorTotal - desconto
        document.getElementById("mostrar").innerText = "caro " + nome +", o valor total e; "+ valorTotal + " o desconto e ;" + desconto;
    }
    else{
        document.getElementById("mostrar").innerText = "caro " + nome + ", o valor total e; " + valorTotal;
    }
})

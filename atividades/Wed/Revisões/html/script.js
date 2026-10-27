const formProduto = document.getElementById("formproduto");
const precoCusto = document.getElementById("precoCusto");
const precoVenda = document.getElementById("precoVenda");
const margemLucro = document.getElementById("margemLucro");
const mensagemProduto = document.getElementById("mensagemProduto");

function calcularMargem(){
    const custo = Number(precoCusto.value);
    const venda = Number(precoVenda.value);

    if(precoCusto.value ==="" ||
        precoVenda.value === "" ||
        custo <= 0 ||
        venda <= 0 ){
            margemLucro.value ="-";
            return;
    }
    const margem = ((venda - custo )/custo)* 100; // 30%


    //converte o num em uma representacao de texto seguindo padrao brasileiro.
    margemLucro.value = margem.toLocaleString("pt-BR", {
        //digite um com pelo menos duas casas decimais.
        minimumFractionDigits: 2,
        //no maxim duas casas decimais.
        maximumFractionDigits: 2
    }) + "%";

}

precoCusto.addEventListener("input", calcularMargem);
precoVenda.addEventListener("input", calcularMargem);

formProduto.addEventListener("reset", function(){
    setTimeout(()=>{
        margemLucro.value = "";
        mensagemProduto.textContent = "";
    }, 0);
});

formProduto.addEventListener("submit", function(event){
    event.preventDefault();

    const codigo = document.getElementById("codigoBarras").value.trim();
    const descricao = document.getElementById("descricaoProduto").value.trim();
    const custo = Number(precoCusto.value);
    const venda = Number(precoVenda.value);
    const unidade = document.querySelector('input[name="unidade"]:checked');

    if(!/^\d+$/.test(codigo)){
        mensagemProduto.textContent = "informe um codigo valido. ";
        return;
    }

    if(!descricao || ! Number.isFinite(custo) || !Number.isFinite(venda) || custo <= 0 || venda <= 0){
        mensagemProduto.textContent = "Preencha a descrição e informe preços maiores que zero";
        return;
    }

    if(!unidade){
        mensagemproduto.textContent = "Selecione uma unidade.";
    }

    let produtos;

    try {
        produtos = JSON.parse(localStorage.getItem("produtos") || "[]")

        if(!Array(produtos)){
            produtos = []
        }
    } catch{
        produtos = []
    }

    if(produtos.some(p =>
        String(p.codigoBarras) === codigo
    )){
        mensagemProduto.textContent = "ja possui codigo de barras igual";
        return;

    }

    const margem = ((venda - custo )/custo)* 100;
    const produto = {
        codigoBarras: codigo,
        descricaoProduto: descricao,
        precoCusto: custo,
        precoVenda: venda,
        margem:margem,
        unidade: unidade.value
    }

    produto.push(produto)

});

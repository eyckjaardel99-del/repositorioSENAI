function salvar(){
    const nome = document.getElementById("nome").value;

    if(!nome){
        alert("digite nome")
        return;
    }

    const chave = "nome_" + Date.now();

    localStorage.setItem(chave, nome);

    document.getElementById("nome").value = "";
    document.getElementById("resultado").textContent = "nome salvo: " + nome;

    listarNomes()
}

function listarNomes(){
    cosnt nomes  = []

    for(let i = 0; localStorage.length; i++){
        const chave = localStorage.key(i)

        if(chave.startWith("nome")){
            nomes.push({
                chave: chave,
                valor: localStorage.getItem(chave);
            })
        }

        const resultado = document.getElementById("resultado");

        if(nomes.length === 0){
            resultado.textContent = "nenhum nome salvo";
            return;
        }

        const titulo = document.createElement("h2");

        titulo.textContent = "nomes salvos; " + nomes.length;

        const lista = document.createElement("ul")

        noems.forEach(element => {
            
        });
    }
}


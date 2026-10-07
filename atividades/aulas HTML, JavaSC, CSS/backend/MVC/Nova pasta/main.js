
const dados = require("./dados.json");

const busca = dados.find((d)=>d.id == 2);

const alteracao = {
    telefone : "1111-1111",
    senha : "novaSenha123"
}

const chaves = Object.keys(alteracao)

chaves.forEach((chave)=>{
    console.log(chave);
    console.log(busca[chave]);
    busca[chave] = alteracao[chave];
    console.log(busca[chave]);
});

console.log(Object.keys(alteracao))
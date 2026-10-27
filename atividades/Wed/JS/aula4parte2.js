let pessoa={
    nome: "eyck",
    cor: "vermelho",
    membros: "todos",
    coisa: "qualquer uma",
}

console.log(pessoa.nome)
console.log(pessoa.cor)
console.log(pessoa.membros)
console.log(pessoa.coisa)

    pessoa.nome = "ababba"
    pessoa.cor = "ererere"
    pessoa.membros = "wwwwww"
    pessoa.coisa = "alouloulu"
   
console.log(pessoa);

    pessoa.maisuma = "oioi"
    pessoa.outra = "medico"

console.log(pessoa);

delete pessoa.membros
delete pessoa.coisa

console.log(pessoa)
function listarProfessor(req, res){
    
    //criar uma lista simples de alunos
    const professores = [
        {
            id: 1,
            nome: "erer"
        },
        {
            id: 2,
            nome: "erer"
        },
        {
            id: 3,
            nome: "erer"
        }
    ];

    //Envia a lista de alunos como uma resposta JSON
    res.json(professores);
}

//Exportando a função para que ela possa ser utilizada em outros arquivos
module.exports = {
    listarProfessor
};
/*/function saudacao() {
    console.log("ola mundo")
}
saudacao();

function saudacao2(nome){
        console.log("ola nego, " + nome);
        
}
saudacao2("eyck");


function media(num1, num2){
    let media = ((num1 + num2)/2)
    console.log("media, ", + media);
}
media(20, 30);
media(40, 10);

function verificaraprovador(nota){
    if(nota>=6){
        return "aprovado";
    }
    else{
        return "reprovado";
    }

}
let resultado = verificaraprovador(7);

console.log(resultado);

function verinotas(nota){
    if(nota=>6){
        return "APROVADO";
    }
     return "reprovado";

}
function mostranota(nome, nota){
    let situacao = verinotas(nota);
    console.log(nome + ":" + situacao);
}
mostranota("eyck", 5);

function contagem(conta){
    if(conta=== 0){
        console.log("fogo!!!");
        return;
    }
Lanca(conta - 1);

}
lanca(10);
/*/


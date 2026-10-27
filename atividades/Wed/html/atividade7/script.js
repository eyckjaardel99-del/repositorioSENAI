
const nome = document.getElementById("nome");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");

const botao = document.getElementById("calcular");

const infAluno = document.getElementById("infAluno");


const limpar = document.getElementById("limpar");

botao.addEventListener("click", function () {

   const nomeAl = nome.value;
   const nota1Al = parseFloat(nota1.value);
   const nota2Al = parseFloat(nota2.value);
   const nota3Al = parseFloat(nota3.value);

   if (nomeProduto === "" || isNaN(valorProduto) || isNaN(qtd)){
        alert("Preencha todos os campos!");

        return;
    }


    

     const media = (nota1Al + nota2Al + nota3Al)/3;

    let vali

    if (media >= 7) {
        vali = "aprovado";
    }
   else if(media <7 && media >=5){
        vali = "recuperacao";
   }
   else{
        vali = "reprovado";
   }

    const item = document.createElement("li");

    item.textContent = ` ${nomeAl} - ${media} ${vali}`;
    item.className = vali;

    infAluno.appendChild(item);

    return;

    

})

limpar.addEventListener("click", function(){
       nome.value = "";
       infAluno.innerHTML = "";
       nota1.value = "";
       nota2.value = "";
       nota3.value = "";
   
})



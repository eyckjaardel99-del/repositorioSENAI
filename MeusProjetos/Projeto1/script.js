const dados1 = document.getElementById("dados1");
const dados2 = document.getElementById("dados2");
const dados3 = document.getElementById("dados3");

const botao = document.getElementById("botao");

const resultado = document.getElementById("resultado");

let dad = 0;

botao.addEventListener("click", function () {
    if (dados1.checked) {
        dad = Math.floor(Math.random()* 4) +1;

        resultado.textContent = "resutado do dado(d6) é: " + dad;  
    }
    if (dados2.checked) {
        dad = Math.floor(Math.random()* 6) +1;

        resultado.textContent = "resutado do dado(d6) é: " + dad;  
    }
    if (dados3.checked) {
        dad = Math.floor(Math.random()* 8) +1;

        resultado.textContent = "resutado do dado(d6) é: " + dad;  
    }

    
})


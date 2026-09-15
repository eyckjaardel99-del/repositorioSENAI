function somar() {
    const numero1 = Number(document.getElementById("num1").value);
    const numero2 = Number(document.getElementById("num2").value);

    const resultado = numero1 + numero2;

    document.getElementById("resultado").textContent = "resultado" + resultado;
}

function sub() {
    const numero1 = Number(document.getElementById("num1").value);
    const numero2 = Number(document.getElementById("num2").value);

    const resultado = numero1 - numero2;

    document.getElementById("resultado").textContent = "resultatdo: " + resultado;
}

function mult() {
    const numero1 = Number(document.getElementById("num1").value);
    const numero2 = Number(document.getElementById("num2").value);

    const resultado = numero1 * numero2;

    document.getElementById("resultado").textContent = "resultatdo: " + resultado;
}

function div() {
    const numero1 = Number(document.getElementById("num1").value);
    const numero2 = Number(document.getElementById("num2").value);

    if (numero2 === 0) {
        document.getElementById("resultado").textContent = "errudo "
        return;
        
    }

    const resultado = numero1 / numero2;

    document.getElementById("resultado").textContent = "resultatdo: " + resultado.toFixed(2);
}




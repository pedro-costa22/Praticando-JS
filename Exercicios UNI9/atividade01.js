let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let res = Array();
let resultado = document.querySelector("#resultado");
const verificar = document.querySelector("#verificar");
const clean = document.querySelector("#limpar");
const RA = "2221200048";

clean.addEventListener("click", () =>{
    resultado.innerHTML = "Aguardando valores..."
    num1.value = "";
    num2.value = "";
});

verificar.addEventListener("click", () =>{
    let numero1 = Number(num1.value);
    let numero2 = Number(num2.value);


    res[0] = (numero1 == numero2);
    res[1] = (numero1 === numero2);

    res[2] = (numero1 != numero2);
    res[3] = (numero1 !== numero2);

    res[4] = (numero1 > numero2);
    res[5] = (numero1 >= numero2);

    res[6] = (numero1 < numero2);
    res[7] = (numero1 <= numero2);
   

    resultado.innerHTML = ` Pedro Henrique costa RA: ${RA} <br>
                            Igualde: ${res[0]} <br>
                            Identico: ${res[1]} <br>
                            Não igual (diferente de): ${res[2]} <br>
                            Não Identico (estritamente não igual): ${res[3]} <br>
                            Maior que: ${res[4]} <br>
                            Maior ou igual: ${res[5]} <br>
                            Menor que: ${res[6]} <br>
                            Menor ou igual: ${res[7]}`;
})







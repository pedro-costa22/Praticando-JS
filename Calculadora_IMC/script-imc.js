var nome = document.getElementById('nome');
var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var resultado = document.getElementById('res');


function calcular() {
    let p = Number(peso.value)
    let a = Number(altura.value)
    let n = String(nome.value)
    let calculo = p / (a * a)
    let total = calculo.toFixed(2)

    if (peso.value.length == 0 || altura.value.length == 0) {
        window.alert(`[ERRO] Dados incorretos!`)
        resultado.innerHTML = `Nenhum dado informado!`

    } else {
            if (calculo <= 18.5) {
                resultado.innerHTML = `${n}, Seu IMC é: ${total} <br>
                                        Abaixo do peso! \u{1F610}`    
                
        }else if (calculo > 18.5 && calculo <= 24.9) {
                resultado.innerHTML = `${n}, Seu IMC é: ${total} <br>
                                      Peso Normal!  \u{1F601} `

        }else if (calculo > 24.9 && calculo <= 29.9) {
                 resultado.innerHTML  = `${n}, Seu IMC é: ${total} <br>
                                        Sobrepeso! \u{1F615}`

        }else if (calculo > 29.9 && calculo <= 34.9) {
                  resultado.innerHTML = `${n}, Seu IMC é: ${total} <br>
                                         Obesidade Grau I ! \u{1F614}`

        }else if (calculo > 34.9 && calculo <= 39.9) {
                  resultado.innerHTML = `${n}, Seu IMC é: ${total} <br>
                                         Obesidade Grau II ! \u{1F613} `

        }else {//(calculo > 40) 
            resultado.innerHTML = `${n}, Seu IMC é: ${total} <br> 
                                    Obesidade Grau III (Mórbida) \u{1F622}`
        }
    }
       

}


    

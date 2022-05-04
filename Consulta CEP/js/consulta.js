let cep = document.querySelector('#input-cep');
let btnConsulta = document.querySelector('#btn-consulta');
let resultado = document.querySelectorAll('.resultado');


btnConsulta.addEventListener("click", consultaCep);

 /* usando fetch + .then
function consultaCep(){
    let cepValue = cep.value;

    if(cepValue.length !== 8 || cepValue === ''){
        alert(`{Erro! O CEP informado está inválido, tente novamente...`)
    }

    let API = `https://viacep.com.br/ws/${cepValue}/json/`;

   
    fetch(API)
    .then(function(response){
        response.json().then(function(data) {
            exibirEndereco(data)
        })
    })
    
} 
 */

/* Usando funções assincronas Async / await  */
async function consultaCep(){

    let cepValue = cep.value;

    if(cepValue.length !== 8 || cepValue === ''){
        alert(`{Erro! O CEP informado está inválido, tente novamente...`)
    }
    
    try {
        let API = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
        let response =  await API.json()
        let data = await response
       
        exibirEndereco(data)


    } catch{
        alert('{Erro} Não foi possível encontrar o CEP informado, tente novamente !')
        
    }

    
}


function exibirEndereco(data){
    resultado[0].innerHTML = `Rua: ${data.logradouro}`;
    resultado[1].innerHTML = `Complemento: ${data.complemento}`;
    resultado[2].innerHTML = `Bairro: ${data.bairro}`;
    resultado[3].innerHTML = `Cidade: ${data.localidade} UF: ${data.uf}`;
    cep.value = '';
}




let inputCadastro = document.querySelector("#cadastroDespesa");
let btnCadastro = document.querySelector(".btnCadastro");
let btnEdit = document.querySelectorAll(".btn-edit");
let btnExcluir = document.querySelectorAll(".btn-exit");
let tarefas = document.querySelectorAll(".tarefa");

btnCadastro.addEventListener("click", () =>{  
    let cadastroValue = inputCadastro.value;
    
    if(cadastroValue === ""){
       alert("Valor invalido, verifique novamente");

    } else{
       alert('Cadastrado com sucesso');
       criandoTarefa(cadastroValue); 
       let tarefa = new Tarefa(cadastroValue);
       guardandoTarefa(tarefa);
       inputCadastro.value = "";
    }
})

class Tarefa {
    constructor(tarefa){
        this.tarefa = tarefa;
    }

}

function guardandoTarefa(tarefa){
   gravar(tarefa)
}


function proximoId(){
    let proximoId = localStorage.getItem('id')
    return parseInt(proximoId) + 1;
}


function gravar(tarefa) {
    if(localStorage.getItem('id') != null){
        let id = proximoId();
        localStorage.setItem(id, JSON.stringify(tarefa))
        localStorage.setItem('id', id)

    }else if (localStorage.getItem('id') === null) {
        let id = 0;
        localStorage.setItem(id, JSON.stringify(tarefa))
        localStorage.setItem('id', id)
    }
}

// Criando elemento no HTML
const container = document.querySelector(".container-main");
function criandoTarefa(text){

    //Criando a div da tarefa
    let divTarefa = document.createElement('div');
    divTarefa.className = "tarefa";

    //Criando a descrição
    let divDescricao = document.createElement("div");
    divDescricao.classList.add("descricao");

    let inputCheck = document.createElement('input')
    inputCheck.type = "checkbox";

    let textoTarefa = document.createElement('p');
    let texto = document.createTextNode(text);
    textoTarefa.appendChild(texto);

    divDescricao.appendChild(inputCheck);
    divDescricao.appendChild(textoTarefa);



    //Criando a os botoes
    let divBotoes = document.createElement("div");
    divBotoes.classList.add('btns')

    //Botão editar
    let btnEditar = document.createElement('button');
    btnEditar.type = "submit";
    btnEditar.classList.add('btn-edit');

    btnEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

    divBotoes.appendChild(btnEditar);

    //Botao excluir
    let btnExcluir = document.createElement('button');
    btnExcluir.type = "submit";
    btnExcluir.classList.add('btn-exit');

    btnExcluir.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    divBotoes.appendChild(btnExcluir);



    //Inserindo no HTML
    divTarefa.appendChild(divDescricao)
    divTarefa.appendChild(divBotoes)
    container.appendChild(divTarefa)
   

}









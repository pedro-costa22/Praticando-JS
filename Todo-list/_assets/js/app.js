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






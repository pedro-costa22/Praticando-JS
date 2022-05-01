let inputCadastro = document.querySelector("#cadastroDespesa");
let btnCadastro = document.querySelector(".btnCadastro");


btnCadastro.addEventListener("click", () =>{  
    let cadastroValue = inputCadastro.value;
    
    if(cadastroValue === ""){
       alert("Valor invalido, verifique novamente");

    } else{
      // alert('Cadastrado com sucesso');
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
   //gravar(tarefa)
    gravar(tarefa);

    //Enviando a tarefa para a criação no HTML
    let listaTarefas = recuperarTarefa();
    conteudoTarefa(listaTarefas);
    
}

//Gerando o ID da nova tarefa
function proximoId(){
    let proximoId = localStorage.getItem('id')
    return parseInt(proximoId) + 1;
}

//Armazenando a tarefa cadastrada no LocalStorage
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

//Recuperando registros
function recuperarTarefa(){
    let tarefas = [];
    let id = localStorage.getItem('id');

    for(let i = 0; i <= id; i++){
        let tarefaId = JSON.parse(localStorage.getItem(i));

       if(tarefaId === null){
            continue
       }


        tarefaId.id = i;
        tarefas.push(tarefaId)

        
    }
   
   
    return tarefas;
    
}

//Enviando o conteudo da tarefa para o HTML dinâmico
function conteudoTarefa(listaTarefas){
    let novaTarefaID = localStorage.getItem('id');
    let conteudoNovaTarefa = listaTarefas[novaTarefaID].tarefa;
    //window.location.reload();

    return criandoTarefa(conteudoNovaTarefa);
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

    let textoTarefa = document.createElement('p');
    let texto = document.createTextNode(text);
    textoTarefa.appendChild(texto);

    divDescricao.appendChild(textoTarefa);



    //Criando a os botoes
    let divBotoes = document.createElement("div");
    divBotoes.classList.add('btns')

    //Botão confirmar
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
    divTarefa.appendChild(divDescricao);
    divTarefa.appendChild(divBotoes);
    container.appendChild(divTarefa);


    

   
 
}


//Criando as tarefas já existentes ao acessar a página
window.addEventListener("load", () =>{
    let tarefasExistentes = recuperarTarefa();
    
    
    for(let i = 0; i  <= (tarefasExistentes.length - 1); i++) {
            let conteudoTarefa = tarefasExistentes[i].tarefa;
             criandoTarefa(conteudoTarefa)
              
    }

  

    let divs = document.querySelectorAll('.tarefa')
    //console.log(divs[0]);

    let btnEditar = document.querySelectorAll('.btn-edit')
    //console.log(btnEditar);

    let btnExcluir = document.querySelectorAll('.btn-exit')
    //console.log(btnExcluir);

    funcionalidadesBotoes(divs, btnEditar, btnExcluir);  
   

    

})

let globalTarefas = recuperarTarefa();

function removendoItem(id){
    localStorage.removeItem(id)
    let idLocal = localStorage.getItem('id') - 1;
    let newCapacity = localStorage.setItem('id', idLocal)

    /*
    for(let i = 0; i <= globalTarefas.length; i++){
        if(i <= idLocal){
            globalTarefas[i] = localStorage.setItem('id', i)
        }

        for(let n = globalTarefas.length; n > idLocal; n--){
            localStorage.removeItem(n)
        }
    } */

   

    return newCapacity
   
    
    
}



//Funcionalidades botes
function funcionalidadesBotoes(div, btnEdit, btnExluir){
  /*
    btnExluir.forEach(element => {
        element.addEventListener("click", () =>{
            switch(element){
                case btnExluir[0]:
                        div[0].remove();
                        removendoItem(0);
                    break;

                case btnExluir[1]:
                    div[1].remove();
                        removendoItem(1);
                    break;

                case btnExluir[2]:
                    div[2].remove();
                        removendoItem(2);
                    break;

                case btnExluir[3]:
                    div[3].remove();
                    removendoItem(3);
                    break;

                
            }
        })
    });
*/

  



  /* btnExluir.addEventListener("click", () =>{
        div.remove();
        removendoItem(0)
       
   }) */

  /*
   btnEdit.addEventListener("click", (item) =>{
        let listaTarefas = recuperarTarefa();

        console.log(listaTarefas);
       

        for(let i = 0; i<= listaTarefas.length; i++){
            let mostrandoTodosValores = listaTarefas[i].tarefa;
            if(mostrandoTodosValores[i] == item[i]){
               
            }
        }
        
        
        let alterandoTarefaID = localStorage.getItem('id');
        let conteudoNovaTarefa = listaTarefas[alterandoTarefaID].tarefa;

        console.log(conteudoNovaTarefa); 
        
   }) 
    */
    
} 




















    




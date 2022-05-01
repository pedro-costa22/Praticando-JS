let inputCadastro = document.querySelector("#cadastroDespesa");
let btnCadastro = document.querySelector(".btnCadastro");
let globalTarefas = recuperarTarefa();



btnCadastro.addEventListener("click", () =>{  
    let cadastroValue = inputCadastro.value;
    
    if(cadastroValue === ""){
       alert("Valor invalido, verifique novamente");

    }else if(globalTarefas.length <= 13){
       alert('Cadastrado com sucesso');
       let tarefa = new Tarefa(cadastroValue);
       guardandoTarefa(tarefa);
       inputCadastro.value = "";

    } else {
        alert("{ERROR}! Limite de tarefas atingidas, complete alguma tarefa cadastrada para adicionar uma nova...")
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
 
    criandoTarefa(conteudoNovaTarefa);

    return window.location.reload()
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
    let btnValid = document.createElement('button');
    btnValid.type = "submit";
    btnValid.classList.add('btn-edit');

    btnValid.innerHTML = '<i class="fa-solid fa-check"></i>';

    divBotoes.appendChild(btnValid);

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
    clearBD();
    
    
    for(let i = 0; i  <= (tarefasExistentes.length - 1); i++) {
            let conteudoTarefa = tarefasExistentes[i].tarefa;
             criandoTarefa(conteudoTarefa)    
    }

  
    let divs = document.querySelectorAll('.tarefa');
    let btnValid = document.querySelectorAll('.btn-edit');
    let btnExcluir = document.querySelectorAll('.btn-exit');
    let textoTarefa = document.querySelectorAll('p');
    let divTexto = document.querySelectorAll('.descricao');
    funcionalidadesBotoes(divs, btnValid, btnExcluir, textoTarefa, divTexto);  
})

//Removendo item do LocalStore
function removendoItem(id){
    localStorage.removeItem(id)
    let idLocal = localStorage.getItem('id') - 1;
    let newCapacity = localStorage.setItem('id', idLocal)
    clearBD();

    //return newCapacity  
    
}


//Funcionalidades botes
function funcionalidadesBotoes(div, btnValid, btnExluir, text, divTexto){

    btnExluir.forEach(element => {
        element.addEventListener("click", () =>{
            switch(element){
                case btnExluir[0]:
                        let confirmando = confirmDelete();
                        if(confirmando == true) {
                            div[0].remove();
                            removendoItem(0);
                        }
                    break;

                case btnExluir[1]:
                        let confirmando1 = confirmDelete();
                        if(confirmando1 == true){
                            div[1].remove();
                            removendoItem(1);
                        }
                    break;

                case btnExluir[2]:
                    let confirmando2 = confirmDelete();
                        if(confirmando2 == true){
                            div[2].remove();
                            removendoItem(2);
                        }
                    break;

                case btnExluir[3]:
                    let confirmando3 = confirmDelete();
                        if(confirmando3 == true){
                            div[3].remove();
                            removendoItem(3);
                        }
                    break;

                case btnExluir[4]:
                    let confirmando4 = confirmDelete();
                    if(confirmando4 == true){
                        div[4].remove();
                        removendoItem(4);
                    }
                    break;

                case btnExluir[5]:
                    let confirmando5 = confirmDelete();
                    if(confirmando5 == true){
                        div[5].remove();
                        removendoItem(5);
                    }
                    break;

                case btnExluir[6]:
                    let confirmando6 = confirmDelete();
                        if(confirmando6 == true){
                            div[6].remove();
                            removendoItem(6);
                        }
                    break;

                case btnExluir[7]:
                    let confirmando7 = confirmDelete();
                        if(confirmando7 == true){
                            div[7].remove();
                            removendoItem(7);
                        }
                    break;

                case btnExluir[8]:
                    let confirmando8 = confirmDelete();
                        if(confirmando8 == true){
                            div[8].remove();
                            removendoItem(8);
                        }
                    break;

                case btnExluir[9]:
                    let confirmando9 = confirmDelete();
                        if(confirmando9 == true){
                            div[9].remove();
                            removendoItem(9);
                        }
                    break;

                case btnExluir[10]:
                    let confirmando10 = confirmDelete();
                    if(confirmando10 == true){
                        div[10].remove();
                        removendoItem(10);
                    }
                    break;

                case btnExluir[11]:
                    let confirmando11 = confirmDelete();
                        if(confirmando11 == true){
                            div[11].remove();
                            removendoItem(11);
                        }
                    break;

                case btnExluir[12]:
                    let confirmando12 = confirmDelete();
                    if(confirmando12 == true){
                        div[12].remove();
                        removendoItem(12);
                    }
                    break;

                case btnExluir[13]:
                    let confirmando13 = confirmDelete();
                        if(confirmando13 == true){
                            div[13].remove();
                            removendoItem(13);
                        }
                    break;

                case btnExluir[14]:
                    let confirmando14 = confirmDelete();
                    if(confirmando14 == true){
                        div[14].remove();
                        removendoItem(14);
                    }
                    break;
            
            }
        })
    });

    btnValid.forEach(element =>{
        element.addEventListener("click", () =>{
            switch(element){
                case btnValid[0]:
                        text[0].classList.toggle('textValid');
                        divTexto[0].classList.toggle('valid');
                    break;

                case btnValid[1]:
                        text[1].classList.toggle('textValid');
                        divTexto[1].classList.toggle('valid');
                    break;

                case btnValid[2]:
                        text[2].classList.toggle('textValid');
                        divTexto[2].classList.toggle('valid');
                    break;

                case btnValid[3]:
                        text[3].classList.toggle('textValid');
                        divTexto[3].classList.toggle('valid');;
                    break;

                case btnValid[4]:
                    text[4].classList.toggle('textValid');
                        divTexto[4].classList.toggle('valid');
                    break;

                case btnValid[5]:
                    text[5].classList.toggle('textValid');
                    divTexto[5].classList.toggle('valid');;
                    break;

                case btnValid[6]:
                    text[6].classList.toggle('textValid');
                        divTexto[6].classList.toggle('valid');
                    break;

                case btnValid[7]:
                    text[7].classList.toggle('textValid');
                        divTexto[7].classList.toggle('valid');
                    break;

                case btnValid[8]:
                    text[8].classList.toggle('textValid');
                        divTexto[8].classList.toggle('valid');
                    break;

                case btnValid[9]:
                    text[9].classList.toggle('textValid');
                        divTexto[9].classList.toggle('valid');
                    break;

                case btnValid[10]:
                    text[10].classList.toggle('textValid');
                    divTexto[10].classList.toggle('valid');
                    break;

                case btnValid[11]:
                    text[11].classList.toggle('textValid');
                        divTexto[11].classList.toggle('valid');
                    break;

                case btnValid[12]:
                    text[12].classList.toggle('textValid');
                        divTexto[12].classList.toggle('valid');
                    break;

                case btnValid[13]:
                    text[13].classList.toggle('textValid');
                        divTexto[13].classList.toggle('valid');
                    break;

                case btnValid[14]:
                    text[14].classList.toggle('textValid');
                        divTexto[14].classList.toggle('valid');
                    break;
            }
        })
    })


} 

//Confirmando exclusão da tarefa.
function confirmDelete(){
    let confirm = window.confirm("A tarefa selecionada será deletada permanentemente, deseja confirmar essa ação ?")
    if(confirm ==  true){
        return true
    }
}

//Limpando BD e removendo bugs!
function clearBD(){
    let clearBD = localStorage.getItem('id');
    if(clearBD == -1) {
        return localStorage.clear();
    }
}


















    




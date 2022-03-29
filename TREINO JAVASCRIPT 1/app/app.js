// console.log("olá mundo");

// var tarefa1 ="Ir ao supermercado";
// var tarefa2 ="Estudar programação";
// var tarefa3 ="Atualizar o LinkedIn";

// console.log("Minhas tarefas são: "+ tarefa1);
// console.log("Minhas tarefas são: "+ tarefa1);
// console.log("Minhas tarefas são: "+ tarefa1);

// const tarefas = [];
// console.log(tarefas);
// tarefas.push(tarefa1);
// console.log(tarefas);
// tarefas.push(tarefa2);
// console.log(tarefas);
// tarefas.push(tarefa3);
// console.log(tarefas);

// var novaTarefa = "Regar plantas";
// alert("Sua nova tarefa é "+ novaTarefa);
// tarefas.push(novaTarefa);
// console.log(tarefas);

// for(let i=0; i<tarefas.length;i++){
//     console.log("Minha tarefa "+ i +" é " + tarefas[i])
// }

// function exibirTarefas(tarefas){
//     return console.log("Suas tarefas são: "+tarefas);}

//     exibirTarefas(tarefas);

// var addTarefas = "Nova tarefa da atividade"

// function adicionarTarefas(addTarefas) {
// return tarefas.push(addTarefas)
// }

// adicionarTarefas(addTarefas);
// console.log(tarefas);


let NovaTarefa = {
    id: 1, titulo: "Calibrar pneu da bicicleta", descrição: "Levar a bicicleta vermelha ao posto e calibrar o pneu traseiro com 32 psi",
}

const tarefas = []
tarefas.push(NovaTarefa);

console.log(tarefas);

function tar(tarefas){
    return 
        tarefas.id,
        tarefas.titulo,
        tarefas.descrição
}
tar(tarefas);
console.log(tarefas);

// Verficar se a data do evento é superior a data atual
console.log("Insira a data do evento: ");
// Data fictícia
let dataEvento = 10072022; 
// Data atual fictícia
let dataAtual = 03072022; 
    if (dataEvento > dataAtual) {
        console.log("Cadastro permitido!");
    }
    else {
        console.log("Cadastro não permitido pela data!");
    }

// Verificar se a idade é maior ou igual a 18
console.log("Insira sua idade: ");
// Idade inserida
let idade = 27;
    if (idade >= 18){
        console.log("Cadastro permitido, prossiga!");
    }
    else (idade < 18){
        console.log("Cadastro não permitido pela idade!");
    }

// Insira os nomes dos participantes do evento
console.log("Insira os nomes dos participantes do evento: ");
// Lista inserida
let nomeDosParticipantes = ["Vanessa", "Carlos", "João", "Yasmin", "Ivan"];
let quantidadeDeParticipantes = nomeDosParticipantes.length
    if (quantidadeDeParticipantes <= 100){
        console.log("Cadastro do evento efetuado com sucesso!");
    }
    else {
        console.log("Cadastro do evento não permitido por exceder limite de participantes!");
    }
        

    
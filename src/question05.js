import leia from 'readline-sync';

var tempAtual = leia.questionFloat("INFORME A TEMPERATURA: ");
var opcao = leia.keyInSelect(["C -> F", "C -> K", "F -> C", "F -> K", "K -> C", "K -> F"], "INFORME A CONVERSAO")

switch(opcao) {
    case 0:
        // conversao C -> F
        var F = (tempAtual * 1.8) 
}
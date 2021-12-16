/*
// Seção de Declarações das variáveis 
   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreval ("digite o nome:")
   leia (nome)
    escreval ("digite o numero:")
   leia (numero)
    escreval(nome, " : ", numero)
    
*/

var nome, numero, 

nome = prompt("digite o seu nome: ")
numero = prompt("digite o seu numero: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero
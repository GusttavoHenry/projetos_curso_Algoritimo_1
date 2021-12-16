/*
passou:= falso
   escreval("Digite o nome  do aluno")
   leia(nome)
   escreval("digite a nota 01")
   leia(nota01)
   escreval("digite a nota 02")
   leia(nota02)
   media :=(nota01 + nota02) /2

   se media >= 50 entao
   passou := verdadeiro
   fimse
   se (passou) && (media >=50 || meedia <=70) entao
   escreval("aprovado", nome)
   senao
   escreval("reprovado", nome)
   fimse
*/
var nome, nota01, nota02 ,passou;
passou = false;
nome = prompt("Digite o nome  do aluno:")
nota01= prompt("Digite a nota01:")
nota02 = prompt("digite a nota02:")

media = (parseInt(nota01) + parseInt(nota02))/ 2;

if(media >= 50)
  passou = true;
  
  if(passou && (media >= 70 && Media<=90)) 
alert("aprovado!" + nome)
else  
 alert("reprovado!" + nome)




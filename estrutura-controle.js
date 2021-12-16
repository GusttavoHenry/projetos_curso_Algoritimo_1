
var nome, nota01, nota02;
nome = prompt("Digite o nome  do aluno:")
nota01= prompt("Digite a nota01:")
nota02 = prompt("digite a nota02:")

media = (parseInt(nota01) + parseInt(nota02))/ 2;

if(media >= 50)
   alert("aprovado!" + nome)
else  
 alert("reprovado!" + nome)

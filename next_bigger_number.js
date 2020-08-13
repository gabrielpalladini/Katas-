//Next Bigger Number 

function nextBigger(n){
  let newArr = (""+n).split("");
  let allVariations = [];
  console.log(newArr)
  
}


nextBigger(414)
// Return 441


// Steps - Next Big Number with same digits 

// criar array com todas as variedades de numeros possiveis com os digitos do numero original 
// ordenar por ordem crescente 
// fazer um for loop começando no numero inicial 
// quando o for loop chegar no menor numero da array, return esse numero 
// se o numero do passo anterior nao for maior que o original, return -1
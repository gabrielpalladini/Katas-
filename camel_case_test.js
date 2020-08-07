// Camel Case Test 
function solution(string) {
    let newArr = string.replace(/([a-z])([A-Z])/g, '$1 $2');
   
  return newArr
    }
   



solution('camelCasingTest')
// Return 'camel Casing Test'


// Steps - Break Camel Case 

// identify capital letters 
// separate the capital letters with space from the rest of the text 
function distinctDigitYear(year){
 
    for(let i=year+1; i<9999; i++){
      if(numberIsDistinct(i)) return i
    }
  }
  
  function numberIsDistinct(num){
    num = num.toString();
    
    for(let i=0; i<num.length; i++){
      if(num.indexOf(num[i], i+1) !== -1){
    return false
  } 
    }
      return true;
  }
  
function list(names){
  
    if(names.length === 0) return '';
    if(names.length === 1) return names[0]['name'];
    if(names.length === 2) return names[0]['name'] + ' & ' + names[1]['name']
  
    if(names.length > 2) {
  
    let twoLast = ' ' + names.slice(-2)[0]['name'] + ' & ' + names.slice(-2)[1]['name'] 
  
  let firstNames = [names[0]['name']];
    
    for(let i=1; i<names.length-2; i++){
      firstNames.push(' ' + names[i]['name'])
    }
  
  console.log(firstNames) 
    return firstNames + ',' + twoLast
  
    }
  }
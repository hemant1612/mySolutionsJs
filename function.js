//1
function recursive(num){
  if(num == 0){
    return 'even';
  }
  else if(num == 1){
    return 'odd';
  }
  //only for num > 0
  else return recursive(num - 2);
}


//2

countB = (str,chr = 'B') => {
   let count =0;
   let code = chr.charCodeAt(0)
   for(let i=0;i<str.length;i++){
     if(str.charCodeAt(i) == code || str.charCodeAt(i) == code ){
       count++; }
     }
   return count;
}

//3
countAnyChr = (str,chr) => countB(str,chr)

// 1
 function recursive (num) {
  if (num == 0) {
    return 'even';
  }
  else if (num == 1) {
    return 'odd';
  }
  // Only for num > 0
  return recursive(num - 2);
}


// 2

 var countB = (str, chr = 'B') => {
   let count = 0;
   const code = chr.charCodeAt(0)
   for (let i = 0; i < str.length; i++) {
     if (str.charCodeAt(i) == code || str.charCodeAt(i) == code) {
       count += 1;
     }
     }
   return count;
}

// 3
countAnyChr = (str, chr) => countB(str, chr)

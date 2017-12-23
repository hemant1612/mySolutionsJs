//1
range = (start,end) => {
  arr= [];
  for(let i=start;i<=end;i++){
    arr.push(i);
  }
  return arr;
}
//1.1
range = (start,end,step=1) => {
  arr= [];
  for(let i=start;i<=end;i+=step){
    arr.push(i);
  }
  return arr;
}

//2 using map

sum1 = (arr) => {
  let s = 0;
  arr.map( (val) =>
  s+= val )
  return s;
}
//2 using reduce

sum2 = (arr) => arr.reduce( (acc, val) =>  acc+val,0 )

//3

function arraytoList(arr,i=0){
  if( i < arr.length-1){
    return {
      value : arr[i],
      next: arrtoList(arr,i+1)
    }
  }
  if(i == arr.length-1){
    return {
      value: arr[i],
      next : null
    }
  }
}


//4
function listtoArray(list){
  ar = [];
  while(true) {
    ar.push(list.value);
    list = list.next;
    if(list.next === null ) {
       ar.push(list.value);
       break;
     }
  }
  return ar;
}


//5

function deepEqualObject(obj1,obj2){
  for(prop in obj1){
    if(prop in obj2 )
     console.log('tes');
  }


}

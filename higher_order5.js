//1*
function flatter(arr) {
var store = [];

(function flatterMe(arr) {
var ga = [];
    arr.reduce(function(acc,cur){
      if(typeof cur !== 'object' ){
        acc.push(cur);
        store.push(cur);
        return acc;
      }
      else return flatterMe(cur);
    }
  ,[])
})(arr)
return store;
}

//or using es6

function flatten(arr){
  let ar = [].concat(...arr);
  return ar.some(Array.isArray) ? flatten(ar) : ar;
}
flatten([1, [2], [3, [[4]]]]);

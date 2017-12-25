// 1

var range = (start, end) => {
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}
// 1.1
var range1 = (start, end, step = 1) => {
  let arr = []
  for (let i = start; i <= end; i += step) {
    arr.push(i)
  }
  return arr
}

// 2 using map

var sum1 = (arr) => {
  let s = 0
  arr.map((val) =>
    s += val)
  return s
}
// 2 using reduce

var sum2 = (arr) => arr.reduce((acc, val) => acc + val, 0)

// 3

function arraytoList (arr, i = 0) {
  if (i < arr.length - 1) {
    return {
      value: arr[i],
      next: arraytoList(arr, i + 1)
    }
  }
  if (i == arr.length - 1) {
    return {
      value: arr[i],
      next: null
    }
  }
}

// 4
function listtoArray (list) {
  let ar = []
  while (true) {
    ar.push(list.value)
    list = list.next
    if (list.next === null) {
      ar.push(list.value)
      break
    }
  }
  return ar
}

// 5

var deepEqual = function(a,b) {
  // if both objects are same or values are equal return true
  if(a === b) return true;
  // otherwise if either of them is null or not an obeject return false
  if(typeof a != 'object' || typeof b != 'object' ||  a === null || b === null ){
    return false;
  }
  // finally count properties of a and b, and compare for properties recursively
  let countA = 0,
      countB = 0,
      prop = 0 ;
  for( prop in a ) {
    countA += 1;
  }
  for( prop in b) {
    countB += 1;
    if (!(prop in a ) || !deepEqual(b[prop] , a[prop])) return false;
  }
  return countA === countB;
}

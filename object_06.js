//1

var Vector= function(x,y){
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(obj){
  this.x = this.x +obj.x;
  this.y = this.y+ obj.y;
  return this;
}



//3 cheap workaround
// function ArraySeq(ar){
//   this.ar = ar;
// }
//
// function RangeSeq(from,to){
//   this.start = from;
//   this.end = to;
//
//
//  var logFive = function(obj){
//     if(arguments.length == 1){
//       if(arguments[0][1] - arguments[0][0] >= 5){
//         for(let i=0;i<5;i++){
//           console.log(arguments[0][0]+i);
//         }
//       }
//       else{
//         for(let i=0;i<=arguments[0][1] - arguments[0][0];i++){
//           console.log(arguments[0][0]+i);
//       }
//       }
//     }
//     else {
//       if(arguments[1] - arguments[0] >= 5){
//         for(let i=0;i<5;i++){
//           console.log(arguments[0]+i);
//         }
//     }
//     else{
//       for(let i=0;i<=arguments[1] - arguments[0];i++){
//         console.log(arguments[0]+i);
//     }
//     }
//   }
// }

//3 other method.

function ArraySeq(ar){
  this.ar = ar;
  this.pos = ar[0];
}

ArraySeq.prototype.next = function(){
  if(this.pos > this.ar[this.ar.length-1] )
    return false
  this.pos++;
  return true;
}

ArraySeq.prototype.current = function(){
  return this.ar[pos];
}

var logFive = function(obj){
  for(let i=0;i<5;i++){
    if(obj.next()) console.log(obj.ar[0]+i);
    else break;
  }
}

/*
*RangeSeq
*/
function RangeSeq(from,to){
  this.from = from-1;
  this.to = to;
}

RangeSeq.prototype.next = function(){
  if(this.from >= this.to){
    return false;
  }
  this.from++;
  return true;
}

RangeSeq.prototype.current = function(){
  return this.from;
}

var rangeFive = function(obj){
  for(let i=0;i<5;i++){
    if(obj.next()) console.log(obj.from);
    else break;
  }
}

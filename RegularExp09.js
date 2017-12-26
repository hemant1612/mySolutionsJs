//1

function verify(reg , ar){
  ar.map(function(str){
    return reg.test(str);
  })
}

 //car and cat

/ca[rt]/
/pr?op/
/(ferr(et|ari|y))/
/(ious)$/
/\s\,[\'\"]/
/\w{6,}/
/\b[^\We]\b/

var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/A/g, "B"));
// → "I'm the cook," he said, "it's my job."

/(^|\W)'|'(\W|$)/



// positive lookahead (?=)  =>  /(\d)(?=65)/ '1'65
// negative lookahead (?!) => /(\d)(?!65)/  '1'45

// $1 $& $` $$ $' subsitution








//3
/((\-|\+)?([\d]+)(\.)?((\d)+)?((e|E)(\-|\+)(\d)+)?)|((\.)(\d)+)/

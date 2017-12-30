(function(obj) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  obj.name = function(c) {
    return months[c - 1];
  }

  obj.number = function(month) {
    return months.indexOf(month) + 1;
  }

  return obj;
})(this.month = {})


console.log(month.name(2));
console.log(month.number("Nov"));
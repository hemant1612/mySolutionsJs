document.querySelector("#button").addEventListener("click", function() {
  var code = document.querySelector("#code").value;
  var show = document.querySelector("#output");
  try {
    var result = new Function(code)();
    show.innerText = String(result);
  } catch (e) {
    show.innerText = "Error: " + e;
  }
});




var terms = [];
for (var name in window)
  terms.push(name);

var textfield = document.querySelector("#field");
var suggestions = document.querySelector("#suggestions");

textfield.addEventListener("input", function() {
  var matching = terms.filter(function(term) {
    return term.indexOf(textfield.value) == 0;
  });
  suggestions.textContent = "";
  matching.slice(0, 20).forEach(function(term) {
    var node = document.createElement("div");
    node.textContent = term;
    node.addEventListener("click", function() {
      textfield.value = term;
      suggestions.textContent = "";
    });
    suggestions.appendChild(node);
  });
});
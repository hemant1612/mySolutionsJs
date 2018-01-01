//1
var field = document.querySelector("input");
field.addEventListener("keydown", function(event) {
  if (event.keyCode == "Q".charCodeAt(0) ||
    event.keyCode == "W".charCodeAt(0) ||
    event.keyCode == "X".charCodeAt(0))
    event.preventDefault();
});

//2
const dots = [];
for (let i = 0; i < 15; i++) {
  var node = document.createElement('div');
  node.className = "trail";
  document.body.appendChild(node);
  dots.push(node);
}

var i = 0;
addEventListener("mousemove", function(event) {
  var dot = dots[i];
  dot.style.left = event.pageX + 'px';
  dot.style.top = event.pageY + 'px';
  i = (i + 1) % 15;

})




//3
function asTabs(node) {
  const tabs = [];
  node.childNodes.forEach(function(child) {
    if (child.nodeType == document.ELEMENT_NODE)
      tabs.push(child);
  })
  var div = document.createElement("div");
  tabs.forEach(function(tab, i) {
    var button = document.createElement("button");
    button.textContent = tab.getAttribute("data-tabname");
    button.addEventListener("click", function() {
      handleClick(i)
    });
    div.appendChild(button);
  })
  node.insertBefore(div, node.firstChild);

  function handleClick(n) {
    for (let i = 0; i < div.childNodes.length; i++) {
      if (i == n) {
        tabs[i].style.display = "";
        div.childNodes[i].style.background = "red";

      } else {
        tabs[i].style.display = "none";
        div.childNodes[i].style.background = "";
      }
    }

  };
  handleClick(0);
}
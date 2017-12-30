var MOUNTAINS = [{
    name: "Kilimanjaro",
    height: 5895,
    country: "Tanzania"
  },
  {
    name: "Everest",
    height: 8848,
    country: "Nepal"
  },
  {
    name: "Mount Fuji",
    height: 3776,
    country: "Japan"
  },
  {
    name: "Mont Blanc",
    height: 4808,
    country: "Italy/France"
  },
  {
    name: "Vaalserberg",
    height: 323,
    country: "Netherlands"
  },
  {
    name: "Denali",
    height: 6168,
    country: "United States"
  },
  {
    name: "Popocatepetl",
    height: 5465,
    country: "Mexico"
  }
];


function buildTable(data) {
  const header = Object.keys(data[0]);
  const tableNode = document.createElement('table');
  const headerNode = document.createElement('th');
  header.forEach((val) => {
    headerNode.appendChild(document.createTextNode(val));
  })
  tableNode.appendChild(document.createElement("tr").appendChild(headerNode))

  data.forEach((val) => {
    let tableRow = document.createElement('tr');
    let tableData = document.createElement('td');
    tableData.appendChild(document.createTextNode(val.name));
    tableData.appendChild(document.createTextNode(val.height));
    tableData.appendChild(document.createTextNode(val.country));
    tableRow.appendChild(tableData);
    tableNode.appendChild(tableRow);
  })

  return tableNode;

}
document.body.appendChild(buildTable(MOUNTAINS));



//2
function byTagName(node, tagName) {
  return node.getElementsByTagName(tagName.toLowerCase())
}


//3


var cat = document.querySelector("img");
var hat = document.getElementById("hat");
var angle = 0,
  lastTime = null;

function animate(time) {
  if (lastTime != null)
    angle += (time - lastTime) * 0.001;
  lastTime = time;
  cat.style.top = (Math.sin(angle) * 20) + "px";
  cat.style.left = (Math.cos(angle) * 200) + 300 + "px";
  hat.style.top = -(Math.sin(angle) * 20) + "px";
  hat.style.left = -(Math.cos(angle) * 200) + 300 + "px";
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
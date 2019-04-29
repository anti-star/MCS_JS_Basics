let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

let counter = 0;

function randColor() {
    var r = Math.floor(Math.random()*(255-0)+0);
    var g = Math.floor(Math.random()*(255-0)+0);
    var b = Math.floor(Math.random()*(255-0)+0);
    var color = 'rgb(' + r + ',' + g + ',' + b + ')';
    return color;
  }

for (item in crypto) { 
  let container = document.createElement('div');
  container.className = 'box ' + (counter+1);
  graphBox.appendChild(container);

  let header = document.createElement('h2');
  header.className = 'name ' + (counter+1);
  header.innerHTML = crypto[counter]['name'];
  container.appendChild(header);

  let par = document.createElement('p');
  par.className = 'price ' + (counter+1);
  par.innerHTML = crypto[counter]['price'];
  container.appendChild(par);

  let graph = document.createElement('div');
  graph.className = 'graph ' + (counter+1);
  graph.style.width = (crypto[counter]['price'])*0.2 + 'px';
  graph.style.backgroundColor = randColor();
  container.appendChild(graph);

  counter++
}
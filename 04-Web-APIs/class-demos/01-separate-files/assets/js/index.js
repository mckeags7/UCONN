var animalListEl = document.querySelector('#animal-list');

for (var i = 0; i < animals.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = animals[i].name + ' is a ' + animals[i].type + '.';
  animalListEl.appendChild(liEl);
}

// GETELEMENTBYCLASSNAME //
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[3].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
items[2].style.backgroundColor = 'green';


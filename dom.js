// GETELEMENTBYCLASSNAME //
var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
li[1].textContent = 'hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';



//gives error
//items.backgroundColor = '#f4f4f4';

for(var i=0;i < li.length; i++){
    li[1].style.backgroundColor ='#f4f4f4';
}

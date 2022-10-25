// changing the colors of table children with class name table 
let ctable = document.getElementsByClassName('table')[0];
ctable.firstElementChild.style.background = "purple";
ctable.firstElementChild.style.color = 'yellow'; 
ctable.lastElementChild.style.background = '#feb';
ctable.lastElementChild.style.color = 'purple';


// changing item style with ID attribute
let idTable = document.getElementById('secondRow');
idTable.style.background = 'gray';
idTable.style.color = 'whitesmoke'

// not a good practice but it also works in JS, this will    gives id element in console
// console.log(id1);

let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);
console.log(id1.matches(".class_name"));// checks weather the class with name exists in the id element or not , gives false as a result 
console.log(id1.matches(".box")); // class box is found in the element so gives true as a result 

console.log(sp1.closest(".box"));// "closest" checks for class or id in the element , if not found then it will go for its parent and so on ..... to search for its every ansestor 
console.log(sp1.closest("#sp1"));

console.log(sp1.contains(sp1));// return true or false if element contains the attribute or not 
console.log(id1.contains(sp1));
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


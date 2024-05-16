let sayHi = document.getElementById("sayHi");
let Name = document.getElementById("name");

sayHi.addEventListener('click',() =>{
    Text = prompt("Enter The Name ");
    Name.innerHTML = Text;
});




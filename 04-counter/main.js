let addButtonElement = document.getElementById('counterAdd')
let subButtonElement = document.getElementById('counterSub');
let counterDisplayElement = document.getElementById('counterDisplay');
let total = 0;


addButtonElement.addEventListener('click', () => {
    total += 1;
    counterDisplayElement.innerHTML =total;

});

subButtonElement.addEventListener('click', () => {
    total -=1;
    counterDisplayElement.textContent =total;

});


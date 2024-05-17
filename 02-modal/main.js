let openModal = document.getElementById('openModal');
let modalBox = document.getElementById('modal-container');

openModal.addEventListener('click', () => {
    modalBox.style.display = 'flex';
});

modalBox.addEventListener('click', () => {
    modalBox.style.display = 'none'; 

});

// NAO ESTAMOS USANDO PRA NADA
const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
});
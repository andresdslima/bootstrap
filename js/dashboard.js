const buttonDelete = document.querySelectorAll('.btnDelete');
const buttonRegister = document.querySelector('#btnRegister');
const product = document.querySelector('#product');
const price = document.querySelector('#price');
const quantity = document.querySelector('#quantity');

buttonRegister.onclick = event => {
  event.preventDefault();

  if (product.value && price.value && quantity.value) {
    product.value = '';
    price.value = '';
    quantity.value = '';

    toastr.success('New product registered!');
  };
};

buttonDelete.forEach(button => {
  button.onclick = event => {
    const buttonIcon = event.target.parentNode;
    const buttonParent = buttonIcon.parentNode;
    const buttonRow = buttonParent.parentNode;

    buttonRow.remove();
    toastr.error('Product deleted!');
  };
});
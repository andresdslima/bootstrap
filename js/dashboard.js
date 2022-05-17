const btnDelete = document.querySelectorAll('.btnDelete');
const btnRegister = document.querySelector('#btnRegister');
const product = document.querySelector('#product');
const price = document.querySelector('#price');
const quantity = document.querySelector('#quantity');

btnRegister.onclick = event => {
  event.preventDefault();

  if (product.value && price.value && quantity.value) {
    product.value = '';
    price.value = '';
    quantity.value = '';

    return toastr.success('Product registered!');
  };
};

btnDelete.forEach(button => {
  button.onclick = event => {
    const buttonParent = event.target.parentNode;
    const buttonRow = buttonParent.parentNode;
    buttonRow.remove();
    toastr.error('Product deleted!');
  };
});
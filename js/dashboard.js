const buttonDelete = document.querySelectorAll('.btnDelete');
const buttonRegister = document.querySelector('#btnRegister');
const product = document.querySelector('#product');
const price = document.querySelector('#price');
const quantity = document.querySelector('#quantity');
const tableBody = document.querySelector('#tableBody');

let id = 4;

buttonRegister.onclick = event => {
  event.preventDefault();

  if (product.value && price.value && quantity.value) {
    tableBody.insertAdjacentHTML('beforeend', `     
      <tr>
        <th scope="row">${id}</th>
        <td>${product.value}</td>
        <td>${price.value}</td>
        <td>${quantity.value}</td>
        <td>
          <button type="button" class="btn btn-danger">
            <i class="fa-solid fa-trash-can btnDelete"></i>
          </button>
        </td>
      </tr>
    `);

    product.value = '';
    price.value = '';
    quantity.value = '';

    toastr.success('New product registered!');
    return id++;
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
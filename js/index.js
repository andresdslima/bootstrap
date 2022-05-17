const btnLogin = document.getElementById('btnLogin');
const btnReset = document.getElementById('btnReset');
const email = document.getElementById('email');
const password = document.getElementById('password');

btnLogin.onclick = event => {
  event.preventDefault();

  if (email.value.includes('@') && password.value) {
    email.value = '';
    password.value = '';

    return toastr.success("You're logged in!");
  };
};
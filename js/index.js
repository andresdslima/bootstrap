const buttonLogin = document.getElementById('btnLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

buttonLogin.onclick = event => {
  event.preventDefault();

  if (email.value.includes('@') && password.value) {
    email.value = '';
    password.value = '';

    return toastr.success("You're logged in!");
  };
};
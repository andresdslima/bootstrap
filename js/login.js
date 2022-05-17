const alertLogin = document.getElementById('alertLogin');
const btnLogin = document.getElementById('btnLogin');
const btnReset = document.getElementById('btnReset');
const email = document.getElementById('email');
const password = document.getElementById('password');

btnLogin.onclick = event => {
  event.preventDefault();

  if (email.value.includes('@') && password.value && !alertLogin.innerHTML) {
    return alertLogin.insertAdjacentHTML('beforeend', `
      <div class="d-flex justify-content-between alert alert-info rounded-3 align-items-center" style='height: 40px' role="alert">
        <strong>You're logged in!</strong>
        <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `);
  };
};

btnReset.onclick = () => alertLogin.innerHTML = '';
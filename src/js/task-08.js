const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Bсі поля повинні бути заповнені!');
  }
  const userData = { Email: email.value, Password: password.value };
  console.log(userData);
  event.currentTarget.reset();
}

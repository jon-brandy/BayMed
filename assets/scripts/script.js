const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const users = [
  { name: 'Admin', email: 'admin@gmail.com', password: 'Superadmin1', dob: '1999-09-09', gender: 'male' },
  { name: 'User', email: 'user@gmail.com', password: 'Passw0rd', dob: '1995-05-15', gender: 'female' },
];

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

var error = document.getElementById('error-line');
error.innerHTML = '';

function validate(event) {
  event.preventDefault();

  var form = document.getElementById('form-regis');
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('password').value;
  var dob = document.getElementById('dob').value;
  var male = document.getElementById('male');
  var female = document.getElementById('female');

  var email_arr = email.split('@');
  var domain_mail = email_arr[1];

  var inputDate = new Date(dob);
  var today = new Date();

  var hasLowercase = false;
  var hasUppercase = false;
  var hasNumber = false;

  for (let i = 0; i < pass.length; i++) {
    if (pass[i] >= 'A' && pass[i] <= 'Z') {
      hasUppercase = true;
    } else if (pass[i] >= 'a' && pass[i] <= 'z') {
      hasLowercase = true;
    } else if (pass[i] >= '0' && pass[i] <= '9') {
      hasNumber = true;
    }
  }

  if (name == '') {
    error.innerHTML = 'Mohon untuk mengisi nama lengkap!';
  } else if (email == '') {
    error.innerHTML = 'Mohon untuk mengisi alamat surel anda!';
  } else if (domain_mail !== 'gmail.com') {
    error.innerHTML = 'Email harus berakhiran @gmail.com';
  } else if (pass == '') {
    error.innerHTML = 'Masukkan password Anda!';
  } else if (hasUppercase == false) {
    error.innerHTML = 'Password harus memiliki minimal satu huruf besar!';
  } else if (hasLowercase == false) {
    error.innerHTML = 'Password harus memiliki minimal satu huruf kecil!';
  } else if (hasNumber == false) {
    error.innerHTML = 'Password harus memiliki minimal satu angka!';
  } else if (pass.length < 8) {
    error.innerHTML = 'Password harus memiliki minimal delapan karakter!';
  } else if (dob == '') {
    error.innerHTML = 'Date of Birth must not be empty!';
  } else if (inputDate > today) {
    error.innerHTML = 'Date of Birth is invalid!';
  } else if (male.checked === false && female.checked === false) {
    error.innerHTML = 'Gender must not be empty!';
  } else {
    alert('Successful Register!');
    error.innerHTML = '';
    form.reset();
    window.location.href = './login.html';
  }
}

// JS for increase-decrease quantity
function increase() {
  var quantityInput = document.getElementById('quantity');
  var currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}

function decrease() {
  var quantityInput = document.getElementById('quantity');
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

function login(event) {
  event.preventDefault();
  var form = document.getElementById('LoginForm');
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;

  // Check if the username and password match
  const user = users.find((user) => user.email === email && user.password === pass);

  if (user) {
    alert('Login successful. Welcome, ' + user.name + '!');
    window.location.href = './medicines.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

'use strict';

// Data
const account1 = {
  owner: 'David Singer',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: 'Marek Singer',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: 'Krystyna Singer',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333
};

const account4 = {
  owner: 'Arad von Kiefersfelden',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};

const accounts = [account1, account2, account3, account4];

// create userName
accounts.forEach((acc, i) => {
  const firstInitial = acc.owner.toLowerCase().split(' ')[0][0];
  const secondInitial = acc.owner.toLowerCase().split(' ')[1][0];
  acc.userName = firstInitial.concat(secondInitial);
});

let curAccunt;

// Login
const loginBtn = document.getElementById('login--btn');
const user = document.getElementById('login--user');
const userPIN = document.getElementById('login--pin');

const account = document.getElementsByClassName('account')[0];

function loginUser() {
  accounts.forEach(acc => {
    if (user.value === acc.userName && Number(userPIN.value) === acc.pin) {
      curAccunt = acc;
      console.log(curAccunt);
      account.classList.add('active');
      displayMovements(curAccunt.movements);
    }
  });
}

// Movements
function displayMovements(acc) {
  console.log(acc);

  acc.forEach((mov, i) => {
    console.log(mov);
    let type = mov > 0 ? 'deposit' : 'withdrawal';
    document.getElementById('movements-main-left').insertAdjacentHTML(
      'afterbegin',
      `<div class="movement">
              <div class="movement--left">
                  <span class="movement--type--${type}">${i + 1} ${type}</span>
                  <span>28/01/2022</span>
              </div >
              <div class="momvement--right">
                  <span>${mov} €</span>
              </div>
          </div>`
    );
  });
}

loginBtn.addEventListener('click', function(e) {
  e.preventDefault();
  loginUser();
  user.value = '';
  userPIN.value = '';
});

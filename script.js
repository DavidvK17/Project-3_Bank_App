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
accounts.map((acc, i) => {
  const firstInitial = acc.owner.toLowerCase().split(' ')[0][0];
  const secondInitial = acc.owner.toLowerCase().split(' ')[1][0];
  acc.userName = firstInitial.concat(secondInitial);
  console.log(acc);
});

// Login
const loginBtn = document.getElementById('login--btn');
const user = document.getElementById('login--user');
const userPIN = document.getElementById('login--pin');

const movements = document.getElementsByClassName('movements')[0];
console.log(movements);

loginBtn.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(user.value, userPIN.value);
  if (
    user.value === account1.userName &&
    Number(userPIN.value) === account1.pin
  ) {
    movements.classList.add('active');
  } else {
    console.log('wrong input');
  }
});

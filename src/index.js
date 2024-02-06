import "./styles/index.scss";
import "regenerator-runtime/runtime";
// import { sayHi, sayBye } from './about.js';

// console.log('hello webpack!');
// console.log('hello webpack1!');

// sayHi('John'); // Hello, John!
// sayBye('Ammi'); // Bye, John!

const title = document.querySelector('.title');
console.log(title);

const button = document.querySelector('.user');
const form = document.querySelector('#user_login');
const popup = document.querySelector('.popup_user');

button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
});

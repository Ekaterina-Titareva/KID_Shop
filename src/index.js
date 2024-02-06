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
const buttonBasket = document.querySelector('#basket');
const buttonClose = document.querySelector('.btn-close');
const popupBasket = document.querySelector('.popup-basket');

button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
});

buttonBasket.addEventListener('click', () => {
  if (popupBasket.classList.contains('hidden')){
    popupBasket.classList.remove('hidden');
    popupBasket.classList.add('visible');
  }
})

buttonClose.addEventListener('click', () => {
  if (popupBasket.classList.contains('visible')){
    popupBasket.classList.remove('visible');
    popupBasket.classList.add('hidden');
  }
})

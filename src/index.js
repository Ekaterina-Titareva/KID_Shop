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

// Открытие/закрытие popup с корзиной

buttonBasket.addEventListener('click', () => {
  let headerHeight = document.querySelector('.header').clientHeight;
  
  if (popupBasket.classList.contains('hidden')){
    popupBasket.classList.remove('hidden');
    popupBasket.classList.add('visible');

    popupBasket.style.top = `${headerHeight}px`;
  } else {
    popupBasket.classList.add('hidden');
    popupBasket.classList.remove('visible');
  }
})

buttonClose.addEventListener('click', () => {
  if (popupBasket.classList.contains('visible')){
    popupBasket.classList.remove('visible');
    popupBasket.classList.add('hidden');
  }
})

console.log(document.querySelector('.header').clientHeight);

// Слайдер
// Список изображений и текущий индекс
const images = [
  require('./images/advert1.jpg'),
  require('./images/advert2.jpg'),
  require('./images/advert3.jpg'),
];

let currentImageIndex = 0;
const imageElement = document.getElementById("ad");

// Функция для отображения текущего изображения
function displayCurrentImage() {
	imageElement.src = images[currentImageIndex];
}
const prevButton = document.querySelector(".pre-btn");

// Обработчик события для кнопки "Назад"
prevButton.addEventListener("click", function() {
	currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
	displayCurrentImage();
});
const nextButton = document.querySelector(".nxt-btn");

// Обработчик события для кнопки "Вперед"
nextButton.addEventListener("click", function() {
	currentImageIndex = (currentImageIndex + 1) % images.length;
	displayCurrentImage();
});

// Отображаем первое изображение при загрузке страницы
displayCurrentImage();
import { has } from "lodash";
import "./styles/index.scss";


const catalogJson = [
  {
    "id": 1,
    "category": "Футболки",
    "name": "Футболка с принтом",
    "description": "Футболка из мягкого хлопчатобумажного джерси с принтом, отделкой в рубчик по вырезу и застежкой-молнией на одном плече. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Розовый",
    "age_group": "1-4",
    "gender": "Девочка",
    "price": "299",
    "material": "Хлопок"
  },
  {
    "id": 2,
    "category": "Футболки",
    "name": "Футболка с принтом",
    "description": "Классическая футболка из мягкого хлопкового джерси с принтом и обратимыми пайетками спереди. Отделка в рубчик вокруг выреза и низ прямого кроя. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Белый",
    "age_group": "5-8",
    "gender": "Девочка",
    "price": "799",
    "material": "Хлопок"
  },
  {
    "id": 3,
    "category": "Футболки",
    "name": "Футболка оверсайз с принтом",
    "description": "Футболка оверсайз из мягкого трикотажа с принтом, с отделкой в рубчик вокруг выреза, заниженными плечами и широкими рукавами. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Фиолетовый",
    "age_group": "9-14",
    "gender": "Девочка",
    "price": "799",
    "material": "Хлопок"
  },
  {
    "id": 4,
    "category": "Футболки",
    "name": "Футболка",
    "description": "Футболка с коротким рукавом из мягкого хлопкового трикотажа. Свободный крой со слегка заниженными плечами. Застежка на кнопки на левом плече для удобства одевания. Разрезы в боковых швах. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Синий",
    "age_group": "1-4",
    "gender": "Мальчик",
    "price": "1000",
    "material": "Хлопок"
  },
  {
    "id": 5,
    "category": "Футболки",
    "name": "Футболка с принтом",
    "description": "Футболка свободного кроя из мягкого хлопкового джерси с принтом. Отделка в рубчик вокруг выреза и спущенных плеч. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Серый",
    "age_group": "5-8",
    "gender": "Мальчик",
    "price": "799",
    "material": "Хлопок"
  },
  {
    "id": 6,
    "category": "Футболки",
    "name": "Футболка с принтом",
    "description": "Классическая футболка из мягкого хлопчатобумажного джерси с принтом и отделкой в рубчик по вырезу. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Бежевый",
    "age_group": "9-14",
    "gender": "Мальчик",
    "price": "299",
    "material": "Хлопок"
  },
  {
    "id": 7,
    "category": "Джемперы и кардиганы",
    "name": "Джемпер",
    "description": "Джемпер с длинными рукавами из мягкого хлопчатобумажного трикотажа с пуговицами на одном плече и отделкой в рубчик по вырезу, манжетам и низу. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Бежевый",
    "age_group": "1-4",
    "gender": "Девочка",
    "price": "899",
    "material": "Хлопок"
  },
  {
    "id": 8,
    "category": "Джемперы и кардиганы",
    "name": "Кардиган из трикотажа 'Пуантель'",
    "description": "Кардиган с длинными рукавами из мягкого трикотажа 'пуантель' с фестончатыми краями, пуговицами спереди и накладными прорезными карманами спереди. Отделка в рубчик по вырезу, по ленте на пуговицах, а также на манжетах и подоле. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Белый",
    "age_group": "5-8",
    "gender": "Девочка",
    "price": "1499",
    "material": "Хлопок"
  },
  {
    "id": 9,
    "category": "Джемперы и кардиганы",
    "name": "Джемпер",
    "description": "Джемпер из мягкого тонкого трикотажа с круглым вырезом горловины, длинными рукавами и отделкой в рубчик на манжетах и подоле. Акрил 100%.",
    "image": "require('./images/check.png')",
    "color": "Черный",
    "age_group": "9-14",
    "gender": "Девочка",
    "price": "999",
    "material": "Акрил"
  },
  {
    "id": 10,
    "category": "Джемперы и кардиганы",
    "name": "Джемпер",
    "description": "Джемпер из мягкого хлопкового трикотажа с пуговицами на одном плече. Спущенные плечи, длинные рукава, отделка в рубчик по вырезу, манжетам и низу. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Зеленый",
    "age_group": "1-4",
    "gender": "Мальчик",
    "price": "899",
    "material": "Хлопок"
  },
  {
    "id": 11,
    "category": "Джемперы и кардиганы",
    "name": "Хлопковый джемпер",
    "description": "Джемпер из мягкого хлопка тонкой вязки с круглым вырезом, отделанным рубчиками, длинными рукавами и отделкой в рубчик на манжетах и подоле. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Белый",
    "age_group": "5-8",
    "gender": "Мальчик",
    "price": "799",
    "material": "Хлопок"
  },
  {
    "id": 12,
    "category": "Джемперы и кардиганы",
    "name": "Джемпер свободного кроя",
    "description": "Джемпер свободного кроя из мягкого хлопка однотонной вязки со спущенными плечами, длинными рукавами и отделкой в рубчик по вырезу, манжетам и подолу. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Синий",
    "age_group": "9-14",
    "gender": "Мальчик",
    "price": "1799",
    "material": "Хлопок"
  },
  {
    "id": 13,
    "category": "Брюки и джинсы",
    "name": "Леггинсы",
    "description": "Леггинсы из плотного хлопкового трикотажа с мягким начесом внутри. Мягкая регулируемая резинка на талии обеспечивает удобную посадку на животе. Хлопок 95%, эластан 5%.",
    "image": "require('./images/check.png')",
    "color": "Бежевый",
    "age_group": "1-4",
    "gender": "Девочка",
    "price": "399",
    "material": [
      "Хлопок",
      "Эластан"
    ]
  },
  {
    "id": 14,
    "category": "Брюки и джинсы",
    "name": "Суперэластичные джинсы с широкими штанинами",
    "description": "Джинсы из суперэластичного денима для максимальной гибкости с приталенной посадкой на бедрах. Регулируемая резинка на талии, ширинка на молнии с пуговицей и широкие штанины. Хлопок 35%, полиэстер 65%.",
    "image": "require('./images/check.png')",
    "color": "Синий",
    "age_group": "5-8",
    "gender": "Девочка",
    "price": "1499",
    "material": [
      "Хлопок",
      "Полиэстер"
    ]
  },
  {
    "id": 15,
    "category": "Брюки и джинсы",
    "name": "Широкие брюки",
    "description": "Брюки свободного кроя из плотного трикотажа, напоминающего деним, с мягкой эластичной вставкой на талии и накладной ширинкой. Накладные карманы спереди, настоящие карманы сзади и широкие штанины. Хлопок 73%, полиэстер 19%, эластан 8%.",
    "image": "require('./images/check.png')",
    "color": "Черный",
    "age_group": "9-14",
    "gender": "Девочка",
    "price": "1499",
    "material": [
      "Хлопок",
      "Полиэстер",
      "Эластан"
    ]
  },
  {
    "id": 16,
    "category": "Брюки и джинсы",
    "name": "Джоггеры",
    "description": "Джоггеры из легкой хлопчатобумажной ткани с потайной резинкой и завязками на талии, а также потайной резинкой по краям. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Серый",
    "age_group": "1-4",
    "gender": "Мальчик",
    "price": "599",
    "material": "Хлопок"
  },
  {
    "id": 17,
    "category": "Брюки и джинсы",
    "name": "Брюки-карго из саржи",
    "description": "Брюки-карго из хлопчатобумажной саржи с прямыми штанинами. Талия на резинке с завязками, накладная ширинка, незаметные боковые карманы и карманы на штанинах с клапанами. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Черный",
    "age_group": "5-8",
    "gender": "Мальчик",
    "price": "899",
    "material": "Хлопок"
  },
  {
    "id": 18,
    "category": "Брюки и джинсы",
    "name": "Джоггеры",
    "description": "Джоггеры из хлопчатобумажной ткани с эластичной талией на завязках, искусственной ширинкой, диагональными боковыми карманами и открытым задним карманом. Свободный крой со складками на коленях и потайной резинкой по краям. Хлопок 98%, эластан 2%.",
    "image": "require('./images/check.png')",
    "color": "Бежевый",
    "age_group": "9-14",
    "gender": "Мальчик",
    "price": "999",
    "material": [
      "Хлопок",
      "Эластан"
    ]
  },
  {
    "id": 19,
    "category": "Куртки",
    "name": "Хлопчатобумажная куртка с покрытием",
    "description": "Куртка из хлопчатобумажной ткани с покрытием, со съемным капюшоном, воротником-стойкой, застежкой на молнию спереди с защитой подбородка и кокеткой сзади. Передние карманы с клапанами на кнопках и рукава реглан с потайной резинкой на манжетах. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Розовый",
    "age_group": "1-4",
    "gender": "Девочка",
    "price": "1799",
    "material": "Хлопок"
  },
  {
    "id": 20,
    "category": "Куртки",
    "name": "Ветровка с принтом",
    "description": "Ветровка из ткани с принтом. Съемный капюшон, воротник-стойка и застежка-молния спереди с защитой подбородка от натирания. Карманы в боковых швах и узкая резинка на манжетах и подоле. Полиэстер 100%.",
    "image": "require('./images/check.png')",
    "color": "Розовый",
    "age_group": "5-8",
    "gender": "Девочка",
    "price": "1799",
    "material": "Полиэстер"
  },
  {
    "id": 21,
    "category": "Куртки",
    "name": "Бейсбольная куртка с аппликацией",
    "description": "Короткая бейсбольная куртка из тканого материала с аппликациями. Воротник-стойка в рубчик, пуговицы спереди и прорезные боковые карманы. Заниженные плечи, длинные рукава и отделка в рубчик на манжетах и подоле. Полиэстер 100%.",
    "image": "require('./images/check.png')",
    "color": "Красный",
    "age_group": "9-14",
    "gender": "Девочка",
    "price": "2999",
    "material": "Полиэстер"
  },
  {
    "id": 22,
    "category": "Куртки",
    "name": "Нейлоновая куртка",
    "description": "Нейлоновая куртка с легкой подкладкой, рубашечным воротником и застежкой на пуговицы. С манжетами в рубчик и обычной посадкой. Полиэстер 100%.",
    "image": "require('./images/check.png')",
    "color": "Черный",
    "age_group": "1-4",
    "gender": "Мальчик",
    "price": "4200",
    "material": "Полиэстер"
  },
  {
    "id": 23,
    "category": "Куртки",
    "name": "Ветровка с принтом",
    "description": "Ветровка из набивной ткани со съемным капюшоном, воротником-стойкой и застежкой-молнией спереди с защитой подбородка от натирания. Слегка заниженные плечи и диагональные прорезные карманы спереди. Без подкладки. Полиэстер 100%.",
    "image": "require('./images/check.png')",
    "color": "Синий",
    "age_group": "5-8",
    "gender": "Мальчик",
    "price": "1799",
    "material": "Полиэстер"
  },
  {
    "id": 24,
    "category": "Куртки",
    "name": "Куртка из ворса с воротником-стойкой",
    "description": "Куртка из мягкого пушистого ворса с нагрудным карманом на молнии из тканого материала. Воротник-стойка, застежка-молния спереди с защитой подбородка от натирания, прорезные карманы спереди и узкая трикотажная отделка на манжетах и подоле. Полиэстер 100%.",
    "image": "require('./images/check.png')",
    "color": "Бежевый",
    "age_group": "9-14",
    "gender": "Мальчик",
    "price": "1499",
    "material": "Полиэстер"
  },
  {
    "id": 25,
    "category": "Обувь",
    "name": "Балетные туфли-лодочки с аппликацией",
    "description": "Балетные туфли-лодочки с эластичным ремешком и аппликацией на стопе. Атласная подкладка и стельки из технической пены Cellfit для дополнительного комфорта. Подошва с рисунком. Высота подошвы 0,4 см. Полиэстер 100%.",
    "image": "require('./images/check.png')",
    "color": "Красный",
    "age_group": "1-4",
    "gender": "Девочка",
    "price": "999",
    "material": "Полиэстер"
  },
  {
    "id": 26,
    "category": "Обувь",
    "name": "Блестящие балетные туфли-лодочки",
    "description": "Блестящие балетные туфли-лодочки с эластичным ремешком на ноге и петлей в крупный рубчик сзади. Атласная подкладка и стельки с принтом из технической пены Cellfit для дополнительного комфорта. Рифленая подошва. Полиэстер 100%.",
    "image": "require('./images/check.png')",
    "color": "Фиолетовый",
    "age_group": "5-8",
    "gender": "Девочка",
    "price": "1299",
    "material": "Полиэстер"
  },
  {
    "id": 27,
    "category": "Обувь",
    "name": "Балетные туфли-лодочки",
    "description": "Балетные туфли-лодочки с эластичным ремешком на ноге. Атласная подкладка и стельки из технической пены Cellfit для дополнительного комфорта. Рифленая подошва. Высота подошвы 0,8 см. Полиэстер 100%.",
    "image": "require('./images/check.png')",
    "color": "Черный",
    "age_group": "9-14",
    "gender": "Девочка",
    "price": "1499",
    "material": "Полиэстер"
  },
  {
    "id": 28,
    "category": "Обувь",
    "name": "Кроссовки из парусины",
    "description": "Кроссовки из хлопчатобумажной ткани с застежками-крючками спереди и петлей сзади. Подкладка и стельки из парусины и резиновая подошва с рисунком. Высота подошвы 2,1 см. Хлопок 100%.",
    "image": "require('./images/check.png')",
    "color": "Синий",
    "age_group": "1-4",
    "gender": "Мальчик",
    "price": "999",
    "material": "Хлопок"
  },
  {
    "id": 29,
    "category": "Обувь",
    "name": "Мигающие кроссовки",
    "description": "Кроссовки с мягким верхним краем, застежкой на крючок спереди и петлей в крупный рубчик сзади. Подкладка из сетки и стельки из технической пены Cellfit для дополнительного комфорта. Подошва с активируемыми при движении мигающими светодиодными лампочками. Высота подошвы 2,5 см. Полиэстер 100%.",
    "image": "require('./images/check.png')",
    "color": "Красный",
    "age_group": "5-8",
    "gender": "Мальчик",
    "price": "2499",
    "material": "Полиэстер"
  },
  {
    "id": 30,
    "category": "Обувь",
    "name": "Кроссовки",
    "description": "Кроссовки с мягким краем и язычком, шнуровкой спереди и петлей в крупный рубчик сзади. Сетчатые подкладки и стельки из технической пены Cellfit для дополнительного комфорта. Подошва с рисунком. Высота подошвы 3,1 см. Полиэстер 100%.",
    "image": "require('./images/check.png')",
    "color": "Зеленый",
    "age_group": "9-14",
    "gender": "Мальчик",
    "price": "2499",
    "material": "Полиэстер"
  }
];


// Форма
const userBtn = document.querySelector('.user');
const formLogin = document.querySelector('#user_login');
const popupLogin = document.querySelector('.popup_user');
const buttonBasket = document.querySelector('#basket');
const buttonClose = document.querySelector('.btn-close');
const popupBasket = document.querySelector('.popup-basket');

userBtn.addEventListener('click', () => {
  formLogin.classList.add('open');
  popupLogin.classList.add('popup_open');
});

//Форма регистарции
const registr = document.querySelector('.registr');
const popupReg = document.querySelector('.popup_user_registr');
const formReg = document.querySelector('#user_registr');

registr.addEventListener('click',()=>{
  formReg.classList.add('open');
  popupReg.classList.add('popup_open');
  popupLogin.classList.remove('popup_open');
  formLogin.classList.remove('open');

});
// Кнопки закрытия
document.querySelector('.close').addEventListener('click', ()=>{
  document.querySelector('.popup_user').style.display = 'none';
});

document.querySelector('.close_reg').addEventListener('click',()=>{
  document.querySelector('.popup_user_registr').style.display = 'none';
});

//Валидация формы входа
const formLog = document.forms.formLogin;

formLog.addEventListener('submit', function(evt){
  evt.preventDefault();
  let hasError = false;
  const emailRegexLogin = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const login = formLog.elements.login;
  const password = formLog.elements.password;
  const agree = formLog.elements.agree;

  if(emailRegexLogin.test(login.value)=== false){
    document.getElementById('error_login').textContent = 'Неверный логин';
    hasError = true;
   
  }
  if(password.value === ''){
    document.getElementById('error_password').textContent = 'Неверный пароль';
    hasError = true;
    
  }
  if(!agree.checked){
    document.getElementById('check_login').textContent = 'Необходимо согласие с условиями';
    hasError = true;
  }

  if(hasError === false){
    formLog.reset();
    alert('Добро пожаловать!');
  }
 
})


//Валидация формы регистрации

const checkFormReg = document.forms.formRegistration;


checkFormReg.addEventListener('submit', function(evt){
evt.preventDefault();
let hasError = false;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const userName = checkFormReg.elements.regname;
const userSurname = checkFormReg.elements.surname;
const userEmail = checkFormReg.elements.email;
const userPassOne = checkFormReg.elements.password;
const userPassTwo = checkFormReg.elements.passcheck;
const agree = checkFormReg.elements.agree;

if(userName.value === ' '){
  document.getElementById('name_error').textContent = 'Введите имя';
  hasError = true;
}
if(userSurname.value === ' '){
  document.getElementById('surname_error').textContent = 'Введите фамилию';
  hasError =true;
}
if(emailRegex.test(userEmail.value)=== false){
  document.getElementById('emailreg_error').textContent = 'Некорректная почта';
  hasError = true;
}
if(userEmail.value === ''){
  document.getElementById('emailreg_error').textContent = 'Введите почту';
  hasError = true;
}

if(userPassOne.value === ''|| userPassOne.length<8){
  document.getElementById('password_error').textContent = 'Придумайте пароль минимум 8 символов';
  hasError = true;
}
if(userPassTwo.value !== userPassOne.value || userPassTwo.value == ''){
  document.getElementById('checkpass_error').textContent = 'Пароль не совпадает';
  hasError = true;
}
if(!agree.checked){
  document.getElementById('check_reg').textContent = 'Необходимо согласие с условиями';
  hasError = true;
}
if(hasError === false){
  document.querySelectorAll('.error').textContent = ' ';
  checkFormReg.reset();
  document.getElementById('success').textContent = 'Вы успешно зарегистрировались!';
 
}

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




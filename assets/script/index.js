//Здесь код, который используется на всех страницах (header): форма, корзина, избранное pop up

const catalogJson = await fetch("./assets/catalog.json")
  .then(response => {
    if (!response.ok) {
        throw new Error('Сервер недоступен');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Ошибка:', error);
  })

//Бургер меню
document.getElementById("burger").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("open");
  document.body.classList.toggle("noscroll");
});
const links = Array.from(document.querySelector(".menu__items").children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
  document.querySelector(".header").classList.remove("open");
  document.body.classList.remove("noscroll");
}

// Форма
const userBtn = document.querySelector(".user");
const formLogin = document.querySelector("#user_login");
const popupLogin = document.querySelector(".popup_user");

userBtn.addEventListener("click", () => {
  formLogin.classList.add("open");
  popupLogin.classList.add("popup_open");
});

//Форма регистарции
const registr = document.querySelector(".registr");
const popupReg = document.querySelector(".popup_user_registr");
const formReg = document.querySelector("#user_registr");

registr.addEventListener("click", () => {
  formReg.classList.add("open");
  popupReg.classList.add("popup_open");
  popupLogin.classList.remove("popup_open");
  formLogin.classList.remove("open");
});
// Кнопки закрытия
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".popup_user").classList.remove("popup_open");
});

document.querySelector(".close_reg").addEventListener("click", () => {
  document.querySelector(".popup_user_registr").classList.remove("popup_open");
});

//Валидация формы входа
const formLog = document.forms.formLogin;

formLog.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let hasError = false;
  const emailRegexLogin = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const login = formLog.elements.login;
  const password = formLog.elements.password;
  const agree = formLog.elements.agree;

  if (emailRegexLogin.test(login.value) === false) {
    document.getElementById("error_login").textContent = "Неверный логин";
    hasError = true;
  }
  if (password.value === "") {
    document.getElementById("error_password").textContent = "Неверный пароль";
    hasError = true;
  }
  if (!agree.checked) {
    document.getElementById("check_login").textContent =
      "Необходимо согласие с условиями";
    hasError = true;
  }

  if (hasError === false) {
    formLog.reset();
    alert("Добро пожаловать!");
  }
});

//Валидация формы регистрации

const checkFormReg = document.forms.formRegistration;

checkFormReg.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let hasError = false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const userName = checkFormReg.elements.regname;
  const userSurname = checkFormReg.elements.surname;
  const userEmail = checkFormReg.elements.email;
  const userPassOne = checkFormReg.elements.password;
  const userPassTwo = checkFormReg.elements.passcheck;
  const agree = checkFormReg.elements.agree;

  if (userName.value === " ") {
    document.getElementById("name_error").textContent = "Введите имя";
    hasError = true;
  }
  if (userSurname.value === " ") {
    document.getElementById("surname_error").textContent = "Введите фамилию";
    hasError = true;
  }
  if (emailRegex.test(userEmail.value) === false) {
    document.getElementById("emailreg_error").textContent =
      "Некорректная почта";
    hasError = true;
  }
  if (userEmail.value === "") {
    document.getElementById("emailreg_error").textContent = "Введите почту";
    hasError = true;
  }

  if (userPassOne.value === "" || userPassOne.length < 8) {
    document.getElementById("password_error").textContent =
      "Придумайте пароль минимум 8 символов";
    hasError = true;
  }
  if (userPassTwo.value !== userPassOne.value || userPassTwo.value == "") {
    document.getElementById("checkpass_error").textContent =
      "Пароль не совпадает";
    hasError = true;
  }
  if (!agree.checked) {
    document.getElementById("check_reg").textContent =
      "Необходимо согласие с условиями";
    hasError = true;
  }
  if (hasError === false) {
    document.querySelectorAll(".error").textContent = " ";
    checkFormReg.reset();
    document.getElementById("success").textContent =
      "Вы успешно зарегистрировались!";
  }
});

//КОРЗИНА

// Открытие/закрытие popup с корзиной
const buttonBasket = document.querySelector("#basket");
const buttonClose = document.querySelector(".btn-close");
const popupBasketMainPage = document.querySelector(".popup-basket");

if (popupBasketMainPage) {
  buttonBasket.addEventListener("click", () => {
    if (popupBasketMainPage.classList.contains("hidden")) {
      popupBasketMainPage.classList.remove("hidden");
      popupBasketMainPage.classList.add("visible");
    } else {
      popupBasketMainPage.classList.add("hidden");
      popupBasketMainPage.classList.remove("visible");
    }
  });

  buttonClose.addEventListener("click", () => {
    if (popupBasketMainPage.classList.contains("visible")) {
      popupBasketMainPage.classList.remove("visible");
      popupBasketMainPage.classList.add("hidden");
    }
  });
}

export { catalogJson };

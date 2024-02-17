import { catalogJson } from "./index.js";
import { makeMiniBasketItem } from "./functions.js";
import { favourites, updateFavouritesContainer } from "./favourites.js";

// Каталог

let catalogContent = "";

function createCatalog() {
  // let clothes = JSON.parse(catalogJson);
  let clothes = catalogJson;
  for (let item of clothes) {
    createCard(item);
  }
  document.querySelector(".catalog__container").innerHTML = catalogContent;
}

createCatalog();

function createCard(item) {
  catalogContent += `
    <div class="catalog__item" value="${item.id}">
      <div class="add-favorites">
        <input type="image" src="./assets/icons/favourites.svg" alt="избранное" class="favourites-heart">
      </div>
      <p class= "item__name">${item.name}</p>
      <p class= "item__category">${item.category}</p>      
      <p class= "item__price">Цена: ${item.price} рублей</p>
      <div class= "item__img">
        <img src="${item.image1}" alt="${item.name}" class="item__img-card"/>
      </div>
      <p class= "item__age">Возраст: ${item.age_group}</p>
      <p class= "item__gender">Пол: ${item.gender}</p>
      <p class= "item__color">Цвет: ${item.color}</p>
      <p class= "item__material">Материал: ${item.material}</p>
      <p class= "item__description">${item.description}</p>
      <button class="add-button">Добавить в корзину</button>
    </div>`;
  return catalogContent;
}

//СПОЙЛЕР
const spoilers = document.querySelectorAll(".filter__item_subtitle");

spoilers.forEach((spoiler) => {
  spoiler.addEventListener("click", function addVisible() {
    spoiler.parentElement.classList.toggle("_visible");
    spoiler.lastElementChild.classList.toggle("_minus");
  });
});

// Фильтр
// let catalogObject = JSON.parse(catalogJson);
let catalogObject = catalogJson;

const filters = document.querySelector("#filters");

filters.addEventListener("change", filterClothes);

function filterClothes() {
  const buttons = document.querySelectorAll(".add-button");
  const favButtons = document.querySelectorAll(".favourites-heart");

  const age = [...filters.querySelectorAll("#age input:checked")].map(
    (n) => n.value
  );
  let costMin = Number(document.querySelector("#pricemin").value);
  let costMax = Number(document.querySelector("#pricemax").value);
  const category = filters.querySelector("#category").value;
  const gender = [...filters.querySelectorAll("#gender input:checked")].map(
    (n) => n.value
  );

  const filteredCatalog = catalogObject.filter(
    (n) =>
      (!age.length || age.includes(n.age_group)) &&
      (!category || n.category.includes(category)) &&
      (!gender.length || gender.includes(n.gender)) &&
      (!costMin || costMin <= n.price) &&
      (!costMax || costMax >= n.price)
  );

  outputCatalog(filteredCatalog);
  // addFavouritesListeners();
}

// Бегунок стоимости
const lowestPrice = Math.min(...catalogObject.map((exc) => exc.priceadult));
const highestPrice = Math.max(...catalogObject.map((exc) => exc.priceadult));

const rangeInput = document.querySelectorAll(".filter__price_range input");
rangeInput[0].value = lowestPrice;
rangeInput[1].value = highestPrice;
const priceInput = document.querySelectorAll(".filter__price_inputs input");
const range = document.querySelector(".filter-slider-track");
let priceGap = 300;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

//Очистить фильтр
document.querySelector(".sidebar__reset").addEventListener("click", () => {
  filters.querySelector("#category").value = "";
  priceInput[0].value = lowestPrice;
  priceInput[1].value = highestPrice;
  rangeInput[0].value = lowestPrice;
  rangeInput[1].value = highestPrice;
  range.style.left = "50%";
  range.style.right = "50%";

  let inputs = document.querySelectorAll("input");

  for (const input of inputs) {
    if (input.type == "checkbox" || input.type == "radio")
      input.checked = false;
  }

  filterClothes();
});

function outputCatalog(clothes) {
  document.querySelector(".catalog__container").innerHTML = clothes
    .map(
      (item) => `
      <div class="catalog__item" value="${item.id}">
      <div class="add-favorites">
        <input type="image" src="./assets/icons/favourites.svg" alt="избранное" class="favourites-heart">
      </div>
      <p class= "item__name">${item.name}</p>
      <p class= "item__category">${item.category}</p>      
      <p class= "item__price">Цена: ${item.price} рублей</p>
      <div class= "item__img ">
        <img src="${item.image1}" alt="${item.name}" />
      </div>
      <p class= "item__age">Возраст: ${item.age_group}</p>
      <p class= "item__gender">Пол: ${item.gender}</p>
      <p class= "item__color">Цвет: ${item.color}</p>
      <p class= "item__material">Материал: ${item.material}</p>
      <p class= "item__description">${item.description}</p>
      <button class="add-button">Добавить в корзину</button>
    </div>`
    )
    .join("");
}

//КОРЗИНА

// Открытие/закрытие popup с корзиной
const buttonBasket = document.querySelector("#basket");
const buttonClose = document.querySelector(".btn-close");
const popupBasketCatalog = document.querySelector(".popup-basket-catalog");

if (popupBasketCatalog) {
  buttonBasket.addEventListener("click", () => {
    if (popupBasketCatalog.classList.contains("hidden")) {
      popupBasketCatalog.classList.remove("hidden");
      popupBasketCatalog.classList.add("visible");
    } else {
      popupBasketCatalog.classList.add("hidden");
      popupBasketCatalog.classList.remove("visible");
    }
  });

  buttonClose.addEventListener("click", () => {
    if (popupBasketCatalog.classList.contains("visible")) {
      popupBasketCatalog.classList.remove("visible");
      popupBasketCatalog.classList.add("hidden");
    }
  });
}

// Добавление товаров в корзину
const buttons = document.querySelectorAll(".add-button");

function addToBasket(event, count) {
  let addToBasketItem = event.target.closest("div");
  let index = addToBasketItem.getAttribute("value");
  let key = `в корзину ${index}`;

  if (!window.localStorage.getItem(key)) {
    window.localStorage.setItem(key, JSON.stringify(catalogJson[index - 1]));
    makeMiniBasketItem(JSON.parse(window.localStorage.getItem(key)));
  } else {
    let catalogItem = document
      .querySelector(".popup-basket__list-catalog")
      .querySelector(`[value="${index}"]`);
    let value = parseInt(
      catalogItem.querySelector("input").getAttribute("value")
    );

    value += count;
    catalogItem.querySelector("input").setAttribute("value", value);
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    const count = 1;
    addToBasket(event, count);
  })
);

// Добавление товаров после фильтрации
filters.addEventListener("change", () => {
  const buttons = document.querySelectorAll(".add-button");
  buttons.forEach((button) => button.addEventListener("click", addToBasket));
});

//Для отрисовки товаров в корзине после перезагрузки страницы
for (let i = 0; i < catalogJson.length; i++) {
  let key = `в корзину ${catalogJson[i].id}`;

  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem(key)) {
      makeMiniBasketItem(JSON.parse(window.localStorage.getItem(key)));
    }
  });
}



// анимация картинок в карточках

const sliderPic = document.querySelectorAll(".item__img-card");

sliderPic.forEach((image, index) => {
  image.addEventListener("mouseover", () => {
    image.style.opacity = 0;
    setTimeout(() => {
      image.src = catalogJson[index].image2;
      image.style.opacity = 0.9;
    }, 100);
  });

  image.addEventListener("mouseout", () => {
    image.style.opacity = 0;
    setTimeout(() => {
      image.src = catalogJson[index].image1;
      image.style.opacity = 0.9;
    }, 100);
  });
});




// Добавление товаров в избранное
const favButtons = document.querySelectorAll(".favourites-heart");

function addToFav(event, count) {
  let addToFavItem = event.target.closest(".catalog__item");
  let index = addToFavItem.getAttribute("value");
  let favKey = `в избранное ${index}`;

  if (!window.localStorage.getItem(favKey)) {
    window.localStorage.setItem(favKey, JSON.stringify(catalogJson[index - 1]));
    updateFavouritesContainer(JSON.parse(window.localStorage.getItem(favKey)));
  } else {
    let catalogItem = document
      .querySelector(".favourites-container")
      .querySelector(`[value="${index}"]`);
    let value = parseInt(
      catalogItem.querySelector("input").getAttribute("value")
    );

    value += count;
    catalogItem.querySelector("input").setAttribute("value", value);
  }
}

favButtons.forEach((button) =>
  button.addEventListener("click", (event) => {
    const count = 1;
    addToFav(event, count);
    console.log("Добавление в избранное")
  })
);

// Добавление товаров после фильтрации
filters.addEventListener("change", () => {
  const favButtons = document.querySelectorAll(".favourites-heart");
  favButtons.forEach((button) => button.addEventListener("click", addToFav));
});

//Для отрисовки товаров в избранном после перезагрузки страницы
for (let i = 0; i < catalogJson.length; i++) {
  let favKey = `в избранное ${catalogJson[i].id}`;

    if (localStorage.getItem(favKey)) {
      let product = JSON.parse(localStorage.getItem(favKey));
      favourites.push(product);
      updateFavouritesContainer(favourites);
    }
}

//Удаление товара из избранного

  let deleteButtons = document
    .querySelector(".favourites-container")
    .querySelectorAll(".fav-delete");

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      let item = ev.target.closest("input").id;
      let favKey = `в избранное ${item}`;

      localStorage.removeItem(favKey);
      location.reload();
    });
  });

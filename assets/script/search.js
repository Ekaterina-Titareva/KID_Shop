import { catalogJson } from "./index.js";
import { makeMiniBasketItem } from "./functions.js";

//Поиск
const searchButton = document.querySelector(".search__btn");
let searchContent = "";

function createSearchCard(item) {
  searchContent += `
  <div class="catalog__item" value="${item.id}">
    <div class="add-favorites">
      <input type="image" src="./assets/icons/favourites.svg" alt="избранное" class="favourites-heart">
    </div>
    <p class= "item__name">${item.name}</p>
    <p class= "item__category">${item.category}</p>      
    <p class= "item__price">Цена: ${item.price} рублей</p>
    <div class= "item__img">
      <img src="${item.image1}" alt="${item.name}" />
    </div>
    <p class= "item__age">Возраст: ${item.age_group}</p>
    <p class= "item__genger">Пол: ${item.gender}</p>
    <p class= "item__color">Цвет: ${item.color}</p>
    <p class= "item__material">Материал: ${item.material}</p>
    <p class= "item__description">${item.description}</p>
    <button class="add-button">Добавить в корзину</button>
  </div>`;
  document.querySelector(".search__container").innerHTML = searchContent;
  return searchContent;
}

searchButton.addEventListener("click", function createSearchContent() {
  searchContent = "";
  let searchValue = document.querySelector("#search");
  let searchValueLetter = searchValue.value.toUpperCase().slice(0, 1) + searchValue.value.toLowerCase().slice(1);
  let searchValueLetterDelBlank = searchValueLetter.replace(/ |[0-9!@#$%^&*()_+=?\.,/<>|`~"№;:]/g, '');
  let searchValueDelBlank = searchValue.value.replace(/ |[0-9!@#$%^&*()_+=?\.,/<>|`~"№;:]/g, '');
  if (document.querySelector("#search").value !== "" && searchValueDelBlank !== "" && searchValueLetterDelBlank !== "") {
    for (let item of catalogJson){
      if (item.name.includes(searchValueLetterDelBlank) || item.name.includes(searchValueDelBlank)){
        createSearchCard(item);
      } else continue
    }
  } else if (searchValueDelBlank == "" || searchValueLetterDelBlank == "") {
    document.querySelector(".search__container").innerHTML = "Введите название товара"
  }
  document.querySelector("#search").value = "";
});

// Добавление товаров в корзину
searchButton.addEventListener('click', () => {
  const buttons = document.querySelectorAll('.add-button');

  buttons.forEach(button => {

    button.addEventListener('click', (event) => {
        let addToBasketItem = event.target.closest('div');
        let index = addToBasketItem.getAttribute('value');
        let key = `в корзину ${index}`;

        if (!window.localStorage.getItem(key)) {
          window.localStorage.setItem(key, JSON.stringify(catalogJson[index-1]));
          makeMiniBasketItem(JSON.parse(window.localStorage.getItem(key)));
        } else {
          makeMiniBasketItem(JSON.parse(window.localStorage.getItem(key)));
        }

        //window.localStorage.setItem(key, JSON.stringify(catalogJson[index]));
        
        //makeMiniBasketItem(JSON.parse(window.localStorage.getItem(key)), key);
    })
})
})


//Для отрисовки товаров в корзине после перезагрузки страницы
for (let i = 0; i < catalogJson.length; i++) {
  let key = `в корзину ${catalogJson[i].id}`;

  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem(key)) {
      makeMiniBasketItem(JSON.parse(window.localStorage.getItem(key)));
    }
  });
}

import { catalogJson } from "./index.js";
// import { addToBasket } from "./catalog.js";
// import { outputCatalog } from "./catalog.js";

const openFavouritesInHeader = document.querySelector(
  ".open-favourites-header"
);
const openFavouritesInBurger = document.querySelector(
  ".open-favourites-burger"
);
const closeFavouritesInHeader = document.querySelector(
  ".close-favourites-header"
);
const popupFavourites = document.querySelector(".popup_favourites-wrapper");
const favouritesContainer = document.querySelector(".favourites-container");

let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
console.log(favourites.length)

//обновление блока избранное, если есть товар в избранном то рисуем товары, если пусто то предлагаем перейти в каталог
const updateFavouritesContainer = () => {
  // console.log(favourites)
  favouritesContainer.innerHTML = "";
  if (favourites.length === 0) {
    favouritesContainer.innerHTML = `
    <p>Здесь пока нет товаров!
    <br>
    <br>
      Перейти в 
        <a href="./catalog.html" style="text-decoration: underline">каталог</a>
    </p>`;
  } else {
    favourites.forEach((product) => {
    favouritesContainer.innerHTML +=`
      <div class="fav-card">
        <p>${product.name}</p>
        <img class="fav-img" src="${product.image1}" alt="${product.name}" />
        <p>
          Цена: ${product.price} рублей
        </p>
        <div class="fav-actions">
          <input type="image" src="./assets/icons/delete.svg" class="fav-delete" id="${product.id}" />
          <input type="image" src="./assets/icons/basket.svg" class="fav-basket" />
        </div>
      </div>`;
    })
  }
}
updateFavouritesContainer()

//слушатели на открытие и закрытие попапа с избранным (а также для названия раздела в бургере)
openFavouritesInHeader.addEventListener("click", () => {
  // event.preventDefault();
  popupFavourites.style.display = "block";
});

openFavouritesInBurger.addEventListener("click", () => {
  // event.preventDefault();
  popupFavourites.style.display = "block";
});

closeFavouritesInHeader.addEventListener("click", () => {
  // event.preventDefault();
  popupFavourites.style.display = "none";
  location.reload();
});


export { updateFavouritesContainer };
export {favourites}


import { catalogJson } from "./index.js";
import { addToBasket } from "./catalog.js";

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
const favouritesBtnInCard = document.querySelectorAll(".favourites-heart");

let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

//обновить состояние кнопки избранное (сердечка в карточке товара) в зависимости от того есть ли товар в избранном или нет
const updateButtonState = (button, product) => {
  if (isProductInFavourites(product)) {
    button.src = "./assets/icons/favourites_full.svg";
  } else {
    button.src = "./assets/icons/favourites.svg";
  }
};
const isProductInFavourites = (product) => {
  return favourites.some((favProduct) => favProduct.id === product.id);
};

//обновление блока избранное, если есть товар в избранном то рисуем товары, если пусто то предлагаем перейти в каталог
const updateFavouritesContainer = () => {
  favouritesContainer.innerHTML = "";
  if (favourites.length === 0) {
    favouritesContainer.innerHTML = `<p>Здесь пока нет товаров!<br><br>Перейти в <a href="./catalog.html" style="text-decoration: underline">каталог</a></p>`;
  } else {
    favourites.forEach((product) => {
      const favCard = document.createElement("div");

      const favName = document.createElement("p");
      favName.textContent = `${product.name}`;

      const favImage = document.createElement("img");
      favImage.classList.add("fav-img");
      favImage.src = product.image1;
      favImage.alt = product.name;

      const favPrice = document.createElement("p");
      favPrice.textContent = `Цена: ${product.price} рублей`;

      const favActions = document.createElement("div");
      favActions.classList.add("fav-actions");

      const favDelete = document.createElement("input");
      favDelete.type = "image";
      favDelete.src = "./assets/icons/delete.svg";
      favDelete.classList.add("fav-delete");
      favDelete.setAttribute("data-id", product.id);

      const favBasket = document.createElement("input");
      favBasket.type = "image";
      favBasket.src = "./assets/icons/basket.svg";
      favBasket.classList.add("fav-basket");

      favCard.appendChild(favName);
      favCard.appendChild(favImage);
      favCard.appendChild(favPrice);
      favCard.appendChild(favActions);

      favActions.appendChild(favDelete);
      favActions.appendChild(favBasket);

      favouritesContainer.appendChild(favCard);
      //как-то повесить сюда добавление в корзину товара из избранного
      favBasket.addEventListener("click", () => {
        console.log("Товар добавлен в корзину");
      });
    });
  }
};

//слушатели на открытие и закрытие попапа с избранным (а также для названия раздела в бургере)
openFavouritesInHeader.addEventListener("click", (event) => {
  // event.preventDefault();
  popupFavourites.style.display = "block";
});

openFavouritesInBurger.addEventListener("click", (event) => {
  // event.preventDefault();
  popupFavourites.style.display = "block";
});

closeFavouritesInHeader.addEventListener("click", (event) => {
  // event.preventDefault();
  popupFavourites.style.display = "none";
});

//сама функция добавления товаров в избранное и сохранение в local storage и слушатели на наведение мыши
favouritesBtnInCard.forEach((button, index) => {
  const product = catalogJson[index];
  updateButtonState(button, product);
  button.addEventListener("click", () => {
    if (!isProductInFavourites(product)) {
      favourites.push(product);
    } else {
      favourites = favourites.filter(
        (favProduct) => favProduct.id !== product.id
      );
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
    updateFavouritesContainer();
    bindDeleteButtons();
  });

  button.addEventListener("mouseover", () => {
    if (!isProductInFavourites(product)) {
      button.src = "./assets/icons/favourites_full.svg";
    }
  });

  button.addEventListener("mouseout", () => {
    if (!isProductInFavourites(product)) {
      button.src = "./assets/icons/favourites.svg";
    }
  });
});

//удаление товара из попапа избранного
const bindDeleteButtons = () => {
  favouritesContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("fav-delete")) {
      const productId = event.target.getAttribute("data-id");
      favourites = favourites.filter(
        (favProduct) => favProduct.id !== productId
      );
      localStorage.setItem("favourites", JSON.stringify(favourites));
      updateFavouritesContainer();
    }
  });
};

updateFavouritesContainer();
bindDeleteButtons();

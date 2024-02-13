function makeBasketItem(data, value) {
  let basketList = document.querySelector(".basket-list");
  let basketItem = document.createElement("li");

  let content = `
        <img src="${data.image1}" alt="${data.name}"
            width="116" height="auto" />
        <div class="item-description">
            <div class="item-description__text">
                <span>${data.name}</span>
                <span>${data.color}</span>
                <span>${data.material}</span>
            </div>

            <div class="item-description__price">
                <p>${data.price} &#8381</p>
            </div>

            <input type="image" src="./assets/icons/favourites.svg" alt="избранное">
            
                         <button class="delete-btn">
                    <img src='./assets/images/trash-can-min.png' alt="корзина">
                    Удалить
                </button>
            </div>
        </div>`;

  basketItem.setAttribute(`value`, value);
  basketList.appendChild(basketItem);
  basketItem.innerHTML += content;
}

// Отрисовка карточек товаров в корзине popup
function makeMiniBasketItem(data) {
  let basketList = document.querySelector(".popup-basket__list");
  let basketItem = document.createElement("li");

  let content = `
        <img src="${data.image1}" alt="${data.name}"
            width="auto" height="150" />
        <div class="item-description">
            <div class="item-description__text">
                <span>${data.name}</span>
                <span>${data.color}</span>
                <span>${data.material}</span>
            </div>

            <div class="item-description__price">
                <p>${data.price} &#8381</p>
            </div>
        </div>`;

  // basketItem.setAttribute(`value`, value);
  basketList.appendChild(basketItem);
  basketItem.innerHTML += content;
}

export { makeBasketItem, makeMiniBasketItem };

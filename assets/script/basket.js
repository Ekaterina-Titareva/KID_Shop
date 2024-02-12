import { catalogJson } from "./index.js";
import { makeBasketItem } from "./functions.js";


// Вывод списка товаров в корзину при переходе на отдельную страницу
for (let i = 0; i < catalogJson.length; i++) {
    let key = `в корзину ${catalogJson[i].id}`;

    window.addEventListener('DOMContentLoaded',() => {
        if(localStorage.getItem(key)){
            makeBasketItem(JSON.parse(window.localStorage.getItem(key)));
        }
    })
}

//Удаление товара из корзины
window.addEventListener('DOMContentLoaded',() => {
    let deleteButtons = document.querySelector('.basket-list').querySelectorAll('.delete-btn');

    deleteButtons.forEach((btn) => {
        btn.addEventListener('click', (ev) => {
        let item = ev.target.closest('li').getAttribute('value');
        let key = `в корзину ${item}`;

        window.localStorage.removeItem(key);
        location.reload();
        });
    })
})

// Отображение итоговой стоимости и количества товаров в корзине
let prices = [];
let itemQuantity = [];

// Записывает цены и товары 
for (let i = 0; i < catalogJson.length; i++) {
    let key = `в корзину ${catalogJson[i].id}`;
    let item = JSON. parse(window.localStorage.getItem(key));
    
    if(localStorage.getItem(key)){
        prices.push(Number(item.price));
        itemQuantity.push(item);
    }
}

//выводит итоговую стоимость
function changeTotalSum (prices) {
    const totalPrice = document.querySelector('.total-price');
    const link = document.createElement('a');

    if (prices.length == 0) {
        totalPrice.textContent+= `В корзине пока нет товаров.`;
        totalPrice.appendChild(link);
        link.href = 'catalog.html';
        link.textContent = 'Перейдите в каталог.'
    } else {
        let totalSum = prices.reduce((acc, number) => acc + number);
        totalPrice.textContent = totalSum;
    }
}

//Функция для склонения слов
function decline(number, txt) {
    let cases = [2, 0, 1, 1, 1, 2];

    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

// Выводит количество товаров
function displayQuantity (itemsQuantity) {
    const quantityContainer = document.querySelector('.basket-quantity');
    const options = ['товар на сумму', 'товара на сумму', 'товаров на сумму']
    let correctOption = decline(itemsQuantity.length, options);

    if (itemsQuantity.length == 0) {
        document.querySelector('.basket-total').querySelector('h3').style.display = 'none';
        quantityContainer.textContent = '';
    } else {
        quantityContainer.textContent = itemsQuantity.length + ' ' + correctOption;
    }
}

changeTotalSum(prices);
displayQuantity(itemQuantity);
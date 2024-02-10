import { catalogJson } from "./index";
import { makeBasketItem } from "./functions";


// Вывод списка товаров в корзину при переходе на отдельную страницу
for (let i = 0; i < catalogJson.length; i++) {
    let key = `в корзину ${catalogJson[i].id}`;

    window.addEventListener('DOMContentLoaded',() => {
        if(localStorage.getItem(key)){
            makeBasketItem(JSON.parse(window.localStorage.getItem(key)), key);
            console.log(window.localStorage.getItem(key));
        }
    });
}

//Удаление товара из корзины
window.addEventListener('DOMContentLoaded',() => {
    let deleteButtons = document.querySelector('.basket-list').querySelectorAll('.delete-btn');

    deleteButtons.forEach((btn) => {
        btn.addEventListener('click', (ev) => {
        let item = ev.target.closest('li').getAttribute('value');

        window.localStorage.removeItem(item);
        location.reload();
        });
    })
})
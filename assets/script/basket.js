import { catalogJson } from "./index.js";
import { makeBasketItem, makeMiniBasketItem} from "./functions.js";

//Для отрисовки товаров в корзине после перезагрузки страницы
for (let i = 0; i < catalogJson.length; i++) {
  let key = `в корзину ${catalogJson[i].id}`;

  window.addEventListener('DOMContentLoaded',() => {
      if(localStorage.getItem(key)){
          makeMiniBasketItem(JSON.parse(window.localStorage.getItem(key)));
  }
  });
}

// Вывод списка товаров в корзину при переходе на отдельную страницу
for (let i = 0; i < catalogJson.length; i++) {
    let key = `в корзину ${catalogJson[i].id}`;

    window.addEventListener('DOMContentLoaded',() => {
        if(localStorage.getItem(key)){
            makeBasketItem(JSON.parse(window.localStorage.getItem(key)), key);
        }
    });
}

//Удаление товара из корзины
//Здесь нужно прописать условие, что если товаров в корзине нет, чтобы выводилось такое сообщение, иначе выходит ошибка, что элементы с классом delete-btn не найдены и код не идет дальше 
window.addEventListener('DOMContentLoaded',() => {
    if (document.querySelector('.basket-list') !== null){
    let deleteButtons = document.querySelector('.basket-list').querySelectorAll('.delete-btn');

    deleteButtons.forEach((btn) => {
        btn.addEventListener('click', (ev) => {
        let item = ev.target.closest('li').getAttribute('value');

        window.localStorage.removeItem(item);
        location.reload();
        });
    })
    } else console.log("Ваша корзина пуста");
})


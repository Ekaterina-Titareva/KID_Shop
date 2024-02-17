import { catalogJson } from "./index.js";
import { favourites, updateFavouritesContainer } from "./favourites.js";
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










    
// // Добавление товаров в избранное
// const favButtons = document.querySelectorAll(".favourites-heart");

// // let ids = document.querySelectorAll(".fav-delete");
// // let idList = [];

// // for (let id of ids) {
// //   // console.log(id.id)
// //   idList.push(id.id);
// //   // console.log(idList)
// // }
// function addToFav(event) {
//   let addToFavItem = event.target.closest(".catalog__item");
//   let index = addToFavItem.getAttribute("value");

//   // if (favourites && favourites.length > 0) {
//   //   for (let id of idList){
//   //   //если оценки есть в локальной памяти, то они покажутся после обновления страницы
//   //           let nextChar = findFavoritesIds(favourites, id);
//   //           // console.log(nextChar)
//   //           if (nextChar != null) {
//   //               console.log(nextChar)
//   //           }
//   //       }
// // }

//   favourites.push(catalogJson[index-1])
//   localStorage.setItem("favourites", JSON.stringify(favourites));
//   // console.log(index)
//   // let favKey = `fav${index}`;
//   // let favouritesJSON = localStorage.getItem("favourites");
//   // console.log(favouritesJSON)
//   // console.log(favourites)
//   // if (favouritesJSON === null || favouritesJSON == ""){
//   // favourites.push(addToFavItem)
//   // localStorage.setItem("favourites", JSON.stringify(favourites));
//   // updateFavouritesContainer(favourites);
// // } else if(!favouritesJSON && !favouritesJSON.includes(favKey)) {
// //     favourites.push(JSON.parse(localStorage.getItem("favourites").includes(favKey)))
// //     localStorage.setItem("favourites", JSON.stringify(favourites));
// //     updateFavouritesContainer(favourites);
// //   } else {
// //     let catalogItem = document
// //       .querySelector(".favourites-container")
// //       .querySelector(`[value="${index}"]`);
// //       console.log(catalogItem)
// //     let value = parseInt(
// //       catalogItem.querySelector(".catalog__item").getAttribute("value")
// //     );

// //     value += count;
// //     catalogItem.querySelector(".catalog__item").setAttribute("value", value);
// //   }
// }

// favButtons.forEach((button) =>
//   button.addEventListener("click", (event) => {
//         console.log("Добавление в избранное")
//     addToFav(event);
//   })
// );

// // Добавление товаров после фильтрации
// filters.addEventListener("change", () => {
//   const favButtons = document.querySelectorAll(".favourites-heart");
//   favButtons.forEach((button) => button.addEventListener("click", addToFav));
// });

// //Для отрисовки товаров в избранном после перезагрузки страницы
// for (let i = 0; i < catalogJson.length; i++) {
//   let favKey = `fav${catalogJson[i].id}`;

//     if (localStorage.getItem(favKey)) {
//       let product = JSON.parse(localStorage.getItem(favKey));
//       favourites.push(product);
//       updateFavouritesContainer(favourites);
//     }
// }



// //Удаление товара из избранного

//   let deleteButtons = document
//     .querySelector(".favourites-container")
//     .querySelectorAll(".fav-delete");

//   deleteButtons.forEach((btn) => {
//     btn.addEventListener("click", (ev) => {
//       let item = ev.target.closest("input").id;
//       let favKey = `fav${item}`;

//       localStorage.removeItem(favKey);
//       location.reload();
//     });
//   });


// export { addToBasket };

// // //удаление товара из попапа избранного
// // const bindDeleteButtons = () => {
// //   favouritesContainer.addEventListener("click", (event) => {
// //     if (event.target.classList.contains("fav-delete")) {
// //       const productId = event.target.getAttribute("data-id");
// //       favourites = favourites.filter(
// //         (favProduct) => favProduct.id !== productId
// //       );
// //       localStorage.setItem("favourites", JSON.stringify(favourites));
// //       updateFavouritesContainer();
// //     }
// //   });
// // };
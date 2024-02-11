// // Отрисовка карточек товаров в  
// function makeBasketItem (data, value) {
//     let basketList = document.querySelector('.basket-list');
//     let basketItem = document.createElement('li');

//     let content = `
//         <img src="${data.image}" alt="${data.name}"
//             width="116" height="auto" />
//         <div class="item-description">
//             <div class="item-description__text">
//                 <span>${data.name}</span>
//                 <span>${data.color}</span>
//                 <span>${data.material}</span>
//             </div>

//             <div class="item-description__price">
//                 <p>${data.price} &#8381</p>
//             </div>

//             <div class="item-icons">
//                 <button>
//                     <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt"
//                         height="512.000000pt" viewBox="0 0 512.000000 512.000000"
//                         preserveAspectRatio="xMidYMid meet">

//                         <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill=""
//                             stroke="">
//                             <path d="M1345 4509 c-264 -36 -502 -155 -690 -343 -153 -153 -257 -334 -312
//     -543 -34 -129 -43 -362 -19 -498 30 -175 111 -365 217 -510 30 -41 448 -465
//     1018 -1032 892 -889 969 -962 1000 -963 31 0 97 64 960 921 509 507 952 951
//     984 987 140 160 227 337 275 556 23 108 22 359 -2 464 -79 354 -297 649 -596
//     811 -177 95 -313 131 -525 138 -180 6 -275 -7 -427 -57 -194 -65 -313 -145
//     -516 -344 l-152 -150 -158 155 c-86 86 -186 176 -222 201 -129 91 -303 164
//     -459 194 -97 19 -286 26 -376 13z m303 -174 c151 -14 345 -95 488 -204 43 -33
//     149 -130 234 -215 140 -141 158 -156 189 -156 32 0 51 16 210 173 195 193 265
//     247 402 312 170 80 342 110 532 94 131 -11 236 -41 362 -103 279 -138 471
//     -376 547 -683 29 -117 32 -351 5 -461 -37 -154 -99 -286 -192 -407 -30 -38
//     -461 -477 -960 -975 l-905 -905 -906 905 c-523 523 -931 938 -965 984 -150
//     197 -219 423 -206 675 19 376 233 700 572 867 124 61 230 92 355 103 84 8 112
//     8 238 -4z" />
//                         </g>
//                     </svg>
//                     В избранное
//                 </button>

//                 <button class="delete-btn">
//                     <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt"
//                         height="512.000000pt" viewBox="0 0 512.000000 512.000000"
//                         preserveAspectRatio="xMidYMid meet">

//                         <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill=""
//                             stroke="">
//                             <path d="M1931 5109 c-77 -15 -182 -72 -240 -130 -97 -97 -140 -221 -141 -401
//     l0 -78 -302 0 c-341 0 -416 -8 -506 -50 -81 -38 -178 -134 -215 -213 -84 -178
//     -48 -384 90 -521 48 -48 161 -116 192 -116 8 0 11 -422 13 -1542 l3 -1543 27
//     -80 c38 -111 92 -196 168 -269 79 -74 162 -120 266 -146 75 -19 115 -20 1274
//     -20 1159 0 1199 1 1274 20 243 62 418 264 456 527 6 42 10 639 10 1560 l0
//     1491 38 13 c143 46 267 199 293 359 27 169 -57 358 -202 451 -109 69 -126 72
//     -510 77 l-346 4 -6 117 c-7 129 -28 204 -77 282 -67 104 -188 186 -309 209
//     -66 12 -1186 12 -1250 -1z m1264 -251 c90 -49 126 -118 133 -255 l5 -103 -773
//     0 -772 0 3 108 c4 95 7 112 32 154 15 26 41 57 58 69 69 49 66 49 694 46 528
//     -2 593 -4 620 -19z m1080 -625 c51 -27 80 -58 101 -108 38 -92 6 -203 -75
//     -260 l-43 -30 -1676 -3 c-1171 -2 -1688 0 -1714 8 -100 29 -164 144 -138 249
//     19 79 82 141 165 162 17 4 775 6 1685 6 l1655 -2 40 -22z m-217 -2118 c2
//     -1003 -1 -1492 -8 -1540 -21 -138 -93 -240 -208 -297 l-67 -33 -1189 -3
//     c-1290 -3 -1256 -4 -1343 51 -82 52 -150 153 -172 255 -8 38 -11 479 -11 1548
//     l0 1494 1498 -2 1497 -3 3 -1470z" />
//                             <path d="M1772 3231 c-16 -17 -32 -44 -36 -62 -3 -17 -6 -542 -6 -1166 0
//     -1209 -1 -1172 47 -1216 31 -27 84 -32 126 -12 71 34 67 -47 67 1240 0 1255 3
//     1191 -54 1229 -14 9 -45 16 -70 16 -36 0 -50 -6 -74 -29z" />
//                             <path d="M2488 3237 c-14 -12 -31 -32 -37 -44 -8 -15 -11 -361 -11 -1178 0
//     -1287 -4 -1206 67 -1240 42 -20 95 -15 126 12 48 44 47 7 47 1216 0 624 -3
//     1149 -6 1166 -4 18 -20 45 -36 62 -38 38 -109 41 -150 6z" />
//                             <path d="M3184 3226 l-34 -34 0 -1171 c0 -1007 2 -1176 15 -1200 15 -31 69
//     -61 108 -61 37 0 90 41 104 80 16 46 18 2276 3 2332 -15 54 -61 88 -117 88
//     -38 0 -50 -5 -79 -34z" />
//                         </g>
//                     </svg>
//                     Удалить
//                 </button>
//             </div>
//         </div>`;


//     basketItem.setAttribute(`value`, value);
//     basketItem.innerHTML+= content;
//     basketList.appendChild(basketItem);
// }

// // Отрисовка карточек товаров в корзине popup
// function makeMiniBasketItem (data) {
//     let basketList = document.querySelector('.popup-basket__list');
//     let basketItem = document.createElement('li');

//     let content = `
//         <img src="${data.image}" alt="${data.name}"
//             width="auto" height="150" />
//         <div class="item-description">
//             <div class="item-description__text">
//                 <span>${data.name}</span>
//                 <span>${data.color}</span>
//                 <span>${data.material}</span>
//             </div>

//             <div class="item-description__price">
//                 <p>${data.price} &#8381</p>
//             </div>
//         </div>`;

//     // basketItem.setAttribute(`value`, value);
//     basketItem.innerHTML+= content;
//     basketList.appendChild(basketItem);
// }

// export {makeBasketItem, makeMiniBasketItem};
import "./styles/index.scss";


const catalogJson = [
  {
    "id": "1",
    "category": "Футболки",
    "name": "Футболка с принтом",
    "description": "Футболка из мягкого хлопчатобумажного джерси с принтом, отделкой в рубчик по вырезу и застежкой-молнией на одном плече. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Розовый",
    "age_group": "1-4",
    "gender": "Девочка",
    "price": "299",
    "material": "Хлопок"
  },
  {
    "id": "2",
    "category": "Футболки",
    "name": "Футболка с принтом",
    "description": "Классическая футболка из мягкого хлопкового джерси с принтом и обратимыми пайетками спереди. Отделка в рубчик вокруг выреза и низ прямого кроя. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Белый",
    "age_group": "5-8",
    "gender": "Девочка",
    "price": "799",
    "material": "Хлопок"
  },
  {
    "id": "3",
    "category": "Футболки",
    "name": "Футболка оверсайз с принтом",
    "description": "Футболка оверсайз из мягкого трикотажа с принтом, с отделкой в рубчик вокруг выреза, заниженными плечами и широкими рукавами. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Фиолетовый",
    "age_group": "9-14",
    "gender": "Девочка",
    "price": "799",
    "material": "Хлопок"
  },
  {
    "id": "4",
    "category": "Футболки",
    "name": "Футболка",
    "description": "Футболка с коротким рукавом из мягкого хлопкового трикотажа. Свободный крой со слегка заниженными плечами. Застежка на кнопки на левом плече для удобства одевания. Разрезы в боковых швах. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Синий",
    "age_group": "1-4",
    "gender": "Мальчик",
    "price": "1000",
    "material": "Хлопок"
  },
  {
    "id": "5",
    "category": "Футболки",
    "name": "Футболка с принтом",
    "description": "Футболка свободного кроя из мягкого хлопкового джерси с принтом. Отделка в рубчик вокруг выреза и спущенных плеч. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Серый",
    "age_group": "5-8",
    "gender": "Мальчик",
    "price": "799",
    "material": "Хлопок"
  },
  {
    "id": "6",
    "category": "Футболки",
    "name": "Футболка с принтом",
    "description": "Классическая футболка из мягкого хлопчатобумажного джерси с принтом и отделкой в рубчик по вырезу. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Бежевый",
    "age_group": "9-14",
    "gender": "Мальчик",
    "price": "299",
    "material": "Хлопок"
  },
  {
    "id": "7",
    "category": "Джемперы и кардиганы",
    "name": "Джемпер",
    "description": "Джемпер с длинными рукавами из мягкого хлопчатобумажного трикотажа с пуговицами на одном плече и отделкой в рубчик по вырезу, манжетам и низу. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Бежевый",
    "age_group": "1-4",
    "gender": "Девочка",
    "price": "899",
    "material": "Хлопок"
  },
  {
    "id": "8",
    "category": "Джемперы и кардиганы",
    "name": "Кардиган из трикотажа 'Пуантель'",
    "description": "Кардиган с длинными рукавами из мягкого трикотажа 'пуантель' с фестончатыми краями, пуговицами спереди и накладными прорезными карманами спереди. Отделка в рубчик по вырезу, по ленте на пуговицах, а также на манжетах и подоле. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Белый",
    "age_group": "5-8",
    "gender": "Девочка",
    "price": "1499",
    "material": "Хлопок"
  },
  {
    "id": "9",
    "category": "Джемперы и кардиганы",
    "name": "Джемпер",
    "description": "Джемпер из мягкого тонкого трикотажа с круглым вырезом горловины, длинными рукавами и отделкой в рубчик на манжетах и подоле. Акрил 100%.",
    "image": "images/check.png",
    "color": "Черный",
    "age_group": "9-14",
    "gender": "Девочка",
    "price": "999",
    "material": "Акрил"
  },
  {
    "id": "10",
    "category": "Джемперы и кардиганы",
    "name": "Джемпер",
    "description": "Джемпер из мягкого хлопкового трикотажа с пуговицами на одном плече. Спущенные плечи, длинные рукава, отделка в рубчик по вырезу, манжетам и низу. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Зеленый",
    "age_group": "1-4",
    "gender": "Мальчик",
    "price": "899",
    "material": "Хлопок"
  },
  {
    "id": "11",
    "category": "Джемперы и кардиганы",
    "name": "Хлопковый джемпер",
    "description": "Джемпер из мягкого хлопка тонкой вязки с круглым вырезом, отделанным рубчиками, длинными рукавами и отделкой в рубчик на манжетах и подоле. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Белый",
    "age_group": "5-8",
    "gender": "Мальчик",
    "price": "799",
    "material": "Хлопок"
  },
  {
    "id": "12",
    "category": "Джемперы и кардиганы",
    "name": "Джемпер свободного кроя",
    "description": "Джемпер свободного кроя из мягкого хлопка однотонной вязки со спущенными плечами, длинными рукавами и отделкой в рубчик по вырезу, манжетам и подолу. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Синий",
    "age_group": "9-14",
    "gender": "Мальчик",
    "price": "1799",
    "material": "Хлопок"
  },
  {
    "id": "13",
    "category": "Брюки и джинсы",
    "name": "Леггинсы",
    "description": "Леггинсы из плотного хлопкового трикотажа с мягким начесом внутри. Мягкая регулируемая резинка на талии обеспечивает удобную посадку на животе. Хлопок 95%, эластан 5%.",
    "image": "images/check.png",
    "color": "Бежевый",
    "age_group": "1-4",
    "gender": "Девочка",
    "price": "399",
    "material": [
      "Хлопок",
      "Эластан"
    ]
  },
  {
    "id": "14",
    "category": "Брюки и джинсы",
    "name": "Суперэластичные джинсы с широкими штанинами",
    "description": "Джинсы из суперэластичного денима для максимальной гибкости с приталенной посадкой на бедрах. Регулируемая резинка на талии, ширинка на молнии с пуговицей и широкие штанины. Хлопок 35%, полиэстер 65%.",
    "image": "images/check.png",
    "color": "Синий",
    "age_group": "5-8",
    "gender": "Девочка",
    "price": "1499",
    "material": [
      "Хлопок",
      "Полиэстер"
    ]
  },
  {
    "id": "15",
    "category": "Брюки и джинсы",
    "name": "Широкие брюки",
    "description": "Брюки свободного кроя из плотного трикотажа, напоминающего деним, с мягкой эластичной вставкой на талии и накладной ширинкой. Накладные карманы спереди, настоящие карманы сзади и широкие штанины. Хлопок 73%, полиэстер 19%, эластан 8%.",
    "image": "images/check.png",
    "color": "Черный",
    "age_group": "9-14",
    "gender": "Девочка",
    "price": "1499",
    "material": [
      "Хлопок",
      "Полиэстер",
      "Эластан"
    ]
  },
  {
    "id": "16",
    "category": "Брюки и джинсы",
    "name": "Джоггеры",
    "description": "Джоггеры из легкой хлопчатобумажной ткани с потайной резинкой и завязками на талии, а также потайной резинкой по краям. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Серый",
    "age_group": "1-4",
    "gender": "Мальчик",
    "price": "599",
    "material": "Хлопок"
  },
  {
    "id": "17",
    "category": "Брюки и джинсы",
    "name": "Брюки-карго из саржи",
    "description": "Брюки-карго из хлопчатобумажной саржи с прямыми штанинами. Талия на резинке с завязками, накладная ширинка, незаметные боковые карманы и карманы на штанинах с клапанами. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Черный",
    "age_group": "5-8",
    "gender": "Мальчик",
    "price": "899",
    "material": "Хлопок"
  },
  {
    "id": "18",
    "category": "Брюки и джинсы",
    "name": "Джоггеры",
    "description": "Джоггеры из хлопчатобумажной ткани с эластичной талией на завязках, искусственной ширинкой, диагональными боковыми карманами и открытым задним карманом. Свободный крой со складками на коленях и потайной резинкой по краям. Хлопок 98%, эластан 2%.",
    "image": "images/check.png",
    "color": "Бежевый",
    "age_group": "9-14",
    "gender": "Мальчик",
    "price": "999",
    "material": [
      "Хлопок",
      "Эластан"
    ]
  },
  {
    "id": "19",
    "category": "Куртки",
    "name": "Хлопчатобумажная куртка с покрытием",
    "description": "Куртка из хлопчатобумажной ткани с покрытием, со съемным капюшоном, воротником-стойкой, застежкой на молнию спереди с защитой подбородка и кокеткой сзади. Передние карманы с клапанами на кнопках и рукава реглан с потайной резинкой на манжетах. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Розовый",
    "age_group": "1-4",
    "gender": "Девочка",
    "price": "1799",
    "material": "Хлопок"
  },
  {
    "id": "20",
    "category": "Куртки",
    "name": "Ветровка с принтом",
    "description": "Ветровка из ткани с принтом. Съемный капюшон, воротник-стойка и застежка-молния спереди с защитой подбородка от натирания. Карманы в боковых швах и узкая резинка на манжетах и подоле. Полиэстер 100%.",
    "image": "images/check.png",
    "color": "Розовый",
    "age_group": "5-8",
    "gender": "Девочка",
    "price": "1799",
    "material": "Полиэстер"
  },
  {
    "id": "21",
    "category": "Куртки",
    "name": "Бейсбольная куртка с аппликацией",
    "description": "Короткая бейсбольная куртка из тканого материала с аппликациями. Воротник-стойка в рубчик, пуговицы спереди и прорезные боковые карманы. Заниженные плечи, длинные рукава и отделка в рубчик на манжетах и подоле. Полиэстер 100%.",
    "image": "images/check.png",
    "color": "Красный",
    "age_group": "9-14",
    "gender": "Девочка",
    "price": "2999",
    "material": "Полиэстер"
  },
  {
    "id": "22",
    "category": "Куртки",
    "name": "Нейлоновая куртка",
    "description": "Нейлоновая куртка с легкой подкладкой, рубашечным воротником и застежкой на пуговицы. С манжетами в рубчик и обычной посадкой. Полиэстер 100%.",
    "image": "images/check.png",
    "color": "Черный",
    "age_group": "1-4",
    "gender": "Мальчик",
    "price": "4200",
    "material": "Полиэстер"
  },
  {
    "id": "23",
    "category": "Куртки",
    "name": "Ветровка с принтом",
    "description": "Ветровка из набивной ткани со съемным капюшоном, воротником-стойкой и застежкой-молнией спереди с защитой подбородка от натирания. Слегка заниженные плечи и диагональные прорезные карманы спереди. Без подкладки. Полиэстер 100%.",
    "image": "images/check.png",
    "color": "Синий",
    "age_group": "5-8",
    "gender": "Мальчик",
    "price": "1799",
    "material": "Полиэстер"
  },
  {
    "id": "24",
    "category": "Куртки",
    "name": "Куртка из ворса с воротником-стойкой",
    "description": "Куртка из мягкого пушистого ворса с нагрудным карманом на молнии из тканого материала. Воротник-стойка, застежка-молния спереди с защитой подбородка от натирания, прорезные карманы спереди и узкая трикотажная отделка на манжетах и подоле. Полиэстер 100%.",
    "image": "images/check.png",
    "color": "Бежевый",
    "age_group": "9-14",
    "gender": "Мальчик",
    "price": "1499",
    "material": "Полиэстер"
  },
  {
    "id": "25",
    "category": "Обувь",
    "name": "Балетные туфли-лодочки с аппликацией",
    "description": "Балетные туфли-лодочки с эластичным ремешком и аппликацией на стопе. Атласная подкладка и стельки из технической пены Cellfit для дополнительного комфорта. Подошва с рисунком. Высота подошвы 0,4 см. Полиэстер 100%.",
    "image": "images/check.png",
    "color": "Красный",
    "age_group": "1-4",
    "gender": "Девочка",
    "price": "999",
    "material": "Полиэстер"
  },
  {
    "id": "26",
    "category": "Обувь",
    "name": "Блестящие балетные туфли-лодочки",
    "description": "Блестящие балетные туфли-лодочки с эластичным ремешком на ноге и петлей в крупный рубчик сзади. Атласная подкладка и стельки с принтом из технической пены Cellfit для дополнительного комфорта. Рифленая подошва. Полиэстер 100%.",
    "image": "images/check.png",
    "color": "Фиолетовый",
    "age_group": "5-8",
    "gender": "Девочка",
    "price": "1299",
    "material": "Полиэстер"
  },
  {
    "id": "27",
    "category": "Обувь",
    "name": "Балетные туфли-лодочки",
    "description": "Балетные туфли-лодочки с эластичным ремешком на ноге. Атласная подкладка и стельки из технической пены Cellfit для дополнительного комфорта. Рифленая подошва. Высота подошвы 0,8 см. Полиэстер 100%.",
    "image": "images/check.png",
    "color": "Черный",
    "age_group": "9-14",
    "gender": "Девочка",
    "price": "1499",
    "material": "Полиэстер"
  },
  {
    "id": "28",
    "category": "Обувь",
    "name": "Кроссовки из парусины",
    "description": "Кроссовки из хлопчатобумажной ткани с застежками-крючками спереди и петлей сзади. Подкладка и стельки из парусины и резиновая подошва с рисунком. Высота подошвы 2,1 см. Хлопок 100%.",
    "image": "images/check.png",
    "color": "Синий",
    "age_group": "1-4",
    "gender": "Мальчик",
    "price": "999",
    "material": "Хлопок"
  },
  {
    "id": "29",
    "category": "Обувь",
    "name": "Мигающие кроссовки",
    "description": "Кроссовки с мягким верхним краем, застежкой на крючок спереди и петлей в крупный рубчик сзади. Подкладка из сетки и стельки из технической пены Cellfit для дополнительного комфорта. Подошва с активируемыми при движении мигающими светодиодными лампочками. Высота подошвы 2,5 см. Полиэстер 100%.",
    "image": "images/check.png",
    "color": "Красный",
    "age_group": "5-8",
    "gender": "Мальчик",
    "price": "2499",
    "material": "Полиэстер"
  },
  {
    "id": "30",
    "category": "Обувь",
    "name": "Кроссовки",
    "description": "Кроссовки с мягким краем и язычком, шнуровкой спереди и петлей в крупный рубчик сзади. Сетчатые подкладки и стельки из технической пены Cellfit для дополнительного комфорта. Подошва с рисунком. Высота подошвы 3,1 см. Полиэстер 100%.",
    "image": "images/check.png",
    "color": "Зеленый",
    "age_group": "9-14",
    "gender": "Мальчик",
    "price": "2499",
    "material": "Полиэстер"
  }
];


// Форма
const button = document.querySelector('.user');
const form = document.querySelector('#user_login');
const popup = document.querySelector('.popup_user');

button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
});




// Каталог и очистить фильтр

let catalogContent = "";

function createCatalog() {
  // let clothes = JSON.parse(catalogJson);
  let clothes = catalogJson;
  for (let item of clothes) {
    createCard(item);
  }
  document.querySelector(".catalog__container").innerHTML =
  catalogContent;
}

createCatalog();

function createCard(item) {
  catalogContent += `
    <div class="catalog__item">
      <p class= "item__name">${item.name}</p>
      <p class= "item__category">${item.category}</p>      
      <p class= "item__price">Цена: ${item.price} рублей</p>
      <div class= "item__img">
        <img src="${item.image}" alt="${item.name}"></img>
      </div>
      <p class= "item__age">Возраст: ${item.age_group}</p>
      <p class= "item__genger">Пол: ${item.gender}</p>
      <p class= "item__color">Цвет: ${item.color}</p>
      <p class= "item__material">Материал: ${item.material}</p>
      <p class= "item__description">${item.description}</p>
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

// let catalogObject = JSON.parse(catalogJson);
let catalogObject = catalogJson;

const filters = document.querySelector("#filters");

filters.addEventListener("change", filterClothes);

function filterClothes() {
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
      (!gender.length || gender.includes(n.gender))
  );

  outputCatalog(filteredCatalog);
}

//reset filters
document.querySelector(".sidebar__reset").addEventListener("click", () => {
  filters.querySelector("#category").value = "";
  filters.querySelector("#pricemin").value = lowestPrice;
  filters.querySelector("#pricemax").value = highestPrice;

  let inputs = document.querySelectorAll("input");

  for (const input of inputs) {
    if (input.type == "checkbox" || input.type == "radio")
      input.checked = false;
  }

  filterClothes();

});

function outputCatalog(clothes) {

  document.querySelector(".catalog__container").innerHTML = clothes.map(
      (item) => `
      <div class="catalog__item">
      <p class= "item__name">${item.name}</p>
      <p class= "item__category">${item.category}</p>      
      <p class= "item__price">Цена: ${item.price} рублей</p>
      <div class= "item__img">
        <img src="${item.image}" alt="${item.name}"></img>
      </div>
      <p class= "item__age">Возраст: ${item.age_group}</p>
      <p class= "item__genger">Пол: ${item.gender}</p>
      <p class= "item__color">Цвет: ${item.color}</p>
      <p class= "item__material">Материал: ${item.material}</p>
      <p class= "item__description">${item.description}</p>
    </div>`
    )
    .join("");
}

// outputCatalog(catalogObject);


// PRICE RANGE SLIDER
const highestPrice = Math.max(...catalogObject.map((exc) => exc.price));
const lowestPrice = Math.min(...catalogObject.map((exc) => exc.price));

document.querySelector("#rangemin").value = lowestPrice;
document.querySelector("#rangemax").value = highestPrice;

const rangeInputMin = document.querySelector("#rangemin"); //minval
const rangeInputMax = document.querySelector("#rangemax"); //maxval
const priceInputMin = document.querySelector("#pricemin"); //priceInputMin
const priceInputMax = document.querySelector("#pricemax"); //priceInputMax
const minGap = 0;
const range = document.querySelector(".filter-slider-track");

const sliderMinValue = parseInt(rangeInputMin.min);
const sliderMaxValue = parseInt(rangeInputMax.max);

function slideMin() {
  let gap = parseInt(rangeInputMax.value) - parseInt(rangeInputMin.value);
  if (gap <= minGap) {
    rangeInputMin.value = parseInt(rangeInputMax.value) - minGap;
  }
  priceInputMin.value = rangeInputMin.value;
  setArea();
}

function slideMax() {
  let gap = parseInt(rangeInputMax.value) - parseInt(rangeInputMin.value);
  if (gap <= minGap) {
    rangeInputMax.value = parseInt(rangeInputMin.value) + minGap;
  }
  priceInputMax.value = rangeInputMax.value;
  setArea();
}

function setArea() {
  range.style.left = (rangeInputMin.value / sliderMaxValue) * 100 + "%";
  range.style.right = 100 - (rangeInputMax.value / sliderMaxValue) * 100 + "%";
}

function setMinPrice() {
  let minPrice = parseInt(priceInputMin.value);
  if (minPrice < sliderMinValue) {
    priceInputMin.value = sliderMinValue;
  }
  rangeInputMin.value = priceInputMin.value;
  slideMin();
}

function setMaxPrice() {
  let maxPrice = parseInt(priceInputMax.value);
  if (maxPrice > sliderMaxValue) {
    priceInputMax.value = sliderMaxValue;
  }
  rangeInputMax.value = priceInputMax.value;
  slideMax();
}

slideMin();
slideMax();


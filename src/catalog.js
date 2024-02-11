import "./styles/index.scss";
// fetch('catalog.json')
//   .then(response => response.json())
//   .then(data => {
// const catalogJson = JSON.parse(data);


const catalogJson = [
  {
    id: "1",
    category: "Футболки",
    name: "Футболка с принтом",
    description:
      "Футболка из мягкого хлопчатобумажного джерси с принтом, отделкой в рубчик по вырезу и застежкой-молнией на одном плече. Хлопок 100%.",
    image1:
      "./images/first_pic_of_catalog/Girls_1_4Y_Tshirts_firstpic.jpg", //проверка без require
    image2:
      "require('./images/second_pic_of_catalog/Girls_1_4Y_Tshirts_secondpic.jpg')",
    color: "Розовый",
    age_group: "1-4",
    gender: "Девочка",
    price: "299",
    material: "Хлопок",
  },
  {
    id: "2",
    category: "Футболки",
    name: "Футболка с принтом",
    description:
      "Классическая футболка из мягкого хлопкового джерси с принтом и обратимыми пайетками спереди. Отделка в рубчик вокруг выреза и низ прямого кроя. Хлопок 100%.",
    image1:
      "./images/first_pic_of_catalog/Girls_5_8Y_Tshirts_firstpic.jpg", //проверка без require
    image2:
      "require('./images/second_pic_of_catalog/Girls_5_8Y_Tshirts_secondpic.jpg')",
    color: "Белый",
    age_group: "5-8",
    gender: "Девочка",
    price: "799",
    material: "Хлопок",
  },
  {
    id: "3",
    category: "Футболки",
    name: "Футболка оверсайз с принтом",
    description:
      "Футболка оверсайз из мягкого трикотажа с принтом, с отделкой в рубчик вокруг выреза, заниженными плечами и широкими рукавами. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_9_14Y_Tshirts_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_9_14Y_Tshirts_secondpic.jpg')",
    color: "Фиолетовый",
    age_group: "9-14",
    gender: "Девочка",
    price: "799",
    material: "Хлопок",
  },
  {
    id: "4",
    category: "Футболки",
    name: "Футболка",
    description:
      "Футболка с коротким рукавом из мягкого хлопкового трикотажа. Свободный крой со слегка заниженными плечами. Застежка на кнопки на левом плече для удобства одевания. Разрезы в боковых швах. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_1_4Y_Tshirts_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_1_4Y_Tshirts_secondpic.jpg')",
    color: "Синий",
    age_group: "1-4",
    gender: "Мальчик",
    price: "1000",
    material: "Хлопок",
  },
  {
    id: "5",
    category: "Футболки",
    name: "Футболка с принтом",
    description:
      "Футболка свободного кроя из мягкого хлопкового джерси с принтом. Отделка в рубчик вокруг выреза и спущенных плеч. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_5_8Y_Tshirts_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_5_8Y_Tshirts_secondpic.jpg')",
    color: "Серый",
    age_group: "5-8",
    gender: "Мальчик",
    price: "799",
    material: "Хлопок",
  },
  {
    id: "6",
    category: "Футболки",
    name: "Футболка с принтом",
    description:
      "Классическая футболка из мягкого хлопчатобумажного джерси с принтом и отделкой в рубчик по вырезу. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_9_14Y_Tshirts_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_9_14Y_Tshirts_secondpic.jpg')",
    color: "Бежевый",
    age_group: "9-14",
    gender: "Мальчик",
    price: "299",
    material: "Хлопок",
  },
  {
    id: "7",
    category: "Джемперы и кардиганы",
    name: "Джемпер",
    description:
      "Джемпер с длинными рукавами из мягкого хлопчатобумажного трикотажа с пуговицами на одном плече и отделкой в рубчик по вырезу, манжетам и низу. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_1_4Y_Jumpers_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_1_4Y_Jumpers_secondpic.jpg')",
    color: "Бежевый",
    age_group: "1-4",
    gender: "Девочка",
    price: "899",
    material: "Хлопок",
  },
  {
    id: "8",
    category: "Джемперы и кардиганы",
    name: "Кардиган из трикотажа 'Пуантель'",
    description:
      "Кардиган с длинными рукавами из мягкого трикотажа 'пуантель' с фестончатыми краями, пуговицами спереди и накладными прорезными карманами спереди. Отделка в рубчик по вырезу, по ленте на пуговицах, а также на манжетах и подоле. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_5_8Y_Jumpers_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_5_8Y_Jumpers_secondpic.jpg')",
    color: "Белый",
    age_group: "5-8",
    gender: "Девочка",
    price: "1499",
    material: "Хлопок",
  },
  {
    id: "9",
    category: "Джемперы и кардиганы",
    name: "Джемпер",
    description:
      "Джемпер из мягкого тонкого трикотажа с круглым вырезом горловины, длинными рукавами и отделкой в рубчик на манжетах и подоле. Акрил 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_9_14Y_Jumpers_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_9_14Y_Jumpers_secondpic.jpg')",
    color: "Черный",
    age_group: "9-14",
    gender: "Девочка",
    price: "999",
    material: "Акрил",
  },
  {
    id: "10",
    category: "Джемперы и кардиганы",
    name: "Джемпер",
    description:
      "Джемпер из мягкого хлопкового трикотажа с пуговицами на одном плече. Спущенные плечи, длинные рукава, отделка в рубчик по вырезу, манжетам и низу. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_1_4Y_Jumpers_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_1_4Y_Jumpers_secondpic.jpg')",
    color: "Зеленый",
    age_group: "1-4",
    gender: "Мальчик",
    price: "899",
    material: "Хлопок",
  },
  {
    id: "11",
    category: "Джемперы и кардиганы",
    name: "Хлопковый джемпер",
    description:
      "Джемпер из мягкого хлопка тонкой вязки с круглым вырезом, отделанным рубчиками, длинными рукавами и отделкой в рубчик на манжетах и подоле. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_5_8Y_Jumpers_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_5_8Y_Jumpers_secondpic.jpg')",
    color: "Белый",
    age_group: "5-8",
    gender: "Мальчик",
    price: "799",
    material: "Хлопок",
  },
  {
    id: "12",
    category: "Джемперы и кардиганы",
    name: "Джемпер свободного кроя",
    description:
      "Джемпер свободного кроя из мягкого хлопка однотонной вязки со спущенными плечами, длинными рукавами и отделкой в рубчик по вырезу, манжетам и подолу. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_9_14Y_Jumpers_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_9_14Y_Jumpers_secondpic.jpg')",
    color: "Синий",
    age_group: "9-14",
    gender: "Мальчик",
    price: "1799",
    material: "Хлопок",
  },
  {
    id: "13",
    category: "Брюки и джинсы",
    name: "Леггинсы",
    description:
      "Леггинсы из плотного хлопкового трикотажа с мягким начесом внутри. Мягкая регулируемая резинка на талии обеспечивает удобную посадку на животе. Хлопок 95%, эластан 5%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_1_4Y_Trousers_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_1_4Y_Trousers_secondpic.jpg')",
    color: "Бежевый",
    age_group: "1-4",
    gender: "Девочка",
    price: "399",
    material: ["Хлопок", "Эластан"],
  },
  {
    id: "14",
    category: "Брюки и джинсы",
    name: "Суперэластичные джинсы с широкими штанинами",
    description:
      "Джинсы из суперэластичного денима для максимальной гибкости с приталенной посадкой на бедрах. Регулируемая резинка на талии, ширинка на молнии с пуговицей и широкие штанины. Хлопок 35%, полиэстер 65%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_5_8Y_Trousers_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_5_8Y_Trousers_secondpic.jpg')",
    color: "Синий",
    age_group: "5-8",
    gender: "Девочка",
    price: "1499",
    material: ["Хлопок", "Полиэстер"],
  },
  {
    id: "15",
    category: "Брюки и джинсы",
    name: "Широкие брюки",
    description:
      "Брюки свободного кроя из плотного трикотажа, напоминающего деним, с мягкой эластичной вставкой на талии и накладной ширинкой. Накладные карманы спереди, настоящие карманы сзади и широкие штанины. Хлопок 73%, полиэстер 19%, эластан 8%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_9_14Y_Trousers_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_9_14Y_Trousers_secondpic.jpg')",
    color: "Черный",
    age_group: "9-14",
    gender: "Девочка",
    price: "1499",
    material: ["Хлопок", "Полиэстер", "Эластан"],
  },
  {
    id: "16",
    category: "Брюки и джинсы",
    name: "Джоггеры",
    description:
      "Джоггеры из легкой хлопчатобумажной ткани с потайной резинкой и завязками на талии, а также потайной резинкой по краям. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_1_4Y_Trousers_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_1_4Y_Trousers_secondpic.jpg')",
    color: "Серый",
    age_group: "1-4",
    gender: "Мальчик",
    price: "599",
    material: "Хлопок",
  },
  {
    id: "17",
    category: "Брюки и джинсы",
    name: "Брюки-карго из саржи",
    description:
      "Брюки-карго из хлопчатобумажной саржи с прямыми штанинами. Талия на резинке с завязками, накладная ширинка, незаметные боковые карманы и карманы на штанинах с клапанами. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_5_8Y_Trousers_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_5_8Y_Trousers_secondpic.jpg')",
    color: "Черный",
    age_group: "5-8",
    gender: "Мальчик",
    price: "899",
    material: "Хлопок",
  },
  {
    id: "18",
    category: "Брюки и джинсы",
    name: "Джоггеры",
    description:
      "Джоггеры из хлопчатобумажной ткани с эластичной талией на завязках, искусственной ширинкой, диагональными боковыми карманами и открытым задним карманом. Свободный крой со складками на коленях и потайной резинкой по краям. Хлопок 98%, эластан 2%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_9_14Y_Trousers_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_9_14Y_Trousers_secondpic.jpg')",
    color: "Бежевый",
    age_group: "9-14",
    gender: "Мальчик",
    price: "999",
    material: ["Хлопок", "Эластан"],
  },
  {
    id: "19",
    category: "Куртки",
    name: "Хлопчатобумажная куртка с покрытием",
    description:
      "Куртка из хлопчатобумажной ткани с покрытием, со съемным капюшоном, воротником-стойкой, застежкой на молнию спереди с защитой подбородка и кокеткой сзади. Передние карманы с клапанами на кнопках и рукава реглан с потайной резинкой на манжетах. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_1_4Y_Outerwear_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_1_4Y_Outerwear_secondpic.jpg')",
    color: "Розовый",
    age_group: "1-4",
    gender: "Девочка",
    price: "1799",
    material: "Хлопок",
  },
  {
    id: "20",
    category: "Куртки",
    name: "Ветровка с принтом",
    description:
      "Ветровка из ткани с принтом. Съемный капюшон, воротник-стойка и застежка-молния спереди с защитой подбородка от натирания. Карманы в боковых швах и узкая резинка на манжетах и подоле. Полиэстер 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_5_8Y_Outerwear_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_5_8Y_Outerwear_secondpic.jpg')",
    color: "Розовый",
    age_group: "5-8",
    gender: "Девочка",
    price: "1799",
    material: "Полиэстер",
  },
  {
    id: "21",
    category: "Куртки",
    name: "Бейсбольная куртка с аппликацией",
    description:
      "Короткая бейсбольная куртка из тканого материала с аппликациями. Воротник-стойка в рубчик, пуговицы спереди и прорезные боковые карманы. Заниженные плечи, длинные рукава и отделка в рубчик на манжетах и подоле. Полиэстер 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_9_14Y_Outerwear_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_9_14Y_Outerwear_secondpic.jpg')",
    color: "Красный",
    age_group: "9-14",
    gender: "Девочка",
    price: "2999",
    material: "Полиэстер",
  },
  {
    id: "22",
    category: "Куртки",
    name: "Нейлоновая куртка",
    description:
      "Нейлоновая куртка с легкой подкладкой, рубашечным воротником и застежкой на пуговицы. С манжетами в рубчик и обычной посадкой. Полиэстер 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_1_4Y_Outerwear_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_1_4Y_Outerwear_secondpic.jpg')",
    color: "Черный",
    age_group: "1-4",
    gender: "Мальчик",
    price: "4200",
    material: "Полиэстер",
  },
  {
    id: "23",
    category: "Куртки",
    name: "Ветровка с принтом",
    description:
      "Ветровка из набивной ткани со съемным капюшоном, воротником-стойкой и застежкой-молнией спереди с защитой подбородка от натирания. Слегка заниженные плечи и диагональные прорезные карманы спереди. Без подкладки. Полиэстер 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_5_8Y_Outerwear_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_5_8Y_Outerwear_secondpic.jpg')",
    color: "Синий",
    age_group: "5-8",
    gender: "Мальчик",
    price: "1799",
    material: "Полиэстер",
  },
  {
    id: "24",
    category: "Куртки",
    name: "Куртка из ворса с воротником-стойкой",
    description:
      "Куртка из мягкого пушистого ворса с нагрудным карманом на молнии из тканого материала. Воротник-стойка, застежка-молния спереди с защитой подбородка от натирания, прорезные карманы спереди и узкая трикотажная отделка на манжетах и подоле. Полиэстер 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_9_14Y_Outerwear_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_9_14Y_Outerwear_secondpic.jpg')",
    color: "Бежевый",
    age_group: "9-14",
    gender: "Мальчик",
    price: "1499",
    material: "Полиэстер",
  },
  {
    id: "25",
    category: "Обувь",
    name: "Балетные туфли-лодочки с аппликацией",
    description:
      "Балетные туфли-лодочки с эластичным ремешком и аппликацией на стопе. Атласная подкладка и стельки из технической пены Cellfit для дополнительного комфорта. Подошва с рисунком. Высота подошвы 0,4 см. Полиэстер 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_1_4Y_Shoes_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_1_4Y_Shoes_secondpic.jpg')",
    color: "Красный",
    age_group: "1-4",
    gender: "Девочка",
    price: "999",
    material: "Полиэстер",
  },
  {
    id: "26",
    category: "Обувь",
    name: "Блестящие балетные туфли-лодочки",
    description:
      "Блестящие балетные туфли-лодочки с эластичным ремешком на ноге и петлей в крупный рубчик сзади. Атласная подкладка и стельки с принтом из технической пены Cellfit для дополнительного комфорта. Рифленая подошва. Полиэстер 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_5_8Y_Shoes_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_5_8Y_Shoes_secondpic.jpg')",
    color: "Фиолетовый",
    age_group: "5-8",
    gender: "Девочка",
    price: "1299",
    material: "Полиэстер",
  },
  {
    id: "27",
    category: "Обувь",
    name: "Балетные туфли-лодочки",
    description:
      "Балетные туфли-лодочки с эластичным ремешком на ноге. Атласная подкладка и стельки из технической пены Cellfit для дополнительного комфорта. Рифленая подошва. Высота подошвы 0,8 см. Полиэстер 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Girls_9_14Y_Shoes_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Girls_9_14Y_Shoes_secondpic.jpg')",
    color: "Черный",
    age_group: "9-14",
    gender: "Девочка",
    price: "1499",
    material: "Полиэстер",
  },
  {
    id: "28",
    category: "Обувь",
    name: "Кроссовки из парусины",
    description:
      "Кроссовки из хлопчатобумажной ткани с застежками-крючками спереди и петлей сзади. Подкладка и стельки из парусины и резиновая подошва с рисунком. Высота подошвы 2,1 см. Хлопок 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_1_4Y_Shoes_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_1_4Y_Shoes_secondpic.jpg')",
    color: "Синий",
    age_group: "1-4",
    gender: "Мальчик",
    price: "999",
    material: "Хлопок",
  },
  {
    id: "29",
    category: "Обувь",
    name: "Мигающие кроссовки",
    description:
      "Кроссовки с мягким верхним краем, застежкой на крючок спереди и петлей в крупный рубчик сзади. Подкладка из сетки и стельки из технической пены Cellfit для дополнительного комфорта. Подошва с активируемыми при движении мигающими светодиодными лампочками. Высота подошвы 2,5 см. Полиэстер 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_5_8Y_Shoes_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_5_8Y_Shoes_secondpic.jpg')",
    color: "Красный",
    age_group: "5-8",
    gender: "Мальчик",
    price: "2499",
    material: "Полиэстер",
  },
  {
    id: "30",
    category: "Обувь",
    name: "Кроссовки",
    description:
      "Кроссовки с мягким краем и язычком, шнуровкой спереди и петлей в крупный рубчик сзади. Сетчатые подкладки и стельки из технической пены Cellfit для дополнительного комфорта. Подошва с рисунком. Высота подошвы 3,1 см. Полиэстер 100%.",
    image1:
      "require('./images/first_pic_of_catalog/Boys_9_14Y_Shoes_firstpic.jpg')",
    image2:
      "require('./images/second_pic_of_catalog/Boys_9_14Y_Shoes_secondpic.jpg')",
    color: "Зеленый",
    age_group: "9-14",
    gender: "Мальчик",
    price: "2499",
    material: "Полиэстер",
  },
];

// Каталог

let catalogContent = "";

function createCatalog() {
  // let clothes = JSON.parse(catalogJson);
  let clothes = catalogJson;
  for (let item of clothes) {
    createCard(item);
  }
  document.querySelector(".catalog__container").innerHTML = catalogContent;
}

createCatalog();

function createCard(item) {
  catalogContent += `
    <div class="catalog__item">
      <p class= "item__name">${item.name}</p>
      <p class= "item__category">${item.category}</p>      
      <p class= "item__price">Цена: ${item.price} рублей</p>
      <div class= "item__img">
        <img src="${item.image1}" alt="${item.name}"></img>
      </div>
      <p class= "item__age">Возраст: ${item.age_group}</p>
      <p class= "item__genger">Пол: ${item.gender}</p>
      <p class= "item__color">Цвет: ${item.color}</p>
      <p class= "item__material">Материал: ${item.material}</p>
      <p class= "item__description">${item.description}</p>
      <button class="add-button-catalog">Добавить в корзину</button>
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


// Фильтр
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
      (!gender.length || gender.includes(n.gender)) &&
      (!costMin || costMin <= n.price) &&
      (!costMax || costMax >= n.price)
  );

  outputCatalog(filteredCatalog);
}



// Бегунок стоимости
const lowestPrice = Math.min(...catalogObject.map((exc) => exc.priceadult));
const highestPrice = Math.max(...catalogObject.map((exc) => exc.priceadult));

const rangeInput = document.querySelectorAll(".filter__price_range input");
rangeInput[0].value = lowestPrice;
rangeInput[1].value = highestPrice;
const priceInput = document.querySelectorAll(".filter__price_inputs input");
const range = document.querySelector(".filter-slider-track");
let priceGap = 300;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

//Очистить фильтр
document.querySelector(".sidebar__reset").addEventListener("click", () => {
  filters.querySelector("#category").value = "";
  priceInput[0].value = lowestPrice;
  priceInput[1].value = highestPrice;
  rangeInput[0].value = lowestPrice;
  rangeInput[1].value = highestPrice;
  range.style.left = "50%";
  range.style.right = "50%";

  let inputs = document.querySelectorAll("input");

  for (const input of inputs) {
    if (input.type == "checkbox" || input.type == "radio")
      input.checked = false;
  }

  filterClothes();
});



function outputCatalog(clothes) {
  document.querySelector(".catalog__container").innerHTML = clothes
    .map(
      (item) => `
      <div class="catalog__item">
      <p class= "item__name">${item.name}</p>
      <p class= "item__category">${item.category}</p>      
      <p class= "item__price">Цена: ${item.price} рублей</p>
      <div class= "item__img">
        <img src="${item.image1}" alt="${item.name}"></img>
      </div>
      <p class= "item__age">Возраст: ${item.age_group}</p>
      <p class= "item__genger">Пол: ${item.gender}</p>
      <p class= "item__color">Цвет: ${item.color}</p>
      <p class= "item__material">Материал: ${item.material}</p>
      <p class= "item__description">${item.description}</p>
      <button class="add-button-catalog">Добавить в корзину</button>
    </div>`
    )
    .join("");
}


// })
// .catch(error => {
//   console.error('Error:', error);
// });



// Форма
const userBtn = document.querySelector('.user');
const formLogin = document.querySelector('#user_login');
const popupLogin = document.querySelector('.popup_user');

userBtn.addEventListener('click', () => {
  formLogin.classList.add('open');
  popupLogin.classList.add('popup_open');
});

//Форма регистарции
const registr = document.querySelector('.registr');
const popupReg = document.querySelector('.popup_user_registr');
const formReg = document.querySelector('#user_registr');

registr.addEventListener('click',()=>{
  formReg.classList.add('open');
  popupReg.classList.add('popup_open');
  popupLogin.classList.remove('popup_open');
  formLogin.classList.remove('open');

});
// Кнопки закрытия
document.querySelector('.close').addEventListener('click', ()=>{
  document.querySelector('.popup_user').style.display = 'none';
});

document.querySelector('.close_reg').addEventListener('click',()=>{
  document.querySelector('.popup_user_registr').style.display = 'none';
});

//Валидация формы входа
const formLog = document.forms.formLogin;

formLog.addEventListener('submit', function(evt){
  evt.preventDefault();
  let hasError = false;
  const emailRegexLogin = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const login = formLog.elements.login;
  const password = formLog.elements.password;
  const agree = formLog.elements.agree;

  if(emailRegexLogin.test(login.value)=== false){
    document.getElementById('error_login').textContent = 'Неверный логин';
    hasError = true;

  }
  if(password.value === ''){
    document.getElementById('error_password').textContent = 'Неверный пароль';
    hasError = true;
    
  }
  if(!agree.checked){
    document.getElementById('check_login').textContent = 'Необходимо согласие с условиями';
    hasError = true;
  }

  if(hasError === false){
    formLog.reset();
    alert('Добро пожаловать!');
  }

})


//Валидация формы регистрации

const checkFormReg = document.forms.formRegistration;


checkFormReg.addEventListener('submit', function(evt){
evt.preventDefault();
let hasError = false;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const userName = checkFormReg.elements.regname;
const userSurname = checkFormReg.elements.surname;
const userEmail = checkFormReg.elements.email;
const userPassOne = checkFormReg.elements.password;
const userPassTwo = checkFormReg.elements.passcheck;
const agree = checkFormReg.elements.agree;

if(userName.value === ' '){
  document.getElementById('name_error').textContent = 'Введите имя';
  hasError = true;
}
if(userSurname.value === ' '){
  document.getElementById('surname_error').textContent = 'Введите фамилию';
  hasError =true;
}
if(emailRegex.test(userEmail.value)=== false){
  document.getElementById('emailreg_error').textContent = 'Некорректная почта';
  hasError = true;
}
if(userEmail.value === ''){
  document.getElementById('emailreg_error').textContent = 'Введите почту';
  hasError = true;
}

if(userPassOne.value === ''|| userPassOne.length<8){
  document.getElementById('password_error').textContent = 'Придумайте пароль минимум 8 символов';
  hasError = true;
}
if(userPassTwo.value !== userPassOne.value || userPassTwo.value == ''){
  document.getElementById('checkpass_error').textContent = 'Пароль не совпадает';
  hasError = true;
}
if(!agree.checked){
  document.getElementById('check_reg').textContent = 'Необходимо согласие с условиями';
  hasError = true;
}
if(hasError === false){
  document.querySelectorAll('.error').textContent = ' ';
  checkFormReg.reset();
  document.getElementById('success').textContent = 'Вы успешно зарегистрировались!';

}

});

// Открытие/закрытие popup с корзиной
const buttonBasket = document.querySelector('#basket-catalog');
const buttonClose = document.querySelector('.btn-close-catalog');
const popupBasket = document.querySelector('.popup-basket-catalog');

buttonBasket.addEventListener("click", () => {
  let headerHeight = document.querySelector(".header").clientHeight;

  if (popupBasket.classList.contains("hidden")) {
    popupBasket.classList.remove("hidden");
    popupBasket.classList.add("visible");

    popupBasket.style.top = `${headerHeight}px`;
  } else {
    popupBasket.classList.add("hidden");
    popupBasket.classList.remove("visible");
  }
});

buttonClose.addEventListener("click", () => {
  if (popupBasket.classList.contains("visible")) {
    popupBasket.classList.remove("visible");
    popupBasket.classList.add("hidden");
  }
});



//Корзина


// Отрисовка карточек товаров в корзине popup
function makeMiniBasketItem (data) {
  let basketList = document.querySelector('.popup-basket__list-catalog');
  let basketItem = document.createElement('li');

  let content = `
      <img src="${data.image}" alt="${data.name}"
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
  basketItem.innerHTML+= content;
}


// Добавление товаров в корзину
const buttons = document.querySelectorAll('.add-button-catalog');
let catalogCards = document.querySelectorAll('.catalog__item');

buttons.forEach(button => {

    button.addEventListener('click', (event) => {
        console.log(buttons);
        let catalogItems = Array.from(catalogCards);
        let addToBasketItem = event.target.closest('div');
        let index = catalogItems.indexOf(addToBasketItem)

        let key = `в корзину ${catalogJson[index].id}`;

        window.localStorage.setItem(key, JSON.stringify(catalogJson[index]));
        
        makeMiniBasketItem(JSON.parse(window.localStorage.getItem(key)), key);
    })
})


//Для отрисовки товаров в корзине после перезагрузки страницы
for (let i = 0; i < catalogJson.length; i++) {
    let key = `в корзину ${catalogJson[i].id}`;

    window.addEventListener('DOMContentLoaded',() => {
        if(localStorage.getItem(key)){
            makeMiniBasketItem(JSON.parse(window.localStorage.getItem(key)));
    }
    });
}



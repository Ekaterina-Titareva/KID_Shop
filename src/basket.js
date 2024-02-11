// import { catalogJson } from "./index";
// import { makeBasketItem } from "./functions";

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


  function makeBasketItem (data, value) {
    let basketList = document.querySelector('.basket-list');
    let basketItem = document.createElement('li');

    let content = `
        <img src="${data.image}" alt="${data.name}"
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

            <div class="item-icons">
                <button>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt"
                        height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill=""
                            stroke="">
                            <path d="M1345 4509 c-264 -36 -502 -155 -690 -343 -153 -153 -257 -334 -312
    -543 -34 -129 -43 -362 -19 -498 30 -175 111 -365 217 -510 30 -41 448 -465
    1018 -1032 892 -889 969 -962 1000 -963 31 0 97 64 960 921 509 507 952 951
    984 987 140 160 227 337 275 556 23 108 22 359 -2 464 -79 354 -297 649 -596
    811 -177 95 -313 131 -525 138 -180 6 -275 -7 -427 -57 -194 -65 -313 -145
    -516 -344 l-152 -150 -158 155 c-86 86 -186 176 -222 201 -129 91 -303 164
    -459 194 -97 19 -286 26 -376 13z m303 -174 c151 -14 345 -95 488 -204 43 -33
    149 -130 234 -215 140 -141 158 -156 189 -156 32 0 51 16 210 173 195 193 265
    247 402 312 170 80 342 110 532 94 131 -11 236 -41 362 -103 279 -138 471
    -376 547 -683 29 -117 32 -351 5 -461 -37 -154 -99 -286 -192 -407 -30 -38
    -461 -477 -960 -975 l-905 -905 -906 905 c-523 523 -931 938 -965 984 -150
    197 -219 423 -206 675 19 376 233 700 572 867 124 61 230 92 355 103 84 8 112
    8 238 -4z" />
                        </g>
                    </svg>
                    В избранное
                </button>

                <button class="delete-btn">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt"
                        height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill=""
                            stroke="">
                            <path d="M1931 5109 c-77 -15 -182 -72 -240 -130 -97 -97 -140 -221 -141 -401
    l0 -78 -302 0 c-341 0 -416 -8 -506 -50 -81 -38 -178 -134 -215 -213 -84 -178
    -48 -384 90 -521 48 -48 161 -116 192 -116 8 0 11 -422 13 -1542 l3 -1543 27
    -80 c38 -111 92 -196 168 -269 79 -74 162 -120 266 -146 75 -19 115 -20 1274
    -20 1159 0 1199 1 1274 20 243 62 418 264 456 527 6 42 10 639 10 1560 l0
    1491 38 13 c143 46 267 199 293 359 27 169 -57 358 -202 451 -109 69 -126 72
    -510 77 l-346 4 -6 117 c-7 129 -28 204 -77 282 -67 104 -188 186 -309 209
    -66 12 -1186 12 -1250 -1z m1264 -251 c90 -49 126 -118 133 -255 l5 -103 -773
    0 -772 0 3 108 c4 95 7 112 32 154 15 26 41 57 58 69 69 49 66 49 694 46 528
    -2 593 -4 620 -19z m1080 -625 c51 -27 80 -58 101 -108 38 -92 6 -203 -75
    -260 l-43 -30 -1676 -3 c-1171 -2 -1688 0 -1714 8 -100 29 -164 144 -138 249
    19 79 82 141 165 162 17 4 775 6 1685 6 l1655 -2 40 -22z m-217 -2118 c2
    -1003 -1 -1492 -8 -1540 -21 -138 -93 -240 -208 -297 l-67 -33 -1189 -3
    c-1290 -3 -1256 -4 -1343 51 -82 52 -150 153 -172 255 -8 38 -11 479 -11 1548
    l0 1494 1498 -2 1497 -3 3 -1470z" />
                            <path d="M1772 3231 c-16 -17 -32 -44 -36 -62 -3 -17 -6 -542 -6 -1166 0
    -1209 -1 -1172 47 -1216 31 -27 84 -32 126 -12 71 34 67 -47 67 1240 0 1255 3
    1191 -54 1229 -14 9 -45 16 -70 16 -36 0 -50 -6 -74 -29z" />
                            <path d="M2488 3237 c-14 -12 -31 -32 -37 -44 -8 -15 -11 -361 -11 -1178 0
    -1287 -4 -1206 67 -1240 42 -20 95 -15 126 12 48 44 47 7 47 1216 0 624 -3
    1149 -6 1166 -4 18 -20 45 -36 62 -38 38 -109 41 -150 6z" />
                            <path d="M3184 3226 l-34 -34 0 -1171 c0 -1007 2 -1176 15 -1200 15 -31 69
    -61 108 -61 37 0 90 41 104 80 16 46 18 2276 3 2332 -15 54 -61 88 -117 88
    -38 0 -50 -5 -79 -34z" />
                        </g>
                    </svg>
                    Удалить
                </button>
            </div>
        </div>`;


    basketItem.setAttribute(`value`, value);
    basketItem.innerHTML+= content;
    basketList.appendChild(basketItem);
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
displayQuantity(itemQuantity)
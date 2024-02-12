
// Слайдер
// Список изображений и текущий индекс
const images = [
    './assets/images/advert1.jpg',
    './assets/images/advert2.jpg',
    './assets/images/advert3.jpg',
  ];
  
  let currentImageIndex = 0;
  const imageElement = document.getElementById("ad");
  
  // Функция для отображения текущего изображения
  function displayCurrentImage() {
      imageElement.src = images[currentImageIndex];
  }
  const prevButton = document.querySelector(".pre-btn");
  
  // Обработчик события для кнопки "Назад"
  prevButton.addEventListener("click", function() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      displayCurrentImage();
  });
  const nextButton = document.querySelector(".nxt-btn");
  
  // Обработчик события для кнопки "Вперед"
  nextButton.addEventListener("click", function() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      displayCurrentImage();
  });
  
  // Отображаем первое изображение при загрузке страницы
  displayCurrentImage();
  
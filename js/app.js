const popupBg = document.querySelector('.popup__body');
const popup = document.querySelector('.popup'); //окно
const openPopupButtons = document.querySelectorAll('.open-popup'); //показ окна
const closePopupButton = document.querySelector('.close-popup'); //Кнопка closed

openPopupButtons.forEach((button) => { // Перебор кнопок
  button.addEventListener('click', (e) => { //события на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add('open'); //add класс 'open' для фона
    popup.classList.add('open');
  })
});

closePopupButton.addEventListener('click', () => {
  popupBg.classList.remove('open'); // yбираем активный класс с фона
  popup.classList.remove('open');
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if (e.target === popupBg) { // Если цель клика - фот, то:
    popupBg.classList.remove('open'); // delete активный класс с фона
    popup.classList.remove('open'); //delete class с окна
  }
});
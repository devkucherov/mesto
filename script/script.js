let userName = document.querySelector('.profile__user-name'); // Находим поле имени в блоке profile
let userJob = document.querySelector('.profile__user-job'); // Находим поле работы в блоке profile
let editButton = document.querySelector('.edit-button'); // Находим кнопку редактирования данных в блоке profile
let popupElement = document.querySelector('.popup'); // Находим само окно 
let closeButton = document.querySelector('.popup__close-button'); // Нходим кнопку закрытия окна

// Находим форму в DOM
let formElement = document.querySelector('.popup__form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_type_job'); // Воспользуйтесь инструментом .querySelector()

// Функция открытия окна
function openPopup() {
	popupElement.classList.remove('popup_opened');
    nameInput.value = userName.textContent; // Вставляем в input окна значение поля имя из блока profile
    jobInput.value = userJob.textContent; // Вставляем в input окна значение поля работы из блока profile
}

// Функция закрытия окна
function closePopup() {
	popupElement.classList.add('popup_opened');
}

// Добавляем слушатель событий для кнопки редактировать профиль
editButton.addEventListener('click', openPopup)

// Добавляем слушатель событий для кнопки закрытия окна
closeButton.addEventListener('click', closePopup)

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
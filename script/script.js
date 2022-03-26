let userName = document.querySelector('.profile__user-name'); // Находим поле имени в блоке profile
let userJob = document.querySelector('.profile__user-job'); // Находим поле работы в блоке profile
let editButton = document.querySelector('.edit-button'); // Находим кнопку редактирования данных в блоке profile
let popupElement = document.querySelector('.pop-up'); // Находим само окно 
let closeButton = document.querySelector('.pop-up__close-button'); // Нходим кнопку закрытия окна

// Находим форму в DOM
let formElement = document.querySelector('.pop-up__form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.pop-up__user-name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.pop-up__user-job'); // Воспользуйтесь инструментом .querySelector()

function openPopup() {
	popupElement.classList.remove('pop-up__open');
}

function closePopup() {
	popupElement.classList.add('pop-up__open');
}

editButton.addEventListener('click', openPopup)
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

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
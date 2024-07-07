//1. Ищем объекты формы в HTML документе для дальнейшего взаимодействия.
const mainForm = document.forms.mainForm;
const inputName = mainForm.userName;
const inputNamePlaceholder = inputName.placeholder;
const inputEmail = mainForm.userEmail;
const inputEmailPlaceholder = inputEmail.placeholder;
const inputAge = mainForm.userAge;
const inputAgePlaceholder = inputAge.placeholder;
const inputGenderMale = document.querySelector(`#radio-male`);
const inputGenderFemale = document.querySelector(`#radio-female`);
const selectProfession = mainForm.userProfession;
const inputPassword = mainForm.userPassword;
const inputPasswordPlaceholder = inputPassword.placeholder;
const checkboxAgree = mainForm.userAgree;
const submitButton = mainForm.querySelector('button[type="submit"]');

//2. Ищем объекты формы в HTML документе для вывода сообщений об ошибках в дальнейшем взаимодействия.
const errorUserName = document.querySelector(`.error__userName`);
const errorUserEmail = document.querySelector(`.error__userEmail`);
const errorUserAge = document.querySelector(`.error__userAge`);
const errorUserGender = document.querySelector(`.error__userGender`);
const errorUserProfession = document.querySelector(`.error__userProfession`);
const errorUserPassword = document.querySelector(`.error__userPassword`);
const errorCheckboxAgree = document.querySelector(`.error__checkboxAgree`);

//3. Ищем объекты формы в HTML документе для изменения стилей при дальнейшем взаимодействии.
const inputNameClass = document.querySelector(`.input__box--name`);
const inputEmailClass = document.querySelector(`.input__box--email`);
const inputAgeClass = document.querySelector(`.input__box--age`);
const inputRadioClass = document.querySelector(`.input__box-radio`);
const inputProfessionClass = document.querySelector(`.input__box-profession`);
const inputPasswordClass = document.querySelector(`.input__box--password`);
const inputCheckboxClass = document.querySelector(`.checkbox__box`);


//4 Валидация имени - проверка имени пользователя на корректность введенных данных
function validateName(name) {
	let regex = /^[A-Za-z\s]+$/g; //содержит только буквы и пробелы
	return regex.test(name);
}

//5 Валидация email - проверка адреса электронной почты на корректность введенных данных
function validateEmail(email) {
	let regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
	return regex.test(email);
}

//6 Валидация пароля - проверка пароля пользователя на корректность введенных данных
function validatePassword(password) {
	let regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
	return regex.test(password);
}


//7 Расширенная валидация имени пользователя (функция еще не вызывается)
function checkFormValidityName() {
	//(если поле пустое - появляются сообщения об ошибке)
	if (inputName.value === "") {
		errorUserName.textContent = `Введите имя пользователя`;
		errorUserName.classList.add('error__message');
		inputNameClass.classList.add('error');
		inputNameClass.style.margin = "1.875rem 0 1rem 0";
	} else if (validateName(inputName.value) === false) {
		//(если имя введено некорректно - появляются сообщения об ошибке)
		errorUserName.textContent = `Имя должно содержать только буквы и пробелы`;
		errorUserName.classList.add('error__message');
		inputNameClass.classList.add('error');
		inputNameClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если имя введено корректно - сообщения об ошибке исчезают)
		errorUserName.textContent = ``;
		errorUserName.classList.remove('error__message');
		inputNameClass.classList.remove('error');
		inputNameClass.style.margin = "1.875rem 0";
	}
}

//8 Расширенная валидация электронной почты пользователя (функция еще не вызывается)
function checkFormValidityEmail() {
	//(если поле пустое - появляются сообщения об ошибке)
	if (inputEmail.value === "") {
		errorUserEmail.textContent = `Введите электронную почту`;
		errorUserEmail.classList.add('error__message');
		inputEmailClass.classList.add('error');
		inputEmailClass.style.margin = "1.875rem 0 1rem 0";
	} else if (validateEmail(inputEmail.value) === false) {
		//(если электронная почта введена некорректно - появляются сообщения об ошибке)
		errorUserEmail.textContent = `Введите корректный email`;
		errorUserEmail.classList.add('error__message');
		inputEmailClass.classList.add('error');
		inputEmailClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если электронная почта введена корректно - сообщения об ошибке исчезают)
		errorUserEmail.textContent = ``;
		errorUserEmail.classList.remove('error__message');
		inputEmailClass.classList.remove('error');
		inputEmailClass.style.margin = "1.875rem 0";
	}
}

//9 Расширенная валидация возраста пользователя (функция еще не вызывается)
function checkFormValidityAge() {
	//(если поле пустое - появляются сообщения об ошибке)
	if (inputAge.value === "") {
		errorUserAge.textContent = `Введите возраст`;
		errorUserAge.classList.add('error__message');
		inputAgeClass.classList.add('error');
		inputAgeClass.style.margin = "1.875rem 0 1rem 0";
	} else if (Number(inputAge.value) >= 1 && Number(inputAge.value) <= 120) {
		//(если возраст введен некорректно - появляются сообщения об ошибке)
		errorUserAge.textContent = ``;
		errorUserAge.classList.remove('error__message');
		inputAgeClass.classList.remove('error');
		inputAgeClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если возраст введен корректно - сообщения об ошибке исчезают)
		errorUserAge.textContent = `Введите корректный возраст`;
		errorUserAge.classList.add('error__message');
		inputAgeClass.classList.add('error');
		inputAgeClass.style.margin = "1.875rem 0 1rem 0";
	}
}

//10 Расширенная валидация пола пользователя (функция еще не вызывается)
function checkFormValidityGender() {
	if (!inputGenderMale.checked && !inputGenderFemale.checked) {
		//(если пол не выбран - появляются сообщения об ошибке)
		errorUserGender.textContent = `Выберите пол`;
		errorUserGender.classList.add('error__message');
		inputRadioClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если пол выбран - сообщения об ошибке исчезают)
		errorUserGender.textContent = ``;
		errorUserGender.classList.remove('error__message');
		inputRadioClass.style.margin = "1.875rem 0 1rem 0";
	}
}

//11 Расширенная валидация профессии пользователя (функция еще не вызывается)
function checkFormValidityProfession() {
	//(если поле пустое (профессия не выбрана) - появляются сообщения об ошибке)
	if (selectProfession.value === "") {
		errorUserProfession.textContent = `Выберите профессию`;
		errorUserProfession.classList.add('error__message');
		inputProfessionClass.classList.add('error');
		inputProfessionClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если профессия выбрана - сообщения об ошибке исчезают)
		errorUserProfession.textContent = ``;
		errorUserProfession.classList.remove('error__message');
		inputProfessionClass.classList.remove('error');
		inputProfessionClass.style.margin = "1.875rem 0";
	}
}

//12 Расширенная валидация пароля пользователя (функция еще не вызывается)
function checkFormValidityPassword() {
	//(если поле пустое - появляются сообщения об ошибке)
	if (inputPassword.value === "") {
		errorUserPassword.textContent = `Введите пароль`;
		errorUserPassword.classList.add('error__message');
		inputPasswordClass.classList.add('error');
		inputPasswordClass.style.margin = "1.875rem 0 1rem 0";
	} else if (validatePassword(inputPassword.value) === false) {
		//(если пароль введен некорректно - появляются сообщения об ошибке)
		errorUserPassword.textContent =
			`Пароль должен содержать минимум 8 символов - есть заглавная буква, строчная буква, символ !@#$&* и цифра`;
		errorUserPassword.classList.add('error__message');
		inputPasswordClass.classList.add('error');
		inputPasswordClass.style.margin = "1.875rem 0 1rem 0";
	} else {
		//(если пароль введен корректно - сообщения об ошибке исчезают)
		errorUserPassword.textContent = ``;
		errorUserPassword.classList.remove('error__message');
		inputPasswordClass.classList.remove('error');
		inputPasswordClass.style.margin = "1.875rem 0";
	}
}

//13 Расширенная валидация согласия пользователя (функция еще не вызывается)
function checkFormValidityAgree() {
	if (!checkboxAgree.checked) {
		//(если согласие не отмечено - появляется сообщение об ошибке)
		submitButton.disabled = true;
		errorCheckboxAgree.textContent = `Необходимо согласие с условиями`;
		errorCheckboxAgree.classList.add('error__message');
		errorCheckboxAgree.classList.add('error__message--checkbox');
		inputCheckboxClass.style.margin = "1.875rem 0 1rem 0";
		inputCheckboxClass.style.padding = "0";
	} else {
		//(если согласие отмечено - сообщение об ошибке исчезает)
		errorCheckboxAgree.textContent = ``;
		errorCheckboxAgree.classList.remove('error__message');
		errorCheckboxAgree.classList.remove('error__message--checkbox');
		inputCheckboxClass.style.margin = "-0.9375rem 0 .9375rem";
		inputCheckboxClass.style.padding = "1.25rem 0 1.25rem 0";
	}
}

//14 Проверка на валидность введенного имени пользователем
//(событие input срабатывает при вводе или удалении каждого символа)
inputName.addEventListener(`input`, checkFormValidityName);
//15 Событие focus активируется, когда элемент формы получает фокус
//очищаем placeholder и добавляем класс focus для поля ввода
inputName.addEventListener(`focus`, function (event) {
	inputName.placeholder = "";
	inputNameClass.classList.add('focus');
});
//16 Событие blur срабатывает, когда элемент теряет фокус
//возврат стилей к исходному состоянию
inputName.addEventListener(`blur`, function (event) {
	inputName.placeholder = inputNamePlaceholder;
	inputNameClass.classList.remove('focus');
});


//17 Проверка на валидность введенного email пользователем
//(событие input срабатывает при вводе или удалении каждого символа)
inputEmail.addEventListener(`input`, checkFormValidityEmail);
//18 Событие focus активируется, когда элемент формы получает фокус
//очищаем placeholder и добавляем класс focus для поля ввода
inputEmail.addEventListener(`focus`, function (event) {
	inputEmail.placeholder = "";
	inputEmailClass.classList.add('focus');
});
//19 Событие blur срабатывает, когда элемент теряет фокус
//возврат стилей к исходному состоянию
inputEmail.addEventListener(`blur`, function (event) {
	inputEmail.placeholder = inputEmailPlaceholder;
	inputEmailClass.classList.remove('focus');
});


//20 Проверка на валидность введенного возраста пользователем
//(событие input срабатывает при вводе или удалении каждого символа)
inputAge.addEventListener(`input`, checkFormValidityAge);
//21 Событие focus активируется, когда элемент формы получает фокус
//очищаем placeholder и добавляем класс focus для поля ввода
inputAge.addEventListener(`focus`, function (event) {
	inputAge.placeholder = "";
	inputAgeClass.classList.add('focus');
});
//22 Событие blur срабатывает, когда элемент теряет фокус
//возврат стилей к исходному состоянию
inputAge.addEventListener(`blur`, function (event) {
	inputAge.placeholder = inputAgePlaceholder;
	inputAgeClass.classList.remove('focus');
});


//23 Проверка на валидность выбранного пола пользователем
//(событие change срабатывает при изменении значения элемента формы (переключении радиокнопок))
inputGenderMale.addEventListener(`change`, checkFormValidityGender);
inputGenderFemale.addEventListener(`change`, checkFormValidityGender);


//24 Проверка на валидность выбранной профессии пользователем
//(событие change срабатывает при изменении значения элемента формы (выборе варианта из выпадающего списка))
selectProfession.addEventListener(`change`, checkFormValidityProfession);
//25 Событие focus активируется, когда элемент формы получает фокус
//добавляем класс focus для выпадающего списка
selectProfession.addEventListener(`focus`, function (event) {
	inputProfessionClass.classList.add('focus');
});
//26 Событие blur срабатывает, когда элемент теряет фокус
//возврат стилей к исходному состоянию
selectProfession.addEventListener(`blur`, function (event) {
	inputProfessionClass.classList.remove('focus');
});


//27 Проверка на валидность введенного пароля пользователем
//(событие input срабатывает при вводе или удалении каждого символа)
inputPassword.addEventListener(`input`, checkFormValidityPassword);
//28 Событие focus активируется, когда элемент формы получает фокус
//очищаем placeholder и добавляем класс focus для поля ввода
inputPassword.addEventListener(`focus`, function (event) {
	inputPassword.placeholder = "";
	inputPasswordClass.classList.add('focus');
});
//29 Событие blur срабатывает, когда элемент теряет фокус
//возврат стилей к исходному состоянию
inputPassword.addEventListener(`blur`, function (event) {
	inputPassword.placeholder = inputPasswordPlaceholder;
	inputPasswordClass.classList.remove('focus');
});


//30 Проверка на валидность согласия пользователем
//(событие change срабатывает при изменении значения элемента формы (стоит ли галочка))
checkboxAgree.addEventListener(`change`, checkFormValidityAgree);


//31 Проверка на валидность всех введенных данных пользователем
//(событие change срабатывает при изменении значения элемента формы)
mainForm.addEventListener(`change`, function (event) {
	checkFormValidityName();
	checkFormValidityEmail();
	checkFormValidityAge();
	checkFormValidityGender();
	checkFormValidityProfession();
	checkFormValidityPassword();
	checkFormValidityAgree();

	//добавление стилей для кнопки (кнопка станет активной, если нет сообщений об ошибках и галочка стоит на согласии)
	if (document.querySelectorAll('.error__message').length === 0 && checkboxAgree.checked) {
		submitButton.disabled = false;
		submitButton.style.backgroundColor = "#df6ae1";
		submitButton.style.color = "#FFFFFF";
	} else {
		//возврат стилей к исходному состоянию (кнопка станет неактивной, если есть сообщения об ошибках и галочка не стоит на согласии)
		submitButton.disabled = true;
		submitButton.style.backgroundColor = "#ffffff6f";
		submitButton.style.color = "#333333";
	}
});


//32 Повторная на валидность всех введенных данных пользователем
//(событие submit срабатывает при отправке формы)
mainForm.addEventListener('submit', function (event) {
	//предотвращаем перезагрузку страницы и автоматическую отправку данных
	event.preventDefault();

	checkFormValidityName();
	checkFormValidityEmail();
	checkFormValidityAge();
	checkFormValidityGender();
	checkFormValidityProfession();
	checkFormValidityPassword();
	checkFormValidityAgree();

	if (document.querySelectorAll('.error__message').length === 0 && checkboxAgree.checked) {
		submitButton.disabled = false;
		submitButton.style.backgroundColor = "#FFFFFF";
		submitButton.style.color = "#333333";
		//выводим в консоль значения полей формы после отправки
		console.log({
			userName: inputName.value,
			userEmail: inputEmail.value,
			userAge: inputAge.value,
			userGender: inputGenderMale.checked ? 'male' : 'female',
			userProfession: selectProfession.value,
			userPassword: inputPassword.value,
			userAgree: checkboxAgree.checked
		});
		//очищаем форму
		mainForm.reset();
		//выводим сообщение для пользователя об успешной регистрации
		alert(`Поздравляем с успешной регистрацией!`)
		//возврат стилей кнопки к исходному состоянию
		submitButton.style.backgroundColor = "#ffffff6f";
		submitButton.style.color = "#333333";
	}
});
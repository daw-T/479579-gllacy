var loginLink = document.querySelector(".login-link");
var loginPopup = document.querySelector(".modal-login");
var loginClose = loginPopup.querySelector(".modal-close");
var loginForm = loginPopup.querySelector(".login-form");
var inputMail = document.querySelector("[name=mail]");
var inputPassword = document.querySelector("[name=password]");
var overlay = document.querySelector(".overlay");


var isStorage = true;
var storage =""

loginLink.addEventListener("mouseover", function (evt) {
	evt.preventDefault();
	loginPopup.classList.add("modal-show");
	overlay.classList.add("modal-show");
	inputMail.focus();
	if (storage) {
		login.value = storage;
	}
});

loginClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	loginPopup.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});	

loginForm.addEventListener("submit", function (evt) {
	evt.preventDefault();
	if (!inputMail.value || !password.value){
		evt.preventDefault();
		console.log(inputMail);
		console.log("Нужно ввести адрес почты и пароль");
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem ("mail", inputMail.value);
	}
});	

try {
	storage = localStorage.getItem("mail");
} catch (err) {
	isStorageSupport = false
}

var searchLink = document.querySelector(".search");
var searchPopup = document.querySelector(".modal-search");
var searchClose = searchPopup.querySelector(".modal-close");

searchLink.addEventListener("mouseover", function (evt) {
	evt.preventDefault();
	searchPopup.classList.add("modal-show");
	overlay.classList.add("modal-show");
});

searchClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	searchPopup.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
});	

var mapLink = document.querySelector(".main-map");
var mapPopup = document.querySelector(".modal-map");
if (mapPopup !== null){
	var mapClose = mapPopup.querySelector(".modal-close");
	
	mapLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-show");
	});

	mapClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-show");
	});	
}

var feedbackLink = document.querySelector(".button-main-contacts");
var feedbackPopup = document.querySelector(".modal-feedback");
if (feedbackPopup !== null){
	var feedbackClose = feedbackPopup.querySelector(".modal-feedback-close");

	feedbackLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedbackPopup.classList.add("modal-show");
		overlay.classList.add("modal-show");
	});

	feedbackClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		feedbackPopup.classList.remove("modal-show");
		overlay.classList.remove("modal-show");
	});	
}	

var basketLink = document.querySelector(".basket-full");
var basketPopup = document.querySelector(".modal-basket");
if (basketPopup !== null){
	var basketClose = basketPopup.querySelector(".modal-basket-close");

	basketLink.addEventListener("mouseover", function (evt) {
		evt.preventDefault();
		basketPopup.classList.add("modal-show");
		overlay.classList.add("modal-show");
	});

	basketClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		basketPopup.classList.remove("modal-show");
		overlay.classList.remove("modal-show");
	});	
}

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		
		if (loginPopup.classList.contains("modal-show")) {
			loginPopup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
		if (searchPopup.classList.contains("modal-show")) {
			searchPopup.classList.remove("modal-show");
		}	
		if (mapPopup !== null){
			if (mapPopup.classList.contains("modal-show")) {
				mapPopup.classList.remove("modal-show");
			}
		}
		if (feedbackPopup !== null){
			if (feedbackPopup.classList.contains("modal-show")) {
				feedbackPopup.classList.remove("modal-show");
			}
		}
		if (basketPopup !== null){
			if (basketPopup.classList.contains("modal-show")) {
				basketPopup.classList.remove("modal-show");
			}
		}
		
		overlay.classList.remove("modal-show");
	}
});	

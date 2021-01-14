let modalCloseBtn = document.querySelectorAll('.modal-window__wrapper');
let modalOpenBtn = document.querySelectorAll('.btn-open-modal');
let modalWindow = document.querySelectorAll('.modal-window');

modalOpenBtn.forEach((e) => {
	e.addEventListener('click', openWindow)
})

function openWindow() {
	let data = this.getAttribute('data-modal')
	event.preventDefault();
	modalCloseBtn.forEach((e) => {
		e.classList.add('hide');
	})
	document.querySelector(`.modal-window__wrapper[data-modal='${data}']`).classList.remove('hide');
}

modalCloseBtn.forEach((e) => {
	e.addEventListener('click', modalClose);
})

document.querySelectorAll(".modal__close").forEach((e) => {
	e.addEventListener('click', modalClose)
})

function modalClose() {
	modalCloseBtn.forEach((e) => {
		e.classList.add('hide');
	})
}

modalWindow.forEach((e) => {
	e.addEventListener('click', stopProp)
})

function stopProp() {
	event.stopPropagation();
}
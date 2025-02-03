let text = document.querySelector('.text')

//3 блока для тренеровки с событиями и e.target
document.querySelector('.inner').addEventListener('click', function(e) {
	text.textContent = 'Клик на inner'
	e.stopPropagation()
	console.log('Клик на inner, this: ', this, 'e.target:', e.target)
})

document.querySelector('.middle').addEventListener('click', function(e) {
	text.textContent = 'Клик на middle'
	e.stopPropagation()
	console.log('Клик на middle, this: ', this, 'e.target: ', e.target)
	
})

document.querySelector('.outher').addEventListener('click', function(e) {
	text.textContent = 'Клик на outher'
	e.stopPropagation()
	console.log('Клик на outher, this: ', this, 'e.target: ', e.target) 
})

//Функция создания текстого элемента для проверки Event Loop
function createElement(content) {
	const p = document.createElement('p')
	p.innerHTML = content
	p.classList.add('async-text')
	document.querySelector('.async-text').append(p)
}

//Тренеруюсь с Event Loop
document.querySelector('.async-button').addEventListener('click', function() {
	let elementText = document.querySelector('.async-text')
	elementText.innerHTML = ''

	createElement('Старт Таймера')
	setTimeout(() => createElement('Таймер завершен'), 0)
	Promise.resolve().then(() => createElement('Promise выполнен'))
	createElement('Конец кода')

	setTimeout(() => elementText.innerHTML = '', 3000)
})
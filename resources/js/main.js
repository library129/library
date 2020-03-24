(function() {
		const headings = document.querySelectorAll('h2.collapsible-headline');
		Array.prototype.forEach.call(headings, heading => {
			let btn = heading.querySelector('button');
			let target = heading.nextElementSibling;
			btn.onclick = () => {
				let expanded =
					btn.getAttribute('aria-expanded') === 'true' || false;
				btn.setAttribute('aria-expanded', !expanded);
				target.hidden = expanded;
			}
		})
	})()

let body = document.querySelector('body');
let nav = document.querySelector('nav');
let menuBtn = document.querySelector('.menu__btn');
let menuItem = document.querySelector('.menu__list');
let searchInput = document.querySelector('input');
let searchButton = document.querySelector('.search__btn');
let checked = false;

function changeMenu() {
	let windowWidth = window.innerWidth;
	if (windowWidth > 900) {
		nav.setAttribute('class', 'desktop-nav');
		menuBtn.style.display = 'none';
		menuItem.style.display = 'flex';
	} else {
		nav.removeAttribute('class', 'desktop-nav');
		menuBtn.style.display = 'block';
		menuItem.style.display = 'none';
	} 
}

function checkedMenu() {
	if (!checked) {
		menuItem.style.display = 'flex';
		menuBtn.style.backgroundColor = 'white';
		menuBtn.style.color = 'black';
		checked = true;
	} else {
		menuItem.style.display = 'none';
		menuBtn.style.backgroundColor = 'rgb(230, 183, 64)';
		menuBtn.style.color = 'white';
		checked = false;
	}  
}

function searchBooks() {
	fetch("./resources/catalog/catalog.json")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let result = (data['books'].join().toLowerCase().includes(searchInput.value.toLowerCase().trim()))
            if (result) {
				alert('Книга найдена в фонде библиотеки. Для бронирования книги позвоните или напишите нам');
				searchInput.focus();
            } else {
                alert('Книга не найдена');
            }
        })
        .catch((e) => {
            console.log(e)
		})
}

searchButton.addEventListener('click', searchBooks)
menuBtn.addEventListener('click', checkedMenu);
window.addEventListener('resize', changeMenu);
document.onload = changeMenu()
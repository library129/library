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
const other = document.querySelector('#other');
const ulOther = document.querySelector('.ulOther');
function showHideMenu(id) {
				let x = document.getElementById(id);
				if (x.style.display === 'none') {
					x.style.display = 'block';
				} else {
					x.style.display = 'none';
				}
			}

function day(id) {
	let d = new Date();
	let weekday = new Array(7);
				weekday[0] = "Сегодня библиотека работает <br> с <b>12:00 до 20:00";
				weekday[1] = "Сегодня библиотека не работает";
				weekday[2] = "Сегодня библиотека работает <br> с 10:00 до 22:00. <br> Последний вторник месяца - санитарный день <br> (только прием книг и занятия в студиях)";
				weekday[3] = "Сегодня библиотека работает <br> с 10:00 до 22:00";
				weekday[4] = "Сегодня библиотека работает <br> с 10:00 до 22:00";
				weekday[5] = "Сегодня библиотека работает <br> с 10:00 до 22:00";
				weekday[6] = "Сегодня библиотека работает <br> с 10:00 до 22:00";

	let n = weekday[d.getDay()];
	document.getElementById(id).innerHTML = n;
}
const menu = document.querySelector('.menu__box');
const html = document.querySelector('html');
const theme = document.querySelector('.theme');
let date = new Date();
let month =  date.getMonth() + 1;
let hour = date.getHours();

function updateTheme(bgColor, textColor) {
		html.style.backgroundColor = bgColor;
		html.style.color = textColor;
}

function themeWithGetDate() {
	if (month === 10 || month === 11 || month === 12 || month === 1 || month === 2 || month === 3) {
		if (hour >= 17 || hour <= 8) {
			updateTheme('black', 'white')
			theme.textContent = 'Ночной режим включен';
			theme.style.color = '#f52525';
			theme.style.borderColor = '#f52525';
		} else {
			updateTheme('white', 'black');
			theme.style.display = 'none';
		}
	} else if (month === 4 || month === 9){
		if (hour >= 19 || hour <= 7) {
			updateTheme('black', 'white')
			theme.textContent = 'Включена темная тема';
			theme.style.color = '#f52525';
			theme.style.borderColor = '#f52525';
		} else {
			updateTheme('white', 'black');
			theme.style.display = 'none';
		}
	} else {
		if (hour >= 21 || hour <= 6) {
			updateTheme('black', 'white')
			theme.textContent = 'Включена темная тема';
			theme.style.color = '#f52525';
			theme.style.borderColor = '#f52525';
		} else {
			updateTheme('white', 'black');
			theme.style.display = 'none';
		}
	}
}


themeWithGetDate()
day('day')
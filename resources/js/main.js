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
let menuBtn = document.querySelector('.menu__btn');
let menuItem = document.querySelector('.menu__list');
/*let h2 = document.querySelector('.collapsible-headline')
let main = document.querySelectorAll('main')*/

let checked = false;
menuBtn.addEventListener('click', () => {
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
})
function covid() {

/*let date = new Date();
let hour = date.getHours();
function changeTheme(hour) {
	if (hour > 18 || hour < 7) {
		body.style.backgroundColor = 'black';
		body.style.color = 'white';
		h2.style.color = 'white';
		para.style.backgroundColor = 'black';
	}
}
changeTheme(hour)*/

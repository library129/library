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

let searchInput = document.querySelector('input');
let searchButton = document.querySelector('.search__btn');

let searchResults = document.querySelector('#searchResults')

function searchBooks() {
	fetch("./resources/catalog/catalog.json")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let result = (data['books'].join().toLowerCase().includes(searchInput.value.toLowerCase().trim()))
			searchResults.textContent = '';
			if (result) {
				searchResults.textContent = 'Книга найдена в фонде библиотеки. Для бронирования книги позвоните или напишите нам';
				searchInput.focus();
            } else {
                searchResults.textContent = 'Книга не найдена';
            }
        })
        .catch((e) => {
            console.log(e)
		})
}

searchButton.addEventListener('click', (event) => {
	event.preventDefault();
	searchBooks();
})

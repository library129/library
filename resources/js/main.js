"use strict";

(function () {
  var headings = document.querySelectorAll('h2.collapsible-headline');
  Array.prototype.forEach.call(headings, function (heading) {
    var btn = heading.querySelector('button');
    var target = heading.nextElementSibling;

    btn.onclick = function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true' || false;
      btn.setAttribute('aria-expanded', !expanded);
      target.hidden = expanded;
    };
  });
})();

var searchInput = document.querySelector('input');
var searchButton = document.querySelector('.search__btn');
var searchResults = document.querySelector('#searchResults');

function searchBooks() {
  fetch("./resources/catalog/catalog.json").then(function (response) {
    return response.json();
  }).then(function (data) {
    var result = data['books'].join().toLowerCase().includes(searchInput.value.toLowerCase().trim());
    searchResults.textContent = '';

    if (result) {
      searchResults.textContent = 'Книга найдена в фонде библиотеки. Для бронирования книги позвоните или напишите нам';
      searchInput.focus();
    } else {
      searchResults.textContent = 'Книга не найдена';
    }
  })["catch"](function (e) {
    console.log(e);
  });
}

searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  searchBooks();
});

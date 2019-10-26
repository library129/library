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
function showHideMenu(id) {
        let x = document.getElementById(id);
        if (x.style.display === 'none') {
          x.style.display = 'flex';
        } else {
          x.style.display = 'none';
        }
      }
function day(id) {
  let d = new Date();
  let weekday = new Array(7);
        weekday[0] = "Сегодня библиотека работает <br> с 12:00 до 20:00";
        weekday[1] = "Сегодня библиотека не работает";
        weekday[2] = "Сегодня библиотека работает <br> с 10:00 до 22:00";
        weekday[3] = "Сегодня библиотека работает <br> с 10:00 до 22:00";
        weekday[4] = "Сегодня библиотека работает <br> с 10:00 до 22:00";
        weekday[5] = "Сегодня библиотека работает <br> с 10:00 до 22:00";
        weekday[6] = "Сегодня библиотека работает <br> с 10:00 до 22:00";

  let n = weekday[d.getDay()];
  document.getElementById(id).innerHTML = n;
}
day("day");

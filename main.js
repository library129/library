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
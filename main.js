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
let menuToggle = document.querySelector('#menu__toggle');
let main = document.querySelector('main');
let footer = document.querySelector('footer');
let checked = false;
menuToggle.addEventListener('click', () => {
  if (!checked) {
    document.body.style.overflow = 'hidden';
    main.style.pointerEvents = 'none';
    footer.style.pointerEvents = 'none';
    main.style.opacity = '0.4';
    footer.style.opacity = '0.4';
    checked = true;
  } else {
    document.body.style.overflow = 'scroll';
    main.style.pointerEvents = 'auto';
    footer.style.pointerEvents = 'auto';
    main.style.opacity = '1';
    footer.style.opacity = '1';
    checked = false;
  }  
})
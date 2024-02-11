"use strict";

console.log('Buongiorno!');
Array.from(document.querySelectorAll('button[aria-expanded]')).forEach(function (button) {
  button.addEventListener('click', function (e) {
    var expanded = button.getAttribute('aria-expanded') === 'true' || false;
    button.setAttribute('aria-expanded', String(!expanded));
    button.innerText = !expanded ? 'Свернуть' : 'Подробнее';
    button.nextElementSibling.hidden = expanded;
  }); // По дефолту скрываем все раскрываемые блоки

  button.click();
  button.click();
});
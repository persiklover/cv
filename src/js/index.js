console.log('Buongiorno!');

[...document.querySelectorAll('button[aria-expanded]')].forEach(function(button) {
  button.addEventListener('click', function(e) {
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;
    button.setAttribute('aria-expanded', !expanded);
    button.innerText = !expanded ? 'Свернуть' : 'Подробнее';

    button.nextElementSibling.hidden = expanded;
  });

  // По дефолту скрываем все раскрываемые блоки 
  button.click();
});


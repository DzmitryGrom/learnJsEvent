(function () {
  'use strict'

  showMenu(menu, 100, 10);

  function showMenu(element, x, y) {
    let classList = element.classList,
        style = element.style,
        hideClass = 'hide',
        pxUnit = 'px';

    style.left = x + pxUnit;
    style.top = y + pxUnit;

    classList.remove(hideClass);

    element.addEventListener('click', () => {
      classList.add(hideClass);
  },
    {
      once: true
    }
  )};

  document.addEventListener('contextmenu', function (e) {
    event.preventDefault();

    let x = event.clientX,
        y = event.clientY;

    showMenu(menu, x, y);

  }, false);

})();
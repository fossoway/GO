const items = document.querySelectorAll('.faq__item');
const buttons = document.querySelectorAll('.faq__button');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i += 1) {
      if (index === i) {
        items[i].classList.toggle('faq_active');
      } else {
        items[i].classList.remove('faq_active');
      }
    }
  });
});

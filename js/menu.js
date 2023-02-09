const menu = document.querySelector('.header__menu-full').cloneNode(true);
const popap = document.querySelector('.header__popap');
const menuBtn = document.querySelector('.header__hamb');
const requestCall = document.querySelector('.header__button').cloneNode(true);


popap.append(menu, requestCall);

const duration = 500;
const distance = 493;

const startAnimation = (duration, callback) => {
  let start = NaN;

  requestAnimationFrame(function step(timestamp) {
    start ||= timestamp;
    const progress = (timestamp - start) / duration;

    callback(progress);
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  })
};

menuBtn.addEventListener('click', () => {
  popap.classList.toggle('is-visible');
  menu.classList.toggle('open');
  document.body.classList.toggle('overflow');
  requestCall.classList.toggle('open-button');


  startAnimation(duration, (progress) => {
    const top = progress * distance;
    popap.style.transform =  `translateY(${top}px`;
  })
});

popap.addEventListener('click', e => {
  if (e.target === e.target.closest('.header__link') || e.target === requestCall) {
    popap.classList.remove('is-visible');
    menu.classList.remove('open');
    document.body.classList.remove('overflow');
    requestCall.classList.remove('open-button');
  }
});



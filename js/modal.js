const formOverlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const buttonRequest = document.querySelectorAll('.header__button');
const form = document.querySelector('.modal__form');


const openModal = () => {
  formOverlay.classList.add('is-visible');
};

const closeModal = () => {
  formOverlay.classList.remove('is-visible');
};

buttonRequest.forEach(btn => {
  btn.addEventListener('click', openModal)
})

formOverlay.addEventListener('click', e => {
  if (e.target === formOverlay) {
    closeModal();
  }
});

modal.addEventListener('click', e => {
  if (e.target.closest('.modal__close')) {
    closeModal();
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);

  closeModal();
});

const inputTel = document.querySelector('#modalPhone');
const telMask = new Inputmask('+7 (999) 999-99-99');

telMask.mask(inputTel);

const validation = new JustValidate('.modal__form');

validation
  .addField('#modalName', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Не менее 2 символов',
    },
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
  ])
  .addField('#modalPhone', [
    {
      rule: 'required',
      errorMessage: 'Введите телефон',
    }
  ])
import { refs } from './js/refs';
import { handleImagesSearch } from './js/handlers';

refs.form.addEventListener('submit', handleImagesSearch);

window.addEventListener('scroll', () => {
  const halfViewport = window.innerHeight / 3;

  if (window.scrollY > halfViewport) {
    refs.scrollToTopBtn.classList.remove('invisible');
  } else {
    refs.scrollToTopBtn.classList.add('invisible');
  }
});

refs.scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

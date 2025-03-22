import { refs } from './js/refs';
import { handleImagesSearch } from './js/handlers';
import { scrollConfig } from './js/constants';

refs.form.addEventListener('submit', handleImagesSearch);

window.addEventListener('scroll', () => {
  const scrollThreshold =
    scrollConfig.scrollY > 0
      ? scrollConfig.scrollY - 1
      : window.innerHeight / 3;

  if (window.scrollY > scrollThreshold) {
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

import { refs } from './refs';

import { iziToast } from './config/iziToast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './pixabay-api';
import { renderGallery } from './render-functions';
import { fetchOptions } from './constants';

export const handleImagesSearch = e => {
  e.preventDefault();
  refs.gallery.innerHTML = '';

  const input = refs.form.elements.search;

  const query = input.value.trim();

  if (query === '') {
    iziToast.show({
      message: 'Oops! Looks like you forgot to enter something.',
    });
    input.value = '';
    return;
  }

  refs.loadMoreBtn.classList.add('visually-hidden');
  refs.loader.classList.remove('hidden');

  refs.searchBtn.disabled = true;

  input.value = '';

  fetchOptions.query = query;
  fetchOptions.page = 1;

  getImages(fetchOptions)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message: `Sorry, there are no images matching your search query. Please try again!`,
        });
      }

      renderGallery(data.hits);

      const hasNextPage =
        fetchOptions.page * fetchOptions.perPage < data.totalHits;

      if (hasNextPage) {
        refs.loadMoreBtn.classList.remove('visually-hidden');
        refs.loadMoreBtn.disabled = false;

        refs.loadMoreBtn.addEventListener('click', handleLoadMore);
      }
    })
    .catch(err =>
      iziToast.show({
        message: `Sorry, something went wrong.: ${err}`,
      })
    )
    .finally(() => {
      refs.loader.classList.add('hidden');
      refs.searchBtn.disabled = false;
    });
};

export const handleLoadMore = () => {
  refs.loader.classList.remove('hidden');
  refs.loadMoreBtn.disabled = true;

  fetchOptions.page += 1;

  getImages(fetchOptions)
    .then(data => {
      renderGallery(data.hits);

      const hasNextPage =
        fetchOptions.page * fetchOptions.perPage < data.totalHits;

      if (!hasNextPage) {
        refs.loadMoreBtn.classList.add('visually-hidden');

        refs.loadMoreBtn.removeEventListener('click', handleLoadMore);

        iziToast.show({
          backgroundColor: '#FFA000',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    })
    .catch(err =>
      iziToast.show({
        message: `Sorry, something went wrong.: ${err}`,
      })
    )
    .finally(() => {
      refs.loader.classList.add('hidden');
      refs.loadMoreBtn.disabled = false;
    });
};

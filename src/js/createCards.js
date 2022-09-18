import getRefs from './get-refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = getRefs();
var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  overlayOpacity: 0.4,
  captionData: 'alt',
});

function createCardsImage({ params }) {
  const markup = params
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
      <a class="photo-card__item" href="${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>${likes}</b>
    </p>
    <p class="info-item">
      <b>${views}</b>
    </p>
    <p class="info-item">
      <b>${comments}</b>
    </p>
    <p class="info-item">
      <b>${downloads}</b>
    </p>
  </div>
</div>`;
      }
    )
    .join('');
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

function clearCardsImage() {
  refs.galleryContainer.innerHTML = '';
}

export { createCardsImage, clearCardsImage };

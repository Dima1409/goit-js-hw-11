import './sass/index.scss';
import getRefs from './js/get-refs';
import NotifyAlert from './js/notify';
import AxiosService from './js/api-service';
import { createCardsImage, clearCardsImage } from './js/createCards';
import simpleLightbox from 'simplelightbox';

const refs = getRefs();
const notify = new NotifyAlert();
const api = new AxiosService();

refs.searchForm.addEventListener('submit', onSubmitForm);

async function onSubmitForm(event) {
  event.preventDefault();

  api.query = event.currentTarget.elements.searchQuery.value;
  clearCardsImage();
  api.resetPage();

  try {
    const data = await api.fetchCards();
    if (!api.query || data.data.totalHits === 0) {
      return notify.onError();
    }
    console.log();
    notify.onSuccess(data.data.totalHits);
    createCardsImage(data.data);
  } catch (error) {
    console.log(error);
  }
}

fetch(
  `https://pixabay.com/api/?key=29999099-708b113120f887f079bd929c2&q=yellow+flowers&image_type=photo`
)
  .then(response => response.json())
  .then(data => console.log(data));

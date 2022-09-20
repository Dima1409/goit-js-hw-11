import './sass/index.scss';
import getRefs from './js/get-refs';
import NotifyAlert from './js/notify';
import LoadBtnMore from './js/btn-load-more';
import AxiosService from './js/api-service';
import { createCardsImage, clearCardsImage } from './js/createCards';

const refs = getRefs();
const notify = new NotifyAlert();
const api = new AxiosService();
const btnMore = new LoadBtnMore();

refs.searchForm.addEventListener('submit', onSubmitForm);
refs.btnLoadMore.addEventListener('click', onClickBtnLoadMore);

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
    notify.onSuccess(data.data.totalHits);
    createCardsImage(data.data);
    refs.btnLoadMore.classList.remove = 'is-hidden';
    btnMore.enableBtn();
  } catch (error) {
    console.warn(error);
  }
}

async function onClickBtnLoadMore() {
  try {
    btnMore.disableBtn();
    const data = await api.fetchCards();
    createCardsImage(data.data);
    btnMore.enableBtn();
    console.log(data.data.totalHits);
    console.log(api.currentPage);
    console.log(api.perPage);

    if (api.currentPage * api.perPage > data.data.totalHits) {
      btnMore.hideBtnLoadMore();
      notify.onSeachEndList();
    }
  } catch (error) {
    console.warn(error);
  }
}

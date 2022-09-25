import './sass/index.scss';
import getRefs from './js/get-refs';
import NotifyAlert from './js/notify';
import LoadBtnMore from './js/btn-load-more';
import AxiosService from './js/api-service';
import scrollBtn from './js/btn-top';
import { createCardsImage, clearCardsImage } from './js/createCards';
import smoothScrolling from './js/smooth-scrolling';

const refs = getRefs();
const notify = new NotifyAlert();
const api = new AxiosService();
const btnMore = new LoadBtnMore();
smoothScrolling();
scrollBtn();

refs.searchForm.addEventListener('submit', onSubmitForm);
refs.loadMore.addEventListener('click', onClickBtnLoadMore);
// document.addEventListener('scroll', smoothScrolling);
async function onSubmitForm(event) {
  event.preventDefault();

  api.query = event.currentTarget.elements.searchQuery.value;
  clearCardsImage();
  btnMore.hideBtnLoadMore();
  api.resetPage();

  console.log(api.query);

  try {
    const data = await api.fetchCards();
    if (api.query === '') {
      return notify.onSearchNull();
    }
    if (!api.query || data.data.totalHits === 0) {
      return notify.onError();
    }

    notify.onSuccess(data.data.totalHits);
    createCardsImage(data.data);
    console.log(data.data.totalHits);
    console.log(api.perPage);
    if (api.perPage > data.data.totalHits) {
      return btnMore.hideBtnLoadMore();
    }
    btnMore.showBtnLoadMore();
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

    if (api.currentPage * api.perPage >= data.data.totalHits) {
      btnMore.hideBtnLoadMore();
      notify.onSearchEndList();
    }
  } catch (error) {
    console.warn(error);
  }
}

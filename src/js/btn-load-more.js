import getRefs from './get-refs';

const refs = getRefs();

export default class LoadBtnMore {
  constructor() {}

  showBtnLoadMore() {
    refs.loadMore.classList.remove('is-hidden');
  }

  hideBtnLoadMore() {
    refs.loadMore.classList.add('is-hidden');
  }

  enableBtn() {
    refs.loadMore.disabled = false;
    return;
  }

  disableBtn() {
    refs.loadMore.disabled = true;
    return;
  }
}

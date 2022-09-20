import getRefs from './get-refs';

const refs = getRefs();

export default class LoadBtnMore {
  constructor() {}

  showBtnLoadMore() {
    refs.btnLoadMore.classList.remove = 'is-hidden';
  }

  hideBtnLoadMore() {
    refs.btnLoadMore.classList.add = 'is-hidden';
  }

  enableBtn() {
    refs.btnLoadMore.disabled = false;
    refs.btnLoadMore.textContent = 'Load More';
  }

  disableBtn() {
    refs.btnLoadMore.disabled = true;
    refs.btnLoadMore.textContent = 'uploading...';
  }
}

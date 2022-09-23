export default function getRefs() {
  return {
    searchForm: document.querySelector('.search-form'),
    inputForm: document.querySelector('[name="searchQuery"]'),
    galleryContainer: document.querySelector('.gallery'),
    loadMore: document.querySelector('.load-more'),
    submitBtn: document.querySelector('.search-form > button'),
    btnTop: document.querySelector('.btn-top'),
  };
}

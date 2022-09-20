export default function getRefs() {
  return {
    searchForm: document.querySelector('.search-form'),
    inputForm: document.querySelector('[name="searchQuery"]'),
    galleryContainer: document.querySelector('.gallery'),
    btnLoadMore: document.querySelector('.load-more'),
  };
}

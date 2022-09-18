const axios = require('axios').default;

const BASE_URL = 'https://pixabay.com/api/';
const KEY = 'key=29999099-708b113120f887f079bd929c2';

export default class AxiosService {
  constructor(searchValue, currentPage, pageLimit) {
    this.searchValue = searchValue;
    this.currentPage = currentPage;
    this.pageLimit = pageLimit;
  }
  searchValue = '';
  currentPage = 1;
  pageLimit = 40;

  async fetchCards() {
    const options = {
      page: this.currentPage,
      per_page: this.pageLimit,
      key: KEY,
      q: this.searchValue,
      // image_type: 'photo',
      // orientation: 'horizontal',
      // safesearch: 'true',
    };
    const result = await axios.get(`${BASE_URL}?${options}`);
    console.log(result);
    this.incrementPage();
    return result;
  }

  incrementPage() {
    this.currentPage += 1;
  }

  resetPage() {
    this.currentPage = 1;
  }

  get query() {
    return this.searchValue;
  }
  set query(newValue) {
    this.searchValue = newValue;
  }
  get currentPage() {
    let currentPage = this.currentPage - 1;
    return currentPage;
  }
}

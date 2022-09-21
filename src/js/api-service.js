const axios = require('axios').default;

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29999099-708b113120f887f079bd929c2';

export default class AxiosService {
  constructor() {
    this.searchValue = '';
    this.currentPage = 1;
    this.perPage = 40;
  }

  async fetchCards() {
    const options = new URLSearchParams({
      page: this.currentPage,
      per_page: this.perPage,
      key: KEY,
      q: this.searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });
    const result = await axios.get(`${BASE_URL}?${options.toString()}`);
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
  // get currentPage() {
  //   let currentPage = this.currentPage - 1;
  //   return currentPage;
  // }
}

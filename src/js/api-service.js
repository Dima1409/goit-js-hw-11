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





// <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

// <div style="background-color:black;color:white;padding:30px">Scroll Down</div>
// <div style="background-color:lightgrey;padding:30px 30px 2500px">This example demonstrates how to create a "scroll to top" button that becomes visible 
//   <strong>when the user starts to scroll the page</strong>.</div>

// <script>
// // Get the button
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
// </script>
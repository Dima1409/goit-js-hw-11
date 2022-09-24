import getRefs from './get-refs';

const refs = getRefs();

export default function scrollBtn() {
  refs.btnTop.addEventListener('click', up);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      refs.btnTop.style.display = 'flex';
    } else {
      refs.btnTop.style.display = 'none';
    }
  }

  let t;
  function up() {
    const top = Math.max(
      document.body.scrollTop,
      document.documentElement.scrollTop
    );
    if (top > 0) {
      window.scrollBy(0, -100);
      t = setTimeout(up, 20);
    } else clearTimeout(t);
    return false;
  }
}

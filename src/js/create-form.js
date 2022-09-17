const formHtml = `<form class="search-form" id="search-form">
  <input
    type="text"
    name="searchQuery"
    autocomplete="off"
    placeholder="Search images..."
  />
  <button type="submit"></button>
</form>`;

function createForm() {
  document.body.innerHTML = formHtml;
}

export { createForm };

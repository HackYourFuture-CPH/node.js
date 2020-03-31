window.handleHomeRequest = () => {
  document.body.innerHTML = `<h1>Home</h1>
  <a href="meals" data-navigo>Meals</a>
  asd
  <a href="meal/1" data-navigo>meal/1</a>
  `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};

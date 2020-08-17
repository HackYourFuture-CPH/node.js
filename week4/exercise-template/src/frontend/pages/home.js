window.handleHomeRequest = () => {
  document.body.innerHTML = `<h1>Home</h1>
  <a href="concerts" data-navigo>See all concerts</a>
  Some text
  <a href="concerts/1" data-navigo>See the concert with id 1</a>
  `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};

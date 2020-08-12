window.handleHomeRequest = () => {
  document.body.innerHTML = `<h1>Home</h1>
  <a href="contacts" data-navigo>Contacts</a>
  asd
  <a href="contact/1" data-navigo>Contact/1</a>
  `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};

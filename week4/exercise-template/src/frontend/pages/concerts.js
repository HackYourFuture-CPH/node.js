window.handleConcertsRequest = () => {
  document.body.innerHTML = `
  <h1>Concerts</h1>
  <ul class="concerts"></ul>`;

  // make sure the backend api works before working with it here
  fetch("/api/concerts")
    .then((response) => response.json())
    .then((concerts) => console.log(concerts));
};

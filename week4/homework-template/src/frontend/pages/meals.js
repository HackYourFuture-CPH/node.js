window.handleMealsRequest = () => {
  document.body.innerHTML = `
  <h1>Meals</h1>`;

  // make sure the backend api works before working with it here
  fetch("/api/meals")
    .then(response => response.json())
    .then(meals => console.log(meals));
};

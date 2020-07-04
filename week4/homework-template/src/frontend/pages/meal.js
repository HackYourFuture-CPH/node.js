window.handleMealRequest = params => {
  document.body.innerHTML = `
  <h1>Meal with id ${params.id}</h1>`;
  // make sure the backend api works before working with it here
  fetch("/api/meal")
    .then(response => response.json())
    .then(meal => console.log(meal));
};

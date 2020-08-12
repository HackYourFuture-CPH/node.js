window.handleContactsRequest = () => {
  document.body.innerHTML = `
  <h1>Contacts</h1>
  <ul class="contacts"></ul>`;

  // make sure the backend api works before working with it here
  fetch("/api/contacts")
    .then((response) => response.json())
    .then((contacts) => renderContacts(contacts));
};

function renderContacts(contacts) {
  const ul = document.querySelector(".contacts");
  contacts.forEach((contact) => {
    const li = document.createElement("li");
    li.innerHTML = contact.name;
    ul.appendChild(li);
  });
}

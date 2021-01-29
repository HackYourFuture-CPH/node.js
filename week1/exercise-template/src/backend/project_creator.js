const renderProjectsList = (projects) => {
  return projects.map((project) => {
    return `<li style="display: flex;
    flex-direction: column;
    align-items: center">
        <h2 style="color: #614e55; font-weight: 800">${project.title}</h2>
        <a href="${project.codeUrl}">See code on github</a>
        <a href="${project.previewUrl}">Check out the project here</a>
        <img src=${project.image} style="width:100px">
        </li>`;
  });
};

module.exports = renderProjectsList;

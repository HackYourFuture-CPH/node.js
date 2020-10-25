const createTitle = (title) => `
<head>
  ${generateCss()}
  <title>${title}</title>
</head>
`;

const generateCss = () => `
<style type = text/css>
    .title {
        background-color: yellow;
    }
    .projectUrl {
        background-color: lightgreen;
    }
    .codeUrl {
        background-color: lightgray;
    }
    .previewUrl {
        background-color: lightpurple;
    }
</style>
`;

// Can also write it like:
// const createTitle = function(title) {
//     return `
// ${generateCss()}
// <head>
//   <title>${title}</title>
// </head>
// `
// };

module.exports = createTitle;

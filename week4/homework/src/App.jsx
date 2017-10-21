import React from "react";
import ReactDOM from "react-dom";

import Header from './Header.jsx';
import Cars from './Cars.jsx';

const mountNode = document.getElementById("container");

const App = () => {
  return (
  <div>
    <Header />
    <Cars />
  </div>
  );
};
ReactDOM.render(<App />, mountNode);

if (module.hot) {
  module.hot.accept();
}

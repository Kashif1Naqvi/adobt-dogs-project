import React from 'react'
import {render} from 'react-dom'
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
    return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "pepper",
      animal: "Bird",
      breed: "Cockitiel",
    }),
    React.createElement(Pet, { name: "Orio", animal: "Dog", breed: "Havenes" }),
    React.createElement(Pet, { name: "Doink", animal: "Dog", breed: "Mixed" })
  );
};
render(React.createElement(App), document.getElementById("root"));

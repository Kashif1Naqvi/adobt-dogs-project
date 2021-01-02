import React from 'react'
import {render} from 'react-dom'
import SearchParams from './SearchParams'

const App = () => {
  //   return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Adopt me!"),
  //   React.createElement(Pet, {
  //     name: "pepper",
  //     animal: "Bird",
  //     breed: "Cockitiel",
  //   }),
  //   React.createElement(Pet, { name: "Orio", animal: "Dog", breed: "Havenes" }),
  //   React.createElement(Pet, { name: "Doink", animal: "Dog", breed: "Mixed" })
  // );
  return(
    <React.StrictMode>
      <div>
        <h1 id="something-important" >Adobt me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  )
};
render(React.createElement(App), document.getElementById("root"));

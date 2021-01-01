import React from 'react'
import {render} from 'react-dom'
import  Pet  from './Pet';
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
    <div>
       <h1 id="something-important" >Adobt me!</h1>
       <Pet name="Pepper" animal="Bird" breed="Cockitiel" />
       <Pet name="Oria" animal="Dog" breed="Havens" />
       <Pet name="Doink" animal="Dog" breed="Mixed" />

    </div>
  )
};
render(React.createElement(App), document.getElementById("root"));
